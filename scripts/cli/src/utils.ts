import * as path from 'path';
import * as ts from 'typescript';
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

// TODO: Return config from tsconfig.json
export const getTSCompilerOptions = (): ts.CompilerOptions => ({ allowJs: false });

export const runEslintAutoFix = async (filePath: string): Promise<void> => {
    try {
        const eslint = new ESLint({ fix: true, ignore: false });
        const lintResult = await eslint.lintFiles([filePath]);
        const formatter = await eslint.loadFormatter();
        const mistakes = formatter.format(lintResult);
        // eslint-disable-next-line no-console
        console.log(mistakes);
        await ESLint.outputFixes(lintResult);
    } catch (e) {
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
