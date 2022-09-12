/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC } from 'react';
import clsx from 'clsx';
import { RightItemProps } from './types';
import { CrossIcon } from '../assets';

export const RightItem: FC<RightItemProps> = ({
    item,
    resetValue,
    disableClearIcon,
    styles,
    cn,
}) => {
    if (!item && disableClearIcon) { return null; }

    return (
        <div
            css={[styles.rightItem, styles.sideItem]}
            className={clsx(cn('rightItem'), cn('sideItem'))}
        >
            {!disableClearIcon && (
                <div
                    css={styles.closeIcon}
                    className={cn('closeIcon')}
                    onMouseDown={resetValue}
                >
                    <CrossIcon />
                </div>
            )}
            {item && (
                <div
                    css={styles.rightIcon}
                    className={cn('rightIcon')}
                >
                    {item}
                </div>
            )}
        </div>
    );
};
