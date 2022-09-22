/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef, MouseEventHandler } from 'react';
import { QX_BORDER_SIZE, QX_SIZE } from '@core/enums';
import { usePropsOverwrites } from '@core';
import { useStyles } from './styles';
import { SelectionProps } from './types';

export const Selection: FC<SelectionProps> = forwardRef<HTMLDivElement, SelectionProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('Selection', initialProps);
    const {
        leftAdornment,
        rightAdornment,
        title,
        subTitle,
        errorText,
        reverse = false,
        styles: externalStyles,
        size = QX_SIZE.medium,
        hidden = false,
        disabled = false,
        focused = false,
        styleHover = 'default',
        borderRadius = QX_BORDER_SIZE.smooth,
        onClick,
        ...restProps
    } = props;

    const params = {
        size,
        disabled,
        focused,
        styleHover,
        borderRadius,
        subShown: !!subTitle || !!errorText,
    };

    const styles = useStyles({ ...params, styles: externalStyles });

    const leftAdornmentCalc = reverse ? rightAdornment : leftAdornment;
    const rightAdornmentCalc = reverse ? leftAdornment : rightAdornment;

    const clickHandler: MouseEventHandler<HTMLDivElement> = (e) => {
        if (disabled) { return; }
        e.preventDefault();
        onClick?.(e);
    };

    if (hidden) {
        return null;
    }

    return (
        <div
            css={styles.root}
            className={cn('root', params)}
            onClick={clickHandler}
            ref={ref}
            {...restProps}
        >
            {leftAdornmentCalc && (
                <div
                    css={styles.leftAdornment}
                    className={cn('leftAdornment')}
                >
                    {leftAdornmentCalc}
                </div>
            )}
            <div
                css={styles.text}
                className={cn('text')}
            >
                {title
                    && (
                        <div
                            css={styles.title}
                            className={cn('title')}
                        >
                            {title}
                        </div>
                    )}
                {subTitle
                    && (
                        <div
                            css={styles.subTitleText}
                            className={cn('subTitleText')}
                        >
                            {subTitle}
                        </div>
                    )}
                {errorText
                    && (
                        <div
                            css={styles.errorText}
                            className={cn('errorText')}
                        >
                            {errorText}
                        </div>
                    )}
            </div>
            {rightAdornmentCalc && (
                <div
                    css={styles.rightAdornment}
                    className={cn('rightAdornment')}
                >
                    {rightAdornmentCalc}
                </div>
            )}
        </div>
    );
});
