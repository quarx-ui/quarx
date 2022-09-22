import * as ts from 'typescript';
import * as path from 'path';
import * as fs from 'fs';
import { ImportDeclaration, ImportSpecifier, InterfaceDeclaration, SourceFile } from 'typescript';
import { ComponentsProps } from '@core';
import { componentLayout, indexLayout, typesLayout } from './componentLayouts/root';
import { storybookLayout } from './componentLayouts/storybook';
import { stylesLayout, stylesTypesLayout } from './componentLayouts/styles';
import { testLayout, testPW } from './componentLayouts/tests';
import {
    getSrcAbsolutePath,
    getStylesAbsolutePath,
    getTSCompilerOptions,
    runEslintAutoFix,
    sortNodesByPrint,
    uniqueNodesByPrint,
} from './utils';

export enum ComponentType {
    styled = 'styled',
    unstyled = 'unstyled',
}

interface CreateComponentProps {
    type: ComponentType;
    name: string;
    tests: '+' | '-' | 'only';
    parent?: keyof ComponentsProps;
}

interface CreateStructureProps {
    options: CreateComponentProps,
    makeDir(folderName: string): void,
    createFile(file: string, content: string): void,
}

export const isComponentType = (name: string): name is ComponentType => (
    name === ComponentType.styled || name === ComponentType.unstyled
);

/*
* Регистрация компонента в src/(un)styled/index.ts.
* */
const addComponentExport = async ({
    name: componentName,
    type: componentType,
    parent,
}: CreateComponentProps): Promise<void> => {
    const srcPath: string = getSrcAbsolutePath();
    const indexFilePath: string = path.join(srcPath, 'index.ts');

    const { factory } = ts;
    const program: ts.Program = ts.createProgram([indexFilePath], getTSCompilerOptions());
    const sourceFile: SourceFile | undefined = program.getSourceFile(indexFilePath);
    const printer: ts.Printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

    if (!sourceFile) { return; }

    /* Префикс './' Используется только для стандарта экспорта, принятого на проекте */
    const nodes: ts.Node[] = [];
    const newModuleLiteral: ts.StringLiteral = factory?.createStringLiteral(
        `./${path.join(componentType, parent ?? '', componentName)}`,
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

    const rootImport = '\'@core\'';
    const interfaceName = 'ComponentsProps';
    const propsName = `${componentName}Props`;
    const nodes: ts.Node[] = [];

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

            const importProps: ts.ImportDeclaration = factory?.createImportDeclaration(
                node.decorators,
                node.modifiers,
                factory?.createImportClause(
                    Boolean(node.importClause?.isTypeOnly),
                    node.importClause?.name,
                    factory?.createNamedImports(uniqImports),
                ),
                node.moduleSpecifier,
                node.assertClause,
            );
            nodes.push(importProps);
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
            nodes.push(componentPropsInterface);
            return;
        }
        nodes.push(node);
    };
    sourceFile.forEachChild(nodeHandler);

    const code: string = printer.printList(
        ts.ListFormat.MultiLine,
        factory?.createNodeArray(nodes),
        sourceFile,
    );
    fs.writeFileSync(typesPath, code);
    await runEslintAutoFix(typesPath);
};

const createRootStructures = async ({
    options: { name: componentName },
    createFile,
}: CreateStructureProps): Promise<void> => {
    const files = {
        index: 'index.ts',
        constants: 'constants.ts',
        types: 'types.ts',
        component: `${componentName}.tsx`,
    };

    createFile(files.index, indexLayout(componentName));
    createFile(files.constants, '');
    createFile(files.types, typesLayout(componentName));
    createFile(files.component, componentLayout(componentName));
};

const createStylesStructures = async ({
    options: { name: componentName },
    makeDir,
    createFile,
}: CreateStructureProps): Promise<void> => {
    const folder = 'styles';
    const files = {
        index: `${folder}/index.ts`,
        constants: `${folder}/constants.ts`,
        types: `${folder}/types.ts`,
    };

    makeDir(folder);
    createFile(files.index, stylesLayout(componentName));
    createFile(files.types, stylesTypesLayout(componentName));
    createFile(files.constants, '');
};

const createStoriesStructures = async ({
    options: { name: componentName },
    makeDir,
    createFile,
}: CreateStructureProps): Promise<void> => {
    const folder = 'stories';
    const files = { index: `${folder}/${componentName}.story.tsx` };

    makeDir(folder);
    createFile(files.index, storybookLayout(componentName));
};

const createTestsStructures = async ({
    options: { name: componentName },
    makeDir,
    createFile,
}: CreateStructureProps): Promise<void> => {
    const folder = '__tests__';
    const files = {
        snapshots: `${folder}/${componentName}.test.tsx`,
        pw: `${folder}/${componentName}.pw.tsx`,
    };

    makeDir(folder);
    createFile(files.snapshots, testLayout(componentName));
    createFile(files.pw, testPW(componentName));
};

/* Создание структуры каталогов для компонента */
const createFilesStructure = async (options: CreateComponentProps): Promise<void> => {
    const srcCorePath: string = getSrcAbsolutePath();
    const componentPath: string = path.join(srcCorePath, options.type, options.parent ?? '', options.name);
    const makeDir = (folderName: string): void => {
        try {
            fs.mkdirSync(path.join(componentPath, folderName), { recursive: true });
        } catch (e) {
            console.warn(e);
        }
    };
    const createFile = (fileName: string, content: string): void => {
        try {
            fs.writeFileSync(path.join(componentPath, fileName), content);
        } catch (e) {
            console.warn(e);
        }
    };

    const props: CreateStructureProps = { options, makeDir, createFile };

    makeDir('');
    if (options.tests) {
        await createTestsStructures(props);
        if (options.tests === 'only') {
            await runEslintAutoFix(componentPath);
            return;
        }
    }

    await createRootStructures(props);
    await createStylesStructures(props);
    await createStoriesStructures(props);
    await runEslintAutoFix(componentPath);
};

/* Проверка передаваемых параметров */
const checkCreateComponentOptions = ({
    type,
    name,
    tests,
}: CreateComponentProps): void => {
    const incorrectTypeOption = !isComponentType(type);
    const incorrectTestsOption = !['only', '+', '', undefined].includes(tests);

    if (incorrectTypeOption) {
        throw new Error(`Component type error. Expected: [styled, unstyled]. Received: ${type}`);
    }
    if (!name || !type) {
        throw new Error('Name, Type are required options');
    }
    if (incorrectTestsOption) {
        throw new Error(`Tests error. Expected: [+, only, undefined]. Received: ${tests}`);
    }
};

/* Создание и регистрация нового компонента */
export const createComponent = async (options: CreateComponentProps): Promise<void> => {
    checkCreateComponentOptions(options);
    await createFilesStructure(options);

    await addComponentExport(options);
    await addComponentToComponentsProps(options);
};
