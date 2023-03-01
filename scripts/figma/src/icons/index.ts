import axios from 'axios';
import { paramCase, pascalCase } from 'change-case';
import fs from 'fs';
import { CONFIG } from '../api/config';
import { figmaApi, getImage } from '../api';
import { resolveFrom } from '../../../utils/path';
import { writeFile, WriteFileType } from '../utils/file/writeFile';
import { getNotUniqueNames } from './utils/getNotUniqueNames';
import { getNotSpecifiedNames } from './utils/getNotSpecifiedNames';
import { prepareIconsComponents } from './utils/prepareIconsComponents';
import { applyCurrentColor } from './utils/applyCurrentColor';
import { prepareTsxIcon } from './utils/prepareTsxIcon';
import { createFolder } from './utils/createFolder';
import { stringify } from '../utils';
import { getIconJsxFullName } from './utils/getIconJsxFullName';
import { getIconImportTemplate } from './utils/getIconImportTemplate';

const resolveIconPath = (path: string) => resolveFrom.icons(`src/${path}`);

type Group = Record<string, string[]>

const sortGroup = (group: Group): Group => {
    const sortedGroup: Group = {};

    const sortedKeys = Object.keys(group).sort();

    sortedKeys.forEach((key) => {
        sortedGroup[key] = group[key];
        sortedGroup[key].sort();
    });

    return sortedGroup;
};

export const exportIcons = async (): Promise<void> => {
    const writeBuffer: WriteFileType[] = [];
    const dirBuffer: string[] = [];

    const iconsImports: string[] = [];
    const allIcons: string[] = [];
    const groupByName: Group = {};
    const groupBySize: Group = {};

    const componentsRes = await figmaApi.getFileComponents(CONFIG.ICONS_FILE_KEY);

    const iconsComponents = componentsRes.meta?.components;

    if (!iconsComponents) {
        throw new Error('Couldn\'t get icon components');
    }

    const notUniqueSVG = getNotUniqueNames(iconsComponents);
    if (notUniqueSVG.length) {
        throw new Error(`Non-unique SVG names in Figma:\n${notUniqueSVG.join('\n')}`);
    }

    const notSpecifiedNames = getNotSpecifiedNames(iconsComponents);
    if (notSpecifiedNames.length) {
        throw new Error(`There is components with wrong name pattern:\n${notSpecifiedNames.join('\n')}`);
    }

    const iconsNodeIds = iconsComponents
        .map((icon) => icon.node_id);
    if (!iconsNodeIds.length) {
        throw new Error('Empty result');
    }

    const iconsLink = await getImage(CONFIG.ICONS_FILE_KEY, iconsNodeIds);
    if (iconsNodeIds.length !== Object.keys(iconsLink).length) {
        throw new Error('Couldn\'t get all the links');
    }

    const preparedComponents = prepareIconsComponents(iconsComponents, iconsLink);

    const iconsWithData = await Promise.all(preparedComponents
        .map(({
            link,
            ...icon
        }) => new Promise<{ name: string; params: string; data: string }>(
            (resolve) => axios.get(link, { timeout: 60000 })
                .then(({ data }) => resolve({
                    ...icon,
                    data,
                }))
                .catch(console.error),
        )));

    iconsWithData
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach(({ params, name, data }) => {
            const componentName = `${pascalCase(name)}Icon`;
            const iconName = paramCase(name);
            const nameWithParams = `${iconName}/${params}`;
            const dirPath = resolveIconPath(nameWithParams);
            const tsxFileName = `${componentName}.tsx`;
            const tsxPath = `${dirPath}/${tsxFileName}`;
            const svgPath = `${dirPath}/${iconName}.svg`;
            const indexPath = `${dirPath}/index.ts`;

            const size = params.split('/')[0];

            if (!groupByName[iconName]) {
                groupByName[iconName] = [];
            }

            if (!groupBySize[size]) {
                groupBySize[size] = [];
            }

            iconsImports.push(getIconImportTemplate(iconName, params));
            allIcons.push(`'${iconName}/${params}': ${getIconJsxFullName(iconName, params)},`);
            groupByName[iconName].push(params);
            groupBySize[size].push(nameWithParams);

            const svgData = applyCurrentColor(data);
            const tsxData = prepareTsxIcon(componentName, svgData);

            dirBuffer.push(dirPath);

            writeBuffer.push({ path: tsxPath, data: tsxData });
            writeBuffer.push({ path: svgPath, data: svgData });
            writeBuffer.push({ path: indexPath, data: `export { ${componentName} } from './${componentName}';\n` });
        });

    iconsImports.sort();
    allIcons.sort();
    const sortedByName = sortGroup(groupByName);
    const sortedBySize = sortGroup(groupBySize);

    writeBuffer.push({
        path: resolveFrom.icons('storybook/groups.ts'),
        data:
            `/* eslint-disable max-len */
            import { ComponentType } from 'react';
            ${iconsImports.join('\n')}

            export const allIcons: Record<string, ComponentType> = {\n${allIcons.join('\n')}\n}

            export const groupByName: Record<string, string[]> = ${stringify(sortedByName)}

            export const groupBySize: Record<string, string[]> = ${stringify(sortedBySize)}`,
    });

    fs.rmdirSync(resolveFrom.icons('src'), { recursive: true });

    dirBuffer.forEach(createFolder);
    await Promise.all(writeBuffer.map(writeFile));
};
