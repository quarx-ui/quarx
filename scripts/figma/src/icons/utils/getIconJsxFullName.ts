import { pascalCase } from 'change-case';

export const getIconJsxFullName = (iconName: string, params: string) => pascalCase(iconName + params);
