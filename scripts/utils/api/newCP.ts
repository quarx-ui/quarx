import { indexLayout, typesLayout, componentLayout } from './layouts/root';
import { testLayout } from './layouts/tests';
import { storybookLayout } from './layouts/storybook';
import { stylesLayout, stylesTypesLayout } from './layouts/styles';

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');
const readline = require('readline');

type ComponentType =
    | 'styled'
    | 'unstyled';

const isComponentType = (name: string): name is ComponentType => (
    name === 'styled' || name === 'unstyled'
);

const getCurrentComponentType = (type: ComponentType): string => {
    if (type === 'styled') {
        return 'StyledComponents';
    }
    return 'UnstyledComponents';
};

const fileNotCreated = (err: Error): void => {
    if (err) {
        throw err;
    }
};

export const newCP = (componentTypeName: ComponentType, componentName: string): void => {
    const componentType = getCurrentComponentType(componentTypeName);

    const srcCorePath = path.join(__dirname, '..', '..', '..', 'packages', 'core', 'src');

    const rootFilesPath = path.join(srcCorePath, componentType, componentName);
    const styleFilesPath = path.join(srcCorePath, componentType, componentName, 'styles');
    const storyFilesPath = path.join(srcCorePath, componentType, componentName, 'stories');
    const testFilesPath = path.join(srcCorePath, componentType, componentName, '__tests__');

    const folders = [rootFilesPath, styleFilesPath, storyFilesPath, testFilesPath];
    folders.forEach((folder: string): void => fs.mkdirSync(folder));

    const createFile = (name: string, content: string): void => {
        fs.writeFileSync(path.join(rootFilesPath, name), content, fileNotCreated);
    };

    createFile('index.ts', indexLayout(componentName));
    createFile('constants.ts', '');
    createFile('types.ts', typesLayout(componentName));
    createFile(`${componentName}.tsx`, componentLayout(componentName));
    createFile(`__tests__/${componentName}.test.tsx`, testLayout(componentName));
    createFile(`stories/${componentName}.story.tsx`, storybookLayout(componentName));
    createFile('styles/index.ts', stylesLayout(componentName));
    createFile('styles/types.ts', stylesTypesLayout(componentName));
    createFile('styles/constants.ts', '');
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Component type [styled, unstyled]: ', (componentType: string) => {
    if (!isComponentType(componentType)) {
        throw new Error('Incorrect component type. Component types: [styled, unstyled]');
    }

    rl.question('Component name (TextField, ClickAwayListener...): ', (componentName: string): void => {
        newCP(componentType, componentName);

        rl.close();
    });
});

rl.on('close', () => {
    console.log('Done!');
    process.exit(0);
});
