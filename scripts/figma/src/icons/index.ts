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

const resolveIconPath = (path: string) => resolveFrom.icons(`src/${path}`);

type Group = Record<string, string[]>

export const exportIcons = async (): Promise<void> => {
    const writeBuffer: WriteFileType[] = [];
    const dirBuffer: string[] = [];

    // const allIcons: [string, string][] = [];
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
        }) => new Promise<{ name: string, params: string, data: string }>(
            (resolve) => axios.get(link, { timeout: 60000 })
                .then(({ data }) => resolve({
                    ...icon,
                    data,
                }))
                .catch(console.error),
        )));

    iconsWithData
        .sort((a, b) => a.params.localeCompare(b.params))
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

            // allIcons.push([iconName, params]);
            groupByName[iconName].push(params);
            groupBySize[size].push(nameWithParams);

            const svgData = applyCurrentColor(data);
            const tsxData = prepareTsxIcon(componentName, svgData);

            dirBuffer.push(dirPath);

            writeBuffer.push({ path: tsxPath, data: tsxData });
            writeBuffer.push({ path: svgPath, data: svgData });
            writeBuffer.push({ path: indexPath, data: `export { ${componentName} } from './${componentName}';\n` });
        });

    // writeBuffer.push({
    //     path: resolveFrom.icons('storybook/groups.ts'),
    //     data:
    //         `type Group = Record<string, string[]>\n
    //         export const allIcons: [string, string][] = ${stringify(allIcons)}\n
    //         export const groupByName: Group = ${stringify(groupByName)}\n
    //         export const groupBySize: Group = ${stringify(groupBySize)}`,
    // });

    fs.rmdirSync(resolveFrom.icons('src'), { recursive: true });

    dirBuffer.forEach(createFolder);
    await Promise.all(writeBuffer.map(writeFile));
};
