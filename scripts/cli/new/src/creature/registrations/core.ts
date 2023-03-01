import path from 'path';
import fs from 'fs';
import ts, { ImportDeclaration, ImportSpecifier, InterfaceDeclaration, SourceFile } from 'typescript';
import { CreateComponentProps } from '../types';
import { getTSCompilerOptions } from './utils';
import {
    getSrcAbsolutePath,
    runEslintAutoFix,
    getStylesAbsolutePath,
    sortNodesByPrint,
    uniqueNodesByPrint,
} from '../utils';

/*
* Регистрация компонента в src/(un)main/index.ts или в index.ts родителя компонента.
* */
export const addComponentExport = async ({
    name: componentName,
    type,
    parent,
}: CreateComponentProps): Promise<void> => {
    const srcPath: string = getSrcAbsolutePath();
    const indexFilePath: string = path.join(srcPath, type, parent ?? '', 'index.ts');

    const { factory } = ts;
    const program: ts.Program = ts.createProgram([indexFilePath], getTSCompilerOptions());
    const sourceFile: SourceFile | undefined = program.getSourceFile(indexFilePath);
    const printer: ts.Printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

    if (!sourceFile) { return; }

    /* Префикс './' Используется только для стандарта экспорта, принятого на проекте */
    const nodes: ts.Node[] = [];
    const newModuleLiteral: ts.StringLiteral = factory?.createStringLiteral(
        `./${componentName}`,
        true,
    );
    const componentPath: string = printer.printNode(ts.EmitHint.Unspecified, newModuleLiteral, sourceFile);
    const modules: Set<string> = new Set([componentPath]);
    ts.forEachChild(sourceFile, (node) => {
        if (!ts.isExportDeclaration(node)) {
            nodes.push(node);
            return;
        }
        const module: string | undefined = node.moduleSpecifier?.getText(sourceFile);
        if (!module) { return; }
        modules.add(module);
    });

    const exports: ts.Node[] = [];
    Array.from(modules).sort().forEach((module) => {
        const stringLiteral: ts.Identifier = factory?.createIdentifier(module);
        const exportNode: ts.Node = factory?.createExportDeclaration(
            undefined,
            undefined,
            false,
            undefined,
            stringLiteral,
            undefined,
        );
        exports.push(exportNode);
    });

    const code = printer.printList(
        ts.ListFormat.MultiLine,
        factory?.createNodeArray([...nodes, ...exports]),
        sourceFile,
    );
    fs.writeFileSync(indexFilePath, code);
    await runEslintAutoFix(indexFilePath);
};

/*
* Регистрация нового компонента в ComponentsProps
* (/packages/core/styles/engine/theme/createTheme/types.ts)
*  */
const addComponentToComponentsProps = async ({
    name: componentName,
}: CreateComponentProps): Promise<void> => {
    const stylesPath: string = getStylesAbsolutePath();
    const typesPath: string = path.join(stylesPath, 'engine', 'theme', 'createTheme', 'types.ts');

    const { factory } = ts;
    const program: ts.Program = ts.createProgram([typesPath], getTSCompilerOptions());
    const sourceFile: SourceFile | undefined = program.getSourceFile(typesPath);
    const printer: ts.Printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

    if (!sourceFile) { return; }

    const tabulation = '    ';
    const rootImport = '\'@core\'';
    const interfaceName = 'ComponentsProps';
    const propsName = `${componentName}Props`;
    const nodes: string[] = [];

    const nodeHandler = (node: ts.Node): void => {
        // Добавить пропс в import.
        const isImport = ts.isImportDeclaration(node);
        const importModuleHaveCore = (node as ImportDeclaration)
            ?.moduleSpecifier?.getText(sourceFile) === rootImport;
        const isRootImport = isImport && importModuleHaveCore;
        if (isImport && isRootImport) {
            const componentPropsName: ts.Identifier = factory?.createIdentifier(propsName);
            const componentPropsImport: ts.ImportSpecifier = factory?.createImportSpecifier(
                false,
                undefined,
                componentPropsName,
            );
            const initialImportSpecifiers: ts.Node[] = [componentPropsImport];
            const addSpecifier = (spec: ts.Node): void => { initialImportSpecifiers.push(spec); };
            node.importClause?.namedBindings?.forEachChild(addSpecifier);
            initialImportSpecifiers.sort(sortNodesByPrint(printer, sourceFile));
            const uniqImports = <ImportSpecifier[]>uniqueNodesByPrint(initialImportSpecifiers, printer, sourceFile);

            const imports: string[] = uniqImports.reduce<string[]>((acc, namedImport) => {
                if (!namedImport) { return acc; }
                const line = `${tabulation}${namedImport.name.text},`;
                return [...acc, line];
            }, []);
            const moduleSpecifier = (node as ImportDeclaration)?.moduleSpecifier?.getText(sourceFile);
            const importPropsCode = [
                'import {',
                imports.join('\n'),
                `} from ${moduleSpecifier};`,
            ].join('\n');
            nodes.push(importPropsCode);
            return;
        }

        // Добавить пропс в interface.
        const isInterface = ts.isInterfaceDeclaration(node);
        const isPropsInterface = (node as InterfaceDeclaration).name?.escapedText === interfaceName;
        if (isInterface && isPropsInterface) {
            const componentProps = factory?.createPropertySignature(
                undefined,
                componentName,
                undefined,
                factory.createTypeReferenceNode(propsName, []),
            );
            const types: ts.Node[] = [componentProps];
            node.members?.forEach((type) => types.push(type));
            types.sort(sortNodesByPrint(printer, sourceFile));
            const uniqTypes = uniqueNodesByPrint(types, printer, sourceFile);

            const componentPropsInterface: ts.InterfaceDeclaration = factory?.createInterfaceDeclaration(
                node.decorators,
                node.modifiers,
                node.name,
                node.typeParameters,
                node.heritageClauses,
                <ts.TypeElement[]>uniqTypes,
            );
            nodes.push(printer.printList(
                ts.ListFormat.MultiLine,
                factory?.createNodeArray([componentPropsInterface]),
                sourceFile,
            ));
            return;
        }

        nodes.push(node.getText(sourceFile));
        if (!isImport && !ts.isExportDeclaration(node)) {
            nodes.push(factory?.createIdentifier('\n').getText(sourceFile));
        }
    };
    sourceFile.forEachChild(nodeHandler);

    const code: string = nodes.join('\n');
    fs.writeFileSync(typesPath, code);
    await runEslintAutoFix(typesPath);
};

export const registration = async (
    props: CreateComponentProps,
): Promise<void> => {
    await addComponentExport(props);
    await addComponentToComponentsProps(props);
};
