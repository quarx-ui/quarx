import { ForwardedRef } from 'react';
import { PALETTE_COLORS, usePropsOverwrites, QX_SIZE, mergeRefs, forwardRef } from '@core';
import clsx from 'clsx';
import { disableTransitionIf } from '../common/disableTransitionIf';
import { useStyles } from './styles';
import { TABS_LINES } from './constants';
import { TabItem, TABS_FADE_WIDTH, useTabs } from '../common';
import { TabsDefaultProps } from './types';
import { TabItemDefault } from './TabItemDefault';
import { TabsContainer } from '../index';

export const TabsDefault = forwardRef(<T extends TabItem = TabItem>(
    initialProps: TabsDefaultProps<T>,
    ref: ForwardedRef<HTMLDivElement>,
) => {
    const {
        props,
        cn,
        styleProps,
    } = usePropsOverwrites('TabsDefault', initialProps);

    const {
        items,
        value: externalValue,
        onSetValue,
        defaultValue,
        scrollOptions,

        TabItemComponent,

        size = QX_SIZE.medium,
        color = PALETTE_COLORS.brand,
        line = TABS_LINES.down,
        ...restProps
    } = props;

    const params = {
        size,
        color,
        line,
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

    return (
        <TabsContainer
            ref={mergeRefs(ref, internalRef)}
            className={cn('root', params)}
            css={styles.root}
            scrollPosition={scrollPosition}
            {...restProps}
            onScroll={initOnScroll(restProps.onScroll)}
        >
            {items.map((item) => {
                const {
                    value: itemValue,
                    label,
                    ...itemProps
                } = item;

                const isSelected = itemValue === value;

                const anyItemProps = itemProps as any;

                return (
                    <TabItemDefault
                        size={size}
                        line={line}
                        component={TabItemComponent}
                        {...itemProps}
                        className={clsx(cn('tab'), anyItemProps.className)}
                        css={styles.tab}
                        selected={isSelected}
                        ref={isSelected ? selectedRef : undefined}
                        onClick={initOnSelect(item, anyItemProps.onClick)}
                        onKeyPress={initOnKeyPress(item, anyItemProps.onKeyPress)}
                    >
                        {label}
                    </TabItemDefault>
                );
            })}
            <div
                className={cn('pointer')}
                css={[
                    styles.pointer,
                    { width: selectedWidth, left: selectedLeft },
                    disableTransitionIf(isFirstAppearance),
                ]}
            />
        </TabsContainer>
    );
});
