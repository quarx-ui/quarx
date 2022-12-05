/** @jsx jsx */
import React, { ForwardedRef } from 'react';
import { jsx } from '@emotion/react';
import { PALETTE_COLORS, usePropsOverwrites, QX_SIZE, forwardRef } from '@core';
import clsx from 'clsx';
import { useStyles } from './styles';
import { TabItem, TABS_FADE_WIDTH, useTabs } from '../common';
import { TabsSegmentedProps } from './types';
import { TabItemSegmented } from './TabItemSegmented';
import { TABS_SEGMENTED_PADDING } from './constants';
import { TabsContainer } from '../index';

export const TabsSegmented = forwardRef(<T extends TabItem = TabItem>(
    initialProps: TabsSegmentedProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
) => {
    const {
        props,
        cn,
        styleProps,
    } = usePropsOverwrites('TabsSegmented', initialProps);

    const {
        items,
        value: externalValue,
        onSetValue,
        defaultValue,
        icons,
        scrollOptions,

        TabItemComponent,

        size = QX_SIZE.medium,
        color = PALETTE_COLORS.brand,
        borderRadius = QX_SIZE.medium,
        ...restProps
    } = props;

    const params = {
        size,
        color,
        borderRadius,
    };

    const styles = useStyles({ ...params, ...styleProps });

    const {
        value,
        internalRef,
        selectedRef,
        selectedLeft,
        selectedWidth,
        scrollPosition,
        initOnSelect,
        initOnKeyPress,
        initOnScroll,
    } = useTabs({
        items,
        value: externalValue,
        defaultValue,
        onSetValue,
        scrollOptions: {
            padding: TABS_FADE_WIDTH,
            ...scrollOptions,
        },
    });

    const renderItems = (forInnerView = false) => (
        items.map((item) => {
            const {
                value: itemValue,
                label,
                ...itemProps
            } = item;

            const isSelected = itemValue === value;

            const anyItemProps = itemProps as any;

            return (
                <TabItemSegmented
                    size={size}
                    icon={icons}
                    color={color}
                    borderRadius={borderRadius}
                    component={TabItemComponent}
                    {...itemProps}
                    className={clsx(cn('tab'), anyItemProps.className)}
                    css={[
                        styles.tab,
                        isSelected && { '&:focus-visible': { boxShadow: 'none' } },
                    ]}
                    tabIndex={(forInnerView || isSelected) ? -1 : 0}
                    selected={forInnerView}
                    area-disabled={forInnerView ? 'true' : undefined}
                    ref={(!forInnerView && isSelected) ? selectedRef : undefined}
                    onClick={initOnSelect(item, anyItemProps.onClick)}
                    onKeyPress={initOnKeyPress(item, anyItemProps.onKeyPress)}
                >
                    {label}
                </TabItemSegmented>
            );
        })
    );

    return (
        <div
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
            {...restProps}
        >
            <TabsContainer
                ref={internalRef}
                className={cn('container')}
                css={styles.container}
                scrollPosition={scrollPosition}
                onScroll={initOnScroll(restProps.onScroll)}
            >
                {renderItems()}
                <div
                    className={cn('pointer')}
                    css={[styles.pointer, { width: selectedWidth, left: selectedLeft }]}
                >
                    <div
                        className={cn('pointerInner')}
                        css={[styles.pointerInner, { left: -selectedLeft + TABS_SEGMENTED_PADDING }]}
                    >
                        {renderItems(true)}
                    </div>
                </div>
            </TabsContainer>
        </div>
    );
});
