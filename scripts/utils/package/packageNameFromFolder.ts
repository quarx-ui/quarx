import { resolveFrom } from '../path';

export const packageNameFromFolder = (folder: string): string => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires,global-require,import/no-dynamic-require
    const { name } = require(resolveFrom.root(`packages/${folder}/package.json`));

    return name;
};
