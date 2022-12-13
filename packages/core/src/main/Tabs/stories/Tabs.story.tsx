/* eslint-disable-line @typescript-eslint/ban-ts-comment */ // @ts-nocheck
import React, { ElementType, forwardRef, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { ArrowGraphIcon } from '@quarx-ui/icons/src/arrow-graph/36px/stroke/rounded';
import { BuildingsIcon } from '@quarx-ui/icons/src/buildings/36px/stroke/rounded';
import { CirclesOnCircleIcon } from '@quarx-ui/icons/src/circles-on-circle/36px/stroke/rounded';
import { PALETTE_COLORS } from '@core';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { QX_BORDER_SIZE, QX_SIZE } from '@core/enums';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { TabsProps } from '../types';
import { Tabs } from '../Tabs';
import { TABS_TYPES } from '../common';
import { TABS_LINES } from '../TabsDefault/constants';
import linesDescription from './descriptions/Lines.md';
import radiiDescription from './descriptions/Radii.md';
import colorsDescription from './descriptions/Colors.md';
import controlledDescription from './descriptions/Controlled.md';
import iconsDescription from './descriptions/Icons.md';
import typesDescription from './descriptions/Types.md';
import sizesDescription from './descriptions/Sizes.md';
import counterDescription from './descriptions/Counter.md';
import customComponentDescription from './descriptions/CustomComponent.md';

const items = [
    { label: 'Главная страница', value: 'home' },
    { label: 'Бизнес операции', value: 'business' },
    { label: 'Страхование жизни', value: 'insurance' },
    { label: 'Транспорт до дома', value: 'transport' },
    { label: 'Медицина и здоровье', value: 'medicine' },
    { label: 'Контакты', value: 'contacts' },
];

const iconItems = [
    { label: <ArrowGraphIcon />, value: 'graph' },
    { label: <BuildingsIcon />, value: 'buildings' },
    { label: <CirclesOnCircleIcon />, value: 'circles' },
];

const defaultArgs: TabsProps = {
    type: TABS_TYPES.default,
    color: PALETTE_COLORS.brand,
    size: QX_SIZE.medium,
    items,
};

export default {
    title: STORY_PATHS.core.components.main('Tabs'),
    component: Tabs,
    args: defaultArgs,
    argTypes: {
        ...defineCategory('Основное', {
            type: {},
            value: {},
            items: {},
            defaultValue: {},
            onSetValue: {},
        }),
        ...defineCategory('Стилизация', {
            color: {},
            size: {},
            borderRadius: {},
            line: {},
            icons: {},
        }),
        ...excludeProp(['hidden', 'permissions'], BASE_ARG_TYPES),
        ...defineCategory('Кастомизация', {
            className: {},
            classes: {},
            styles: {},
            scrollOptions: {},
        }),
    },
    parameters: {
        actions: { disable: true },
    },
};

export const Sandbox: Story<TabsProps> = ({
    line, icons,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSetValue,
    type,
    items: itemsProp,
    ...props
}) => {
    const [tab, setTab] = useState('medicine');

    return (
        <Tabs
            type="contained"
            line={type === TABS_TYPES.default ? line : undefined}
            icons={type === TABS_TYPES.segmented ? icons : undefined}
            items={type === TABS_TYPES.segmented && icons ? iconItems : itemsProp}
            value={tab}
            onSetValue={({ value }) => {
                setTab(value);
            }}
            {...props}
        />
    );
};

Sandbox.args = { ...defaultArgs, size: QX_SIZE.large };

const SIZES = [QX_SIZE.large, QX_SIZE.medium, QX_SIZE.small];

const TypeVariants = ({
    showTitle,
    showDefault = true,
    showContained = true,
    showSegmented = true,
}: {
    showTitle?: boolean;
    showDefault?: boolean;
    showContained?: boolean;
    showSegmented?: boolean;
} = {}) => (props: TabsProps) => DisplayVariants({
    property: 'type',
    values: [
        showDefault && TABS_TYPES.default,
        showContained && TABS_TYPES.contained,
        showSegmented && TABS_TYPES.segmented,
    ].filter(Boolean),
    component: Tabs,
    componentProps: props,
    direction: 'vertical',
    ...(showTitle ? {} : { title: { isShown: false } }),
});

export const Types: Story<TabsProps> = (props) => TypeVariants({ showTitle: true })(props);

Types.storyName = 'Типы';
Types.argTypes = excludeProp(['type']);
Types.parameters = {
    docs: {
        description: {
            story: typesDescription,
        },
    },
};

export const Sizes: Story<TabsProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    componentProps: props,
    direction: 'vertical',
    component: TypeVariants(),
});

Sizes.storyName = 'Размеры';
Sizes.argTypes = excludeProp(['size', 'type']);
Sizes.parameters = {
    docs: {
        description: {
            story: sizesDescription,
        },
    },
};

