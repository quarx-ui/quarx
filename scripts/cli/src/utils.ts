import * as path from 'path';
import * as ts from 'typescript';
import TSConfigJSON from '../../../tsconfig.json';
/* eslint-disable @typescript-eslint/no-var-requires */
const { ESLint } = require('eslint');

export const handleError = (err: Error): void => {
    if (err) {
        throw err;
    }
};

export const getCoreAbsolutePath = () => (
    path.join(
        process.cwd(),
        'packages',
        'core',
    )
);

export const getSrcAbsolutePath = () => (
    path.join(
        getCoreAbsolutePath(),
        'src',
    )
);

export const getStylesAbsolutePath = () => (
    path.join(
        getCoreAbsolutePath(),
        'styles',
    )
);

export const getTSCompilerOptions = (): ts.CompilerOptions => ({
    ...TSConfigJSON?.compilerOptions as never as ts.CompilerOptions,
    moduleResolution: undefined,
});

export const runEslintAutoFix = async (filePath: string): Promise<void> => {
    try {
        const eslint = new ESLint({ fix: true, ignore: false });
        const lintResult = await eslint.lintFiles([filePath]);
        await ESLint.outputFixes(lintResult);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(e);
    }
};

export const sortNodesByPrint = (printer: ts.Printer, sourceFile: ts.SourceFile) => (
    (node1: ts.Node, node2: ts.Node): number => {
        const print = (node: ts.Node): string => (
            printer.printNode(ts.EmitHint.Unspecified, node, sourceFile)
        );
        return print(node1) > print(node2) ? 1 : -1;
    }
);

export const uniqueNodesByPrint = (
    nodes: ts.Node[],
    printer: ts.Printer,
    sourceFile: ts.SourceFile,
): ts.Node[] => {
    const prints = new Set();
    const unique: ts.Node[] = [];
    nodes.forEach((node) => {
        const print = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
        const include = prints.has(print);
        if (include) { return; }
        unique.push(node);
        prints.add(print);
    });
    return unique;
};
