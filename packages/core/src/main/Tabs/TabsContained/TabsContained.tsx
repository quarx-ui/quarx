/** @jsx jsx */
import React, { ForwardedRef } from 'react';
import { jsx } from '@emotion/react';
import { PALETTE_COLORS, usePropsOverwrites, QX_SIZE, mergeRefs, forwardRef } from '@core';
import clsx from 'clsx';
import { disableTransitionIf } from '../common/disableTransitionIf';
import { useStyles } from './styles';
import { TabItem, TABS_FADE_WIDTH, useTabs } from '../common';
import { TabsContainedProps } from './types';
import { TabItemContained } from './TabItemContained';
import { TabsContainer } from '../index';

export const TabsContained = forwardRef(<T extends TabItem = TabItem>(
    initialProps: TabsContainedProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
) => {
    const {
        props,
        cn,
        styleProps,
    } = usePropsOverwrites('TabsContained', initialProps);

    const {
        items,
        value: externalValue,
        onSetValue,
        defaultValue,
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
        pointerInnerRef,
        selectedLeft,
        selectedWidth,
        scrollPosition,
        initOnSelect,
        initOnKeyPress,
        initOnScroll,
        isFirstAppearance,
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
                <TabItemContained
                    size={size}
                    component={TabItemComponent}
                    {...itemProps}
                    className={clsx(cn('tab'), anyItemProps.className)}
                    css={styles.tab}
                    color={color}
                    tabIndex={(forInnerView || isSelected) ? -1 : 0}
                    borderRadius={borderRadius}
                    selected={forInnerView}
                    area-disabled={forInnerView ? 'true' : undefined}
                    ref={(!forInnerView && isSelected) ? selectedRef : undefined}
                    onClick={initOnSelect(item, anyItemProps.onClick)}
                    onKeyPress={initOnKeyPress(item, anyItemProps.onKeyPress)}
                >
                    {label}
                </TabItemContained>
            );
        })
    );

    return (
        <TabsContainer
            ref={mergeRefs(ref, internalRef)}
            className={cn('root', params)}
            css={styles.root}
            scrollPosition={scrollPosition}
            {...restProps}
            onScroll={initOnScroll(restProps.onScroll)}
        >
            {renderItems()}
            <div
                className={cn('pointer')}
                css={[
                    styles.pointer,
                    { width: selectedWidth, left: selectedLeft },
                    disableTransitionIf(isFirstAppearance),
                ]}
            >
                <div
                    ref={pointerInnerRef}
                    className={cn('pointerInner')}
                    css={[
                        styles.pointerInner,
                        { left: -selectedLeft },
                        disableTransitionIf(isFirstAppearance),
                    ]}
                >
                    {renderItems(true)}
                </div>
            </div>
        </TabsContainer>
    );
});