export const Colors: Story<TabsProps> = (props) => DisplayVariants({
    property: 'color',
    values: Object.values(PALETTE_COLORS),
    componentProps: props,
    direction: 'vertical',
    component: (p: TabsProps) => (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {TypeVariants({ showSegmented: false })(p)}
            <Tabs
                {...p}
                icons
                type={TABS_TYPES.segmented}
                items={iconItems}
                styles={{ root: { marginTop: 12 } }}
            />
        </div>
    ),
});

Colors.storyName = 'Цвета';
Colors.argTypes = excludeProp(['color', 'type']);
Colors.parameters = {
    docs: {
        description: {
            story: colorsDescription,
        },
    },
};

export const Radii: Story<TabsProps> = (props) => DisplayVariants({
    property: 'borderRadius',
    values: Object.values(QX_BORDER_SIZE),
    componentProps: props,
    direction: 'vertical',
    component: TypeVariants({ showDefault: false }),
});

Radii.storyName = 'Скругления';
Radii.argTypes = excludeProp(['borderRadius', 'type']);
Radii.parameters = {
    docs: {
        description: {
            story: radiiDescription,
        },
    },
};
export const Lines: Story<TabsProps> = (props) => DisplayVariants({
    property: 'line',
    values: Object.values(TABS_LINES),
    component: Tabs,
    componentProps: { ...props, type: TABS_TYPES.default },
    direction: 'vertical',
});

Lines.storyName = 'Положение индикатора';
Lines.argTypes = excludeProp(['line', 'type']);
Lines.parameters = {
    docs: {
        description: {
            story: linesDescription,
        },
    },
};

export const Icons: Story<TabsProps> = (props) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Tabs
            {...props}
            icons
            type={TABS_TYPES.segmented}
            items={iconItems}
        />
    </div>
);

Icons.storyName = 'Использование иконок';
Icons.argTypes = excludeProp(['icons']);
Icons.parameters = {
    docs: {
        description: {
            story: iconsDescription,
        },
    },
};

export const Counter: Story<TabsProps> = ({ items: tabItems, ...props }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Tabs
            {...props}
            type={TABS_TYPES.default}
            style={{ marginBottom: 16 }}
            items={[
                tabItems[0],
                {
                    value: 'notifications',
                    label: 'Уведомления',
                    counter: 12,
                },
            ]}
        />
        <Tabs
            {...props}
            type={TABS_TYPES.contained}
            style={{ marginBottom: 16 }}
            items={[
                tabItems[0],
                {
                    value: 'notifications',
                    label: 'Уведомления',
                    counter: 12,
                },
            ]}
        />
        <Tabs
            {...props}
            type={TABS_TYPES.segmented}
            items={[
                tabItems[0],
                {
                    value: 'notifications',
                    label: 'Уведомления',
                    counter: 12,
                },
            ]}
        />
    </div>
);

Counter.storyName = 'Счетчик во вкладке';
Counter.argTypes = excludeProp(['type']);
Counter.parameters = {
    docs: {
        description: {
            story: counterDescription,
        },
    },
};

export const Controlled: Story<TabsProps> = (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    const [selectedTab, setSelectedTab] = useState(props.items[0]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Tabs
                {...props}
                type="default"
                value={selectedTab.value}
                onSetValue={setSelectedTab}
                style={{ marginBottom: 16 }}
            />
            <Tabs
                {...props}
                type="contained"
                value={selectedTab.value}
                onSetValue={setSelectedTab}
                style={{ marginBottom: 16 }}
            />
            <Tabs
                {...props}
                type="segmented"
                value={selectedTab.value}
                onSetValue={setSelectedTab}
            />
        </div>
    );
};

Controlled.storyName = 'Внешнее управление';
Controlled.argTypes = excludeProp(['value', 'type']);
Controlled.parameters = {
    docs: {
        source: { type: 'code' },
        description: {
            story: controlledDescription,
        },
    },
};

export const CustomComponent: Story<TabsProps> = (props) => {
    const Link: ElementType = forwardRef(({ to, ...rest }, ref) => (
        <div
            ref={ref}
            {...rest}
            onClick={(e) => {
                alert(`Переход к ${to}`);
                rest.onClick(e);
            }}
        />
    ));

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
            <Tabs
                {...props}
                /* eslint-disable-next-line react/destructuring-assignment */
                items={props.items.map((item) => ({ ...item, href: `#${item.value}` }))}
                type="contained"
                TabItemComponent="a"
                style={{ marginBottom: 16 }}
            />
            <Tabs
                {...props}
                /* eslint-disable-next-line react/destructuring-assignment */
                items={props.items.map((item) => ({ ...item, to: item.label }))}
                type="segmented"
                TabItemComponent={Link}
            />
        </div>
    );
};

CustomComponent.storyName = 'Свой тег/компонент';
CustomComponent.argTypes = excludeProp(['type']);
CustomComponent.parameters = {
    docs: {
        source: { type: 'code' },
        description: {
            story: customComponentDescription,
        },
    },
};
