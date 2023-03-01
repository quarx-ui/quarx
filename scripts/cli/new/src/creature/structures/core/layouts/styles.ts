import { capitalize, firstLetterToLowerCase } from '../../utils';

export const index = (componentName: string): string => `\
import {
    KeysFromUseStyles,
    makeStyles,
} from '@core/styles';
import { cssVar } from '@core/utils/cssVars';
import { ${componentName}CSSVarKeys } from './vars';
import { ${componentName}StyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    {
        size,
    }: ${componentName}StyleParams,
    {}: Record<${componentName}CSSVarKeys, string>,
) => ({
    root: {},
}), { name: 'Qx${componentName}' });

export type ${componentName}StyleKeys = KeysFromUseStyles<typeof useStyles>;
`;

export const types = (componentName: string): string => `\
import { PickQxSize } from '@core';

export type ${componentName}Size = PickQxSize<'small' | 'medium' | 'large'>;

export interface ${componentName}StyleParams {
    /** Размер компонента
     *
     * @default medium */
    size: ${componentName}Size;
}
`;

export const vars = (componentName: string): string => `\
import { CssVarKeys, createCssVarNames } from '@core/utils/cssVars';

export const ${firstLetterToLowerCase(componentName)}CssVarNames = [
    'cssTestVar',
] as const;

export type ${componentName}CSSVarKeys = CssVarKeys<typeof ${firstLetterToLowerCase(componentName)}CssVarNames>

export const ${capitalize(componentName)}_CSS_VARS = createCssVarNames(${firstLetterToLowerCase(componentName)}CssVarNames);
`;
