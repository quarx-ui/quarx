import path from 'path';
import { runEslintAutoFix, getSrcAbsolutePath } from '../../utils';
import { CreateComponentProps } from '../../types';
import { GenerateTestsTemplate } from '../../constants';
import { CreateStructureProps } from '../types';
import { initCreateFile, initMakeDir } from '../utils';
import { CoreLayouts } from './layouts';

const createRootFiles = async ({
    options: { name: componentName },
    createFile,
}: CreateStructureProps): Promise<void> => {
    const files = {
        index: 'index.ts',
        constants: 'constants.ts',
        types: 'types.ts',
        component: `${componentName}.tsx`,
    };

    await createFile(files.index, CoreLayouts.root.index(componentName));
    await createFile(files.constants, '');
    await createFile(files.types, CoreLayouts.root.types(componentName));
    await createFile(files.component, CoreLayouts.root.component(componentName));
};

const createStylesFiles = async ({
    options: { name: componentName },
    makeDir,
    createFile,
}: CreateStructureProps): Promise<void> => {
    const folder = 'styles';
    const files = {
        index: `${folder}/index.ts`,
        constants: `${folder}/constants.ts`,
        types: `${folder}/types.ts`,
        vars: `${folder}/vars.ts`,
    };

    await makeDir(folder);
    await createFile(files.index, CoreLayouts.styles.index(componentName));
    await createFile(files.types, CoreLayouts.styles.types(componentName));
    await createFile(files.constants, '');
    await createFile(files.vars, CoreLayouts.styles.vars(componentName));
};

const createStoriesFiles = async ({
    options: { name: componentName, type: componentType, parent },
    makeDir,
    createFile,
}: CreateStructureProps): Promise<void> => {
    const folder = 'storybook';
    const sandboxStoryFolder = 'sandbox';
    const sizesStoryFolder = 'sizes';
    const files = {
        index: `${folder}/${componentName}.story.tsx`,
        sandboxStory: `${folder}/${sandboxStoryFolder}/index.tsx`,
        sandboxStoryDescription: `${folder}/${sandboxStoryFolder}/description.md`,
        sizesStory: `${folder}/${sizesStoryFolder}/index.tsx`,
        sizesStoryDescription: `${folder}/${sizesStoryFolder}/description.md`,
    };

    await makeDir(folder);
    await makeDir(path.join(folder, sandboxStoryFolder));
    await makeDir(path.join(folder, sizesStoryFolder));
    await createFile(files.index, CoreLayouts.storybook.storybook(componentName, componentType, parent ?? ''));
    await createFile(files.sandboxStory, CoreLayouts.storybook.sandboxStory(componentName));
    await createFile(files.sandboxStoryDescription, '');
    await createFile(files.sizesStory, CoreLayouts.storybook.sizesStory(componentName));
    await createFile(files.sizesStoryDescription, '');
};

const createTestsFiles = async ({
    options: { name: componentName },
    makeDir,
    createFile,
}: CreateStructureProps): Promise<void> => {
    const folder = '__tests__';
    const files = {
        snapshots: `${folder}/${componentName}.test.tsx`,
        pw: `${componentName}.test.pw.ts`,
    };

    await makeDir(folder);
    await createFile(files.snapshots, CoreLayouts.tests.jest(componentName));
};

/* Создание структуры каталогов для компонента */
export const createCoreFiles = async (options: CreateComponentProps): Promise<void> => {
    const srcCorePath: string = getSrcAbsolutePath();
    const componentPath: string = path.join(srcCorePath, options.type, options.parent ?? '', options.name);
    const makeDir = initMakeDir(componentPath);
    const createFile = initCreateFile(componentPath);

    const props: CreateStructureProps = { options, makeDir, createFile };

    await makeDir('');
    if (options.tests === GenerateTestsTemplate.only) {
        await createTestsFiles(props);
        await runEslintAutoFix(componentPath);
        return;
    }

    if (options.tests === GenerateTestsTemplate.yes) {
        await createTestsFiles(props);
    }
    await createRootFiles(props);
    await createStylesFiles(props);
    await createStoriesFiles(props);
    await runEslintAutoFix(componentPath);
};
