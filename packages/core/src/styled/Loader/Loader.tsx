/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { LoaderProps } from './types';
import { useStyles } from './styles';

export const Loader: FC<LoaderProps> = forwardRef<HTMLDivElement, LoaderProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('Loader', initialProps);
    const {
        size = 'large',
        twoDots,
        ...restProps
    } = props;

    const params = { size };

    const styles = useStyles({ ...params, ...styleProps });

    return (
        <div
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            {...restProps}
        >
            <div
                className={cn('dot')}
                css={styles.dot}
            />
            <div
                className={cn('dot')}
                css={styles.dot}
            />
            {!twoDots
                && (
                    <div
                        className={cn('dot')}
                        css={styles.dot}
                    />
                )}
        </div>
    );
});
