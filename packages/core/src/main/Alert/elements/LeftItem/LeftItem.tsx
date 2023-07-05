import { FC } from 'react';
import { QX_SIZE, usePropsOverwrites } from '@core';
import { If } from '@core/src/system/If';
import { ALERT_COLORS } from '@core/src';
import { LeftItemProps } from './types';
import { useStyles } from './styles';
import { mapColorToLeftItem } from './maps';

export const LeftItem: FC<LeftItemProps> = (initialProps) => {
    const { cn, props, styleProps } = usePropsOverwrites('AlertLeftItem', initialProps);

    const {
        color = ALERT_COLORS.default,
        children = 'default',
        size = QX_SIZE.large,

        ...htmlProps
    } = props;

    const params = { color };
    const styles = useStyles({ params, ...styleProps });

    return (
        <If condition={Boolean(children)}>
            <div
                css={styles.root}
                className={cn('root')}
                {...htmlProps}
            >
                {children === 'default' ? mapColorToLeftItem[size][color] : children}
            </div>
        </If>
    );
};
