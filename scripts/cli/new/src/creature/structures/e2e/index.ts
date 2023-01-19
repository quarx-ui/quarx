import path from 'path';
import { CreateComponentProps } from '../../types';
import { runEslintAutoFix } from '../../utils';
import { GenerateTestsTemplate } from '../../constants';
import { CreateStructureProps } from '../types';
import { initCreateFile, initMakeDir } from '../utils';
import { E2ELayouts } from './layouts';

const createPWFiles = async ({
    options: { name, tests },
    createFile,
}: CreateStructureProps): Promise<boolean> => {
    if (tests === GenerateTestsTemplate.no) {
        return false;
    }

    const files = {
        pw: `${name}.test.pw.ts`,
    };

    await createFile(files.pw, E2ELayouts.tests.pw(name));

    return true;
};

export const createE2EFiles = async (
    options: CreateComponentProps,
): Promise<void> => {
    const rootDir = process.cwd();
    const componentPath = path.join(rootDir, 'e2e', 'src', options.type ?? '', options.parent ?? '', options.name);
    const makeDir = initMakeDir(componentPath);
    const createFile = initCreateFile(componentPath);

    await makeDir('');
    const result = await createPWFiles({ options, createFile, makeDir });

    if (!result) { return; }

    await runEslintAutoFix(componentPath);
};
