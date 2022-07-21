import React, { ReactChild } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { Link } from '../Link';
import { LinkColor, LinkProps, LinkSize, LinkUnderline } from '../types';
import { ChevronRight16, ChevronRight24, Gear16, Gear24 } from './assets';

export default {
    title: 'core/Link',
    component: Link,
    argTypes: {
        ...defineCategory('Для демонстрации', {
            showLeftItem: {
                description: 'Показать левый элемент.<br><small>Доступно только для демонстрации</small>',
                defaultValue: 'true',
                control: { type: 'boolean' },
            },
            showRightItem: {
                description: 'Показать правый элемент.<br><small>Доступно только для демонстрации</small>',
                defaultValue: 'true',
                control: { type: 'boolean' },
            },
        }),
        ...defineCategory('Стилизация', {
            underline: {
                control: { type: 'select' },
            },
            color: {
                control: { type: 'select' },
            },
            size: {
                control: { type: 'select' },
            },
            disabled: {},
        }),
        ...defineCategory('Внутренние элементы', {
            children: {},
            leftItem: {
                control: false,
            },
            rightItem: {
                control: false,
            },
        }),
        ...excludeProp(['permissions', 'hidden'], BASE_ARG_TYPES),
    },
    parameters: {
        actions: { disable: true },
    },
};

interface StoryType extends LinkProps {
    showLeftItem: boolean,
    showRightItem: boolean,
}

const defaultArgs: LinkProps = {
    children: 'Настройки',
    size: 'XL',
    color: 'info',
    underline: 'always',
};

const sizeToLeftItem: Record<LinkSize, ReactChild> = {
    S: <Gear16 />,
    M: <Gear16 />,
    L: <Gear24 />,
    XL: <Gear24 />,
};

const sizeToRightItem: Record<LinkSize, ReactChild> = {
    S: <ChevronRight16 />,
    M: <ChevronRight16 />,
    L: <ChevronRight24 />,
    XL: <ChevronRight24 />,
};

export const Sandbox: Story<StoryType> = ({
    children,
    size = 'XL',
    color,
    underline,
    disabled,
    showLeftItem,
    showRightItem,
}) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
        underline={underline}
        size={size}
        color={color}
        disabled={disabled}
        href="#1"
        leftItem={showLeftItem ? sizeToLeftItem[size] : undefined}
        rightItem={showRightItem ? sizeToRightItem[size] : undefined}
    >
        {children}
    </Link>
);

Sandbox.args = defaultArgs;

const UNDERLINES: LinkUnderline[] = ['always', 'hover', 'none'];
const SIZES: LinkSize[] = ['S', 'M', 'L', 'XL'];
const COLORS: LinkColor[] = ['brand', 'secondary', 'info', 'warning', 'danger'];

export const Underline: Story<LinkProps> = (props) => DisplayVariants({
    property: 'underline',
    values: UNDERLINES,
    component: Link,
    componentProps: props,
});

export const Size: Story<LinkProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Link,
    componentProps: props,
});

export const Color: Story<LinkProps> = (props) => DisplayVariants({
    property: 'color',
    values: COLORS,
    component: Link,
    componentProps: props,
});

Sandbox.storyName = 'Компонент';
Underline.storyName = 'Подчеркивания';
Size.storyName = 'Размеры';
Color.storyName = 'Цвета';

Sandbox.args = defaultArgs;
Underline.args = defaultArgs;
Size.args = defaultArgs;
Color.args = defaultArgs;

const excludedDemos = ['showLeftItem', 'showRightItem'];

Underline.argTypes = excludeProp([...excludedDemos, 'underline']);
Size.argTypes = excludeProp([...excludedDemos, 'size']);
Color.argTypes = excludeProp([...excludedDemos, 'color']);

Underline.parameters = {
    docs: {
        description: {
            story: 'Доступно три значения:'
                + '<br/>'
                + '`always` - ссылка подчеркнута всегда, чаще всего используется при размещении ссылки внутри абзаца;'
                + '<br/>'
                + '`hover` - ссылка подчеркивается при наведении, можно использовать при размещении ссылки отдельно;'
                + '<br/>'
                + '`none` - ссылка никогда не подчеркивается, можно использовать в ситуации, когда ссылкой является иконка.',
        },
    },
};

Size.parameters = {
    docs: {
        description: {
            story: 'Доступен выбор размера под каждый размер текста.',
        },
    },
};

Color.parameters = {
    docs: {
        description: {
            story: 'Доступен выбор любого из основных цветов дизайн-системы (`palette.colors`):<br/>'
                + '`brand`, `secondary`, `success`, `info`, `warning`, `danger`.',
        },
    },
};

export const UseInText: Story<LinkProps> = (_) => (
    <p>
        За клиентским интерфейсом кроется клубок
        {' '}
        <Link href="#1">сложных систем</Link>
        {' '}
        работы с контентом, аналитики и настройки.
    </p>
);

UseInText.storyName = 'Использование в тексте';

UseInText.parameters = {
    docs: {
        description: {
            story: 'При использовании внутри предложения ссылка может принимать стили шрифта того текста, '
                + 'в котором она расположена.<br/>'
                + 'Для достижения этого поведения достаточно не указывать параметр `size`.',
        },
    },
};

export const CustomTextStyles: Story<LinkProps> = (_) => (
    <Link
        href="#1"
        styles={{
            content: {
                fontWeight: 'bold',
                fontStyle: 'italic',
            },
        }}
    >
        Ссылка с жирным курсивным шрифтом
    </Link>
);

CustomTextStyles.storyName = 'Кастомизация шрифта';

CustomTextStyles.parameters = {
    docs: {
        description: {
            story: 'Для выбора стандартных размеров шрифта в компоненте предусмотрен параметр `size`, '
                + 'который выбирает разрмер текста из базовых значений типографики дизайн-системы, '
                + 'а также назначает вес 500 (лучше всего сочетается с иконками). Однако параметры текста '
                + 'можно переопределить через css-стили любым удобным способом.<br/>'
                + 'В данном примере стили текста передаются через встроенное свойство `styles`, '
                + 'которое позволяет переопределить стили компонента через emotion.',
        },
    },
};

export const IconAsLink: Story<LinkProps> = (_) => (
    <Link
        href="#1"
        underline="none"
    >
        <Gear24 />
    </Link>
);

IconAsLink.storyName = 'Ссылка-иконка';

IconAsLink.parameters = {
    docs: {
        description: {
            story: 'В некоторых ситуациях ссылкой может являться иконка, '
                + 'в таком случае её можно передать прямо в `children`.<br/>'
                + 'Для ссылки-иконки рекомендуется устанавливать параметр `underline` в значение `none`.',
        },
    },
};
