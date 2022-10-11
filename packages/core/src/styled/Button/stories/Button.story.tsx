import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants, DisplayVariantsMap } from '@core/storybook/DisplayVariants';
import { Button, IconButton, ButtonProps, ButtonSize, ButtonColor, ButtonType, ButtonBorderRadius } from '..';
import { PaperClipIcon, SmallPaperClipIcon, ChevronDownIcon } from './assets';

const defaultArgs: ButtonProps = {
    buttonType: 'button',
    children: 'Перейти',
    size: 'medium',
    borderRadius: 'medium',
    disabled: false,
    loading: false,
    color: 'brand',
    type: 'contained',
    leftIcon: <PaperClipIcon />,
    rightIcon: <ChevronDownIcon />,
};

export default {
    title: 'core/Button',
    component: Button,
    argTypes: {
        ...defineCategory('Стилизация', {
            borderRadius: {},
            color: {},
            type: {},
            size: {},
        }),
        ...defineCategory('Состояние', {
            disabled: {},
            loading: {},
            buttonType: {
                control: false,
            },
        }),
        ...defineCategory('Элементы', {
            children: {},
            leftIcon: {
                control: false,
            },
            rightIcon: {
                control: false,
            },
            Loader: {
                control: false,
            },
            LoaderProps: {
                control: false,
            },
        }),
        ...defineCategory('Для демонстрации', {
            leftIconShown: {
                description: 'Включить/выключить левую иконку.<br><small>Доступно только для демонстрации</small>',
            },
            rightIconShown: {
                description: 'Включить/выключить правую иконку.<br><small>Доступно только для демонстрации</small>',
            },
        }),
        ...BASE_ARG_TYPES,
    },
    args: defaultArgs,
    parameters: {
        design: { disable: true },
        actions: { disable: true },
    },
};

interface StoryButtonProps extends ButtonProps {
    leftIconShown: boolean,
    rightIconShown: boolean,
}

export const Sandbox: Story<StoryButtonProps> = ({
    leftIcon,
    rightIcon,
    leftIconShown = true,
    rightIconShown = true,
    ...args
}) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
    }}
    >
        <div style={{
            display: 'flex',
            marginBottom: 10,
        }}
        >
            <IconButton {...args}>
                {
                    args.size === 'xSmall'
                        ? <SmallPaperClipIcon />
                        : <PaperClipIcon />
                }
            </IconButton>
        </div>
        <div style={{ display: 'flex' }}>
            <Button
                {...args}
                leftIcon={leftIconShown ? leftIcon : undefined}
                rightIcon={rightIconShown ? rightIcon : undefined}
            />
        </div>
    </div>
);

Sandbox.args = {
    ...defaultArgs,
    leftIconShown: true,
    rightIconShown: true,
};

const SIZES: ButtonSize[] = ['xSmall', 'small', 'medium', 'large'];
const BORDER_RADIUS: ButtonBorderRadius[] = ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'];
const COLOR: ButtonColor[] = ['brand', 'secondary', 'success', 'info', 'warning', 'danger'];
const TYPES: ButtonType[] = ['contained', 'outlined', 'text'];

export const BooleanProps: Story<ButtonProps> = (props) => (DisplayVariantsMap({
    variants: {
        loading: [true],
        disabled: [true],
    },
    optionTitle: { isShown: false },
    direction: 'vertical',
    component: Button,
    componentProps: props,
}));

export const Types: Story<ButtonProps> = (props) => DisplayVariants({
    property: 'type',
    values: TYPES,
    component: Button,
    componentProps: props,
});

export const Color: Story<ButtonProps> = (props) => DisplayVariants({
    property: 'color',
    values: COLOR,
    component: Button,
    componentProps: props,
});

export const BorderRadius: Story<ButtonProps> = (props) => DisplayVariants({
    property: 'borderRadius',
    values: BORDER_RADIUS,
    component: Button,
    componentProps: props,
});

export const Sizes: Story<ButtonProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    component: Button,
    componentProps: props,
});

BooleanProps.parameters = {
    docs: {
        description: {
            story: 'При запуске длительного процесса есть возможность использовать внутреннюю анимацию компонента, '
                + 'уведомляющую пользователя о&nbsp;нахождении в состоянии ожидания. '
                + 'Для этого достаточно передать пропс `loading` со значением `true`.'
                + '<br/>'
                + 'Для отключения компонента необходимо в пропс `disabled` передать значение `true`. '
                + 'После чего кнопка станет некликабельной, отключатся все обработчики события, '
                + 'а также изменится цвет компонента для уведомления об отключении.',
        },
    },
};

Types.parameters = {
    docs: {
        description: {
            story: 'Тип кнопки меняется в зависимости от того, какой акцент необходимо установить для данного действия.'
                + '<br/>'
                + '`contained` — используется, чтобы усилить акцент на основном действии,'
                + '<br/>'
                + '`outlined` — используется для дополнительных действий или в элементах, '
                + 'где не нужен максимальный акцент,'
                + '<br/>'
                + '`text` — текстовые кнопки обычно используются для не самых важных действий.',
        },
    },
};

Color.parameters = {
    docs: {
        description: {
            story: 'Компонент `Button` использует все основные цвета библиотеки (`palette.colors`):'
                + ' `brand`, `secondary`, `success`, `info`, `warning`, `danger`.',
        },
    },
};

BorderRadius.parameters = {
    docs: {
        description: {
            story: 'Свойство `borderRadius` использует все стандартные варианты скругления объекта `borderRadii`: `xSmall`, `small`, `medium`, `large`, `xLarge`.',
        },
    },
};

Sizes.parameters = {
    docs: {
        description: {
            story: 'Параметр `size` изменяет высоту компонента и размер текста в нем. '
                + 'Существует четыре значения для передачи:'
                + '<br/>'
                + '`xSmall` — минимальный размер,'
                + '<br/>'
                + '`small` — маленький,'
                + '<br/>'
                + '`medium` — средний,'
                + '<br/>'
                + '`large` — наибольший размер.',
        },
    },
};

Sandbox.storyName = 'Компонент';
BooleanProps.storyName = 'Boolean параметры';
Types.storyName = 'Типы';
Color.storyName = 'Цвета';
BorderRadius.storyName = 'Скругления';
Sizes.storyName = 'Размеры';

const excludedDemos = ['leftIconShown', 'rightIconShown'];

BooleanProps.argTypes = excludeProp([...excludedDemos, 'disabled', 'loading']);
Types.argTypes = excludeProp([...excludedDemos, 'type']);
Color.argTypes = excludeProp([...excludedDemos, 'color']);
BorderRadius.argTypes = excludeProp([...excludedDemos, 'borderRadius']);
Sizes.argTypes = excludeProp([...excludedDemos, 'size']);
