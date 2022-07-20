import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { defineCategory, designParams, excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { AttentionIconSmall, InfoIconLarge, InfoIconSmall, AttentionIconLarge } from './assets';
import { Badge, BadgeColor, BadgeProps } from '..';

export default {
    title: 'core/Badge',
    component: Badge,
    argTypes: {
        ...defineCategory('Стилизация', {
            size: {
                description: 'Размер компонента',
            },
            borderRadius: {
                description: 'Скругление компонента',
            },
            type: {
                description: 'Заливка компонента',
            },
            color: {
                description: 'Цветовое решение',
            },
        }),
        ...defineCategory('Внутренние элементы', {
            children: {
                description: 'Дочерний элемент компонента',
            },
            counter: {
                description: 'Число используемое для отображения во внутреннем компоненте Counter',
            },
            counterProps: {
                description: 'Объект параметров для настройки внутреннего компонента Counter',
            },
            rightItem: {
                description: 'Элемент, отображаемый с правой стороны компонента',
                control: false,
            },
            leftItem: {
                description: 'Элемент, отображаемый с левой стороны компонента',
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
        design: designParams('https://www.figma.com/file/kqled9AjBtDMRhWKovsgYf/3.1%E3%83%BBControls?node-id=10341%3A159295'),
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
    borderRadius: 'rounded',
    color: 'brand',
    type: 'filled',
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

const SIZES = ['small', 'large'];
const TYPES = ['filled', 'outline'];
const BORDER_RADIUS = ['square', 'smooth', 'rounded'];
const COLORS: BadgeColor[] = ['brand', 'secondary', 'info', 'warning', 'danger'];

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

export const Color: Story<BadgeProps> = (props) => (
    <div>
        {DisplayVariants({
            property: 'color',
            values: COLORS,
            component: Badge,
            componentProps: props,
        })}
        {DisplayVariants<BadgeProps>({
            property: 'color',
            values: COLORS,
            title: { isShown: false },
            component: Badge,
            componentProps: {
                ...props,
                type: 'outline',
            },
        })}
    </div>
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
                + 'Для `Badge` доступно 2 варианта размера:'
                + '<br/>'
                + '`small` - маленький (по умолчанию),'
                + '`large` - большой,',
        },
    },

};
BorderRadius.parameters = {
    docs: {
        description: {
            story: 'Выбор скругления компонента осуществляется с помощью свойства `borderRadius`.'
                + '<br/>'
                + 'Для `Badge` доступно 3 варианта скругления:'
                + '<br/>'
                + '`square` - минимальный радиус скругления и почти острые углы,'
                + '<br/>'
                + '`smooth` — среднее скругление.'
                + '<br/>'
                + '`rounded` — максимальный радиус скругления, который можно использовать в любом стиле бренда '
                + '(по умолчанию).',
        },
    },
};
Type.parameters = {
    docs: {
        description: {
            story: 'Тип заливки (своство `type`) '
                + 'определяет фон компонента `Badge`, а также цвет его внутренних элементов.'
                + '<br/>'
                + 'Доступно 2 варианта типа заливки:'
                + '<br/>'
                + '`filled` — залитый компонент, цвет используемых иконок и фон `Counter` будет белым (по умолчанию).'
                + '<br/>'
                + '`outline` — фон компонента прозрачный, '
                + 'цвет используемых иконок и фон `Counter` определяется в соответствии со свойством `color.',
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
                + 'Доступно 4 варианта цвета:'
                + '<br/>'
                + '`color1` (по умолчанию), `color2`, `warning`, `critical`',
        },
    },
};
