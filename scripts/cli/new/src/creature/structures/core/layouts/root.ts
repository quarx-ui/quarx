import { capitalize } from '../../utils';

export const index = (componentName: string): string => `\
export * from './styles/types';
export * from './types';
export { ${componentName} } from './${componentName}';
`;

export const types = (componentName: string): string => `\
import { BaseProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { ${componentName}StyleParams } from './styles/types';
import { ${componentName}StyleKeys } from './styles';

export interface ${componentName}PropsWithoutHtml extends
    BaseProps<HTMLDivElement>,
    Partial<${componentName}StyleParams>,
    WithClassesAndStyles<${componentName}StyleKeys, ${componentName}StyleParams>
{
}

export type ${componentName}Props = ComponentPropsWithHTML<${componentName}PropsWithoutHtml>;
`;

export const component = (componentName: string): string => `\
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
