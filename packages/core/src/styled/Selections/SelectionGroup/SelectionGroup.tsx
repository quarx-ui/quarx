/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef } from 'react';
import { PALETTE_COLORS, usePropsOverwrites } from '@core/styles';
import { If } from '@core';
import { QX_SIZE } from '@core/enums';
import { SELECTION_GROUP_TYPE } from './styles/constants';
import { SelectionGroupProps } from './types';
import { useStyles, SELECTION_GROUP_CSS_VARS } from './styles';

export const SelectionGroup: FC<SelectionGroupProps> = forwardRef<HTMLDivElement, SelectionGroupProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('SelectionGroup', initialProps, SELECTION_GROUP_CSS_VARS);
    const {
        title,
        description,
        helperText,
        hidden,
        type = SELECTION_GROUP_TYPE.text,
        color = PALETTE_COLORS.brand,
        size = QX_SIZE.medium,
        children,
        ...restProps
    } = props;

    const params = {
        color,
        size,
        type,
    };

    const styles = useStyles({ ...params, ...styleProps });

    return (
        <If condition={!hidden}>
            <div
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
                {...restProps}
            >
                <If condition={Boolean(title)}>
                    <span
                        className={cn('title')}
                        css={styles.title}
                    >
                        {title}
                    </span>
                </If>
                <If condition={Boolean(description)}>
                    <span
                        className={cn('description')}
                        css={styles.description}
                    >
                        {description}
                    </span>
                </If>
                <If condition={Boolean(children)}>
                    <div
                        className={cn('content')}
                        css={styles.content}
                    >
                        {children}
                    </div>
                </If>
                <If condition={Boolean(helperText)}>
                    <span
                        className={cn('helperText')}
                        css={styles.helperText}
                    >
                        {helperText}
                    </span>
                </If>
            </div>
        </If>
    );
});
