import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import styled from '@emotion/styled';
import { AttentionIconSmall, InfoIconLarge, InfoIconSmall, AttentionIconLarge } from './assets';
import { Badge, BadgeColor, BadgeProps } from '..';

export default {
    title: 'core/Badge',
    component: Badge,
    argTypes: {
        ...defineCategory('Стилизация', {
            size: {},
            borderRadius: {},
            type: {},
            color: {},
        }),
        ...defineCategory('Внутренние элементы', {
            children: {},
            counter: {},
            counterProps: { },
            rightItem: {
                control: false,
            },
            leftItem: {
                control: false,
            },
        }),
        ...defineCategory('Для демонстрации', {
            counterShown: {
                description: 'Включить/выключить counter.<br><small>Доступно только для демонстрации</small>',
            },
            leftItemShown: {
                description: 'Включить/выключить левый элемент.<br><small>Доступно только для демонстрации</small>',
            },
            rightItemShown: {
                description: 'Включить/выключить правый элемент.<br><small>Доступно только для демонстрации</small>',
            },
        }),
        ...excludeProp(['permissions', 'hidden'], BASE_ARG_TYPES),
    },
    parameters: {
        actions: { disable: true },
    },
};

interface StoryType extends BadgeProps {
    leftItemShown: boolean,
    rightItemShown: boolean,
    counterShown: boolean,
}

const defaultArgs: BadgeProps = {
    children: 'Статус',
    size: 'large',
    borderRadius: 'max',
    color: 'brand',
    type: 'contained',
    counter: 999,
};

export const Sandbox: Story<StoryType> = ({
    children,
    size = 'small',
    leftItemShown = true,
    rightItemShown = true,
    counterShown = true,
    counter,
    ...args
}) => (
    <Badge
        {...args}
        size={size}
        leftItem={size === 'small' ? leftItemShown && <InfoIconSmall /> : leftItemShown && <InfoIconLarge />}
        rightItem={size === 'small'
            ? rightItemShown && <AttentionIconSmall />
            : rightItemShown && <AttentionIconLarge />}
        counter={counterShown ? counter : undefined}
    >
        {children}
    </Badge>
);

const SIZES = ['small', 'medium', 'large'];
const TYPES = ['contained', 'outlined', 'ghosted'];
const BORDER_RADIUS = ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'];
const COLORS: BadgeColor[] = ['brand', 'secondary', 'info', 'success', 'warning', 'danger', 'text'];

export const Size: Story<BadgeProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Badge,
    componentProps: props,
});

export const BorderRadius: Story<BadgeProps> = (props) => DisplayVariants({
    property: 'borderRadius',
    values: BORDER_RADIUS,
    component: Badge,
    componentProps: props,
});

export const Type: Story<BadgeProps> = (props) => DisplayVariants({
    property: 'type',
    values: TYPES,
    component: Badge,
    componentProps: props,
});

const Flex = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
});

export const Color: Story<BadgeProps> = (props) => (
    <Flex>
        {DisplayVariants<BadgeProps>({
            property: 'color',
            values: COLORS,
            component: Badge,
            componentProps: {
                ...props,
                type: 'contained',
            },
            direction: 'vertical',
        })}
        {DisplayVariants<BadgeProps>({
            property: 'color',
            values: COLORS,
            component: Badge,
            direction: 'vertical',
            componentProps: {
                ...props,
                type: 'outlined',
            },
        })}
        {DisplayVariants<BadgeProps>({
            property: 'color',
            values: COLORS,
            component: Badge,
            direction: 'vertical',
            componentProps: {
                ...props,
                type: 'ghosted',
            },
        })}
    </Flex>
);

Sandbox.storyName = 'Компонент';
Size.storyName = 'Размеры';
BorderRadius.storyName = 'Скругления';
Type.storyName = 'Типы заливки';
Color.storyName = 'Цвета';

Sandbox.args = {
    ...defaultArgs,
    leftItemShown: true,
    rightItemShown: true,
    counterShown: true,
};
Size.args = defaultArgs;
BorderRadius.args = defaultArgs;
Type.args = defaultArgs;
Color.args = defaultArgs;

const excludedDemos = ['leftItemShown', 'rightItemShown', 'counterShown'];

Size.argTypes = excludeProp([...excludedDemos, 'size']);
BorderRadius.argTypes = excludeProp([...excludedDemos, 'borderRadius']);
Type.argTypes = excludeProp([...excludedDemos, 'type']);
Color.argTypes = excludeProp([...excludedDemos, 'color']);

Size.parameters = {
    docs: {
        description: {
            story: 'Для выбора размера необходимо использовать свойство `size`.'
                + '<br/>'
                + 'Для `Badge` доступно 3 варианта размера:'
                + '<br/>'
                + '`small` - маленький,'
                + '`medium` - средний (по умолчанию),'
                + '`large` - большой,',
        },
    },

};
BorderRadius.parameters = {
    docs: {
        description: {
            story: 'Свойство `borderRadius` использует все стандартные варианты скругления объекта `borderRadii`: '
                + '`xSmall`, `small`, `medium`, `large`, `xLarge`, `max`.',
        },
    },
};
Type.parameters = {
    docs: {
        description: {
            story: 'Тип заливки (своство `type`) '
                + 'определяет фон компонента `Badge`, а также цвет его внутренних элементов.'
                + '<br/>'
                + 'Доступно 3 варианта типа заливки:'
                + '<br/>'
                + '`contained` — залитый компонент, цвет используемых иконок и фон `Counter` белый (по умолчанию).'
                + '<br/>'
                + '`outlined` — фон компонента прозрачный, '
                + 'цвета используемых иконок, текста, обводки и фон `Counter` '
                + 'определяются в соответствии со свойством `color`.'
                + '<br/>'
                + '`ghosted` — фон компонента полупрозрачный, '
                + 'цвета используемых иконок, текста, обводки и фон `Counter` '
                + 'определяются в соответствии со свойством `color`.',
        },
    },
};
Color.parameters = {
    docs: {
        description: {
            story: 'Цвет (своство `color`) '
                + 'определяет цвет фона или обводки (в зависимости от выбранного `type`) компонента `Badge`, '
                + 'а также цвет его внутренних элементов.'
                + '<br/>'
                + 'Доступно 7 вариантов цвета:'
                + '<br/>'
                + '`brand` (по умолчанию), `secondary`, `info`, `success`, `warning`, `danger`, `text`.',
        },
    },
};
