/** @jsx jsx */
/** @jsxFrag */
import { jsx } from '@emotion/react';
import React, { FC } from 'react';
import { WarningIcon } from '../assets';
import { BottomProps } from './types';

export const Bottom: FC<BottomProps> = ({
    helperText,
    counter,
    errorText,
    maxLength,
    length,
    styles,
    cn,
}) => {
    const hasErrorText = errorText !== undefined && errorText !== '';

    return (
        <div
            css={styles.bottom}
            className={cn('bottom')}
        >
            <div
                css={styles.bottomText}
                className={cn('bottomText')}
            >
                {hasErrorText
                    ? (
                        <>
                            <WarningIcon />
                            <div
                                css={styles.errorText}
                                className={cn('errorText')}
                            >
                                {errorText}
                            </div>
                        </>
                    )
                    : helperText || null}
            </div>
            {
                counter && (
                    <div
                        css={styles.counterText}
                        className={cn('counterText')}
                    >
                        <span
                            css={styles.length}
                            className={cn('length')}
                        >
                            {length}
                        </span>
                        {maxLength !== undefined
                            ? (
                                <>
                                    <span
                                        css={styles.counterSlash}
                                        className={cn('counterSlash')}
                                    >
                                        &nbsp;/&nbsp;
                                    </span>
                                    <span>{maxLength}</span>
                                </>
                            )
                            : ''}
                    </div>
                )
            }
        </div>
    );
};
