/** @jsx jsx */
import React, { FC } from 'react';
import { forwardRef } from '@core/utils';
import { usePropsOverwrites } from '@core/styles';
import { jsx } from '@emotion/react';
import { BackdropProps } from './types';
import { useStyles } from './styles';

export const Backdrop: FC<BackdropProps> = forwardRef<HTMLDivElement, BackdropProps>((initialProps, ref) => {
    const { props, cn } = usePropsOverwrites('Backdrop', initialProps);

    const {
        invisible = false,
        children,
        styles: externalStyles,
        ...restProps
    } = props;

    const params = {
        invisible,
    };

    const styles = useStyles({ ...params, styles: externalStyles });

    return (
        <div
            className={cn('root')}
            css={styles.root}
            {...restProps}
            ref={ref}
        >
            {children}
        </div>
    );
});
