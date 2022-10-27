import { pascalCase } from 'change-case';
import { getIconJsxFullName } from './getIconJsxFullName';

export const getIconImportTemplate = (name: string, params: string) => (
    `import { ${pascalCase(name)}Icon as ${getIconJsxFullName(name, params)} } from '../src/${name}/${params}'`
);
