import * as ts from 'typescript';
import TSConfigJSON from '../../../../../../tsconfig.json';

export const getTSCompilerOptions = (): ts.CompilerOptions => ({
    ...TSConfigJSON?.compilerOptions as never as ts.CompilerOptions,
    moduleResolution: undefined,
});
