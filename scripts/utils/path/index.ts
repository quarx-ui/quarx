const path = require('path');

const rootDirname = path.resolve('../../');

const initPathResolver = (pathArg: string) => (
    (...args: string[]): string => path.resolve(rootDirname, pathArg, ...args)
);

export const resolveFrom = {
    root: initPathResolver(''),
    core: initPathResolver('packages/core'),
    icons: initPathResolver('packages/icons'),
};
