import { capitalize } from './utils';

export const indexLayout = (componentName: string): string => `\
export { ${componentName} } from './${componentName}';
export * from './types';
`;

export const typesLayout = (componentName: string): string => `\
import { Ref } from 'react';
import { BaseProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { ${componentName}StyleKeys, ${componentName}StyleParams } from './styles';

export interface ${componentName}PropsWithoutHtml extends
    BaseProps<HTMLDivElement>,
    Partial<${componentName}StyleParams>,
    WithClassesAndStyles<${componentName}StyleKeys, ${componentName}StyleParams>
{
}

export type ${componentName}Props = ComponentPropsWithHTML<${componentName}PropsWithoutHtml>;
export * from './styles/types';
`;

export const componentLayout = (componentName: string): string => `\
import { FC, forwardRef } from 'react';
import { If } from '@core';
import { usePropsOverwrites } from '@core/styles';
import { ${componentName}Props } from './types';
import { useStyles, ${capitalize(componentName)}_CSS_VARS } from './styles';

export const ${componentName}: FC<${componentName}Props> = forwardRef<HTMLDivElement, ${componentName}Props>((
    initialProps,
    ref
) => {
    const { cn, props, styleProps } = usePropsOverwrites('${componentName}', initialProps, ${capitalize(componentName)}_CSS_VARS);
    const {
        hidden = false,

        ...restProps
    } = props;

    const params = {};

    const styles = useStyles({ ...params, ...styleProps });

    return (
        <If condition={!hidden}>
            <div
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
                {...restProps}
            >
                ...
            </div>
        </If>
    );
});
`;
