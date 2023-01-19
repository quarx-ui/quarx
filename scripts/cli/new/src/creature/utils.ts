/* eslint-disable @typescript-eslint/no-var-requires */
import path from 'path';
import ts from 'typescript';

const { ESLint } = require('eslint');

export const handleError = (err: Error): void => {
    if (err) {
        throw err;
    }
};

export const getCoreAbsolutePath = (): string => (
    path.join(
        process.cwd(),
        'packages',
        'core',
    )
);

export const getSrcAbsolutePath = (): string => (
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

export const runEslintAutoFix = async (filePath: string): Promise<void> => {
    try {
        const engine = new ESLint({ fix: true, ignore: false });
        const results = await engine.lintFiles([filePath]);
        await ESLint.outputFixes(results);
    } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
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
