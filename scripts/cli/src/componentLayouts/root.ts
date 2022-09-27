import { capitalize } from './utils';

export const indexLayout = (componentName: string): string => `export { ${componentName} } from './${componentName}';
export * from './types';
`;

export const typesLayout = (componentName: string): string => `import { Ref } from 'react';
import { ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { ${componentName}StyleKeys, ${componentName}StyleParams } from './styles';

export interface ${componentName}PropsWithoutHtml extends
    Partial<${componentName}StyleParams>,
    WithClassesAndStyles<${componentName}StyleKeys, ${componentName}StyleParams>
{
    /** Пользовательский CSS-класс для корневого элемента */
    className?: string,

    /** Ссылка к корневому элементу */
    ref?: Ref<HTMLDivElement>
}

export type ${componentName}Props = ComponentPropsWithHTML<${componentName}PropsWithoutHtml>;
export * from './styles/types';
`;

export const componentLayout = (componentName: string): string => `/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { ${componentName}Props } from './types';
import { useStyles, ${capitalize(componentName)}_CSS_VARS } from './styles';

export const ${componentName}: FC<${componentName}Props> = forwardRef<HTMLDivElement, ${componentName}Props>((
    initialProps,
    ref
) => {
    const { cn, props } = usePropsOverwrites('${componentName}', initialProps, ${capitalize(componentName)}_CSS_VARS);
    const {
        styles: externalStyles,
        cssVars,
        ...restProps
    } = props;

    const params = {};

    const styles = useStyles({ ...params, cssVars, styles: externalStyles });

    return (
        <div
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            {...restProps}
        >
            ...
        </div>
    );
});
`;
