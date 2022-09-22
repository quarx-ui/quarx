export const stylesLayout = (componentName: string): string => `import {
    KeysFromUseStyles,
    makeStyles,
} from '@core';
import { ${componentName}StyleParams } from './types';

export const useStyles = makeStyles((
    { palette },
    {}: ${componentName}StyleParams
) => ({
    root: {},
}), { name: 'Qx${componentName}' });

export type ${componentName}StyleKeys = KeysFromUseStyles<typeof useStyles>;
export type { ${componentName}StyleParams };
`;

export const stylesTypesLayout = (componentName: string): string => `export interface ${componentName}StyleParams {
}
`;
