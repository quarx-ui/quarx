import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { CheckboxSelection } from '@core/src/StyledComponents/Checkbox/CheckboxSelection';
import { RadioButtonSelection } from '@core/src/StyledComponents/RadioButton/RadioButtonSelection';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { SwitcherSelection } from '@core/src/StyledComponents/Switcher/SwitcherSelection';
import styled from '@emotion/styled';
import { SquaresIcon } from './assets';
import { Selection, SelectionProps } from '..';

const defaultArgTypes = {
    ...defineCategory('Стилизация', {
        size: {
            description: 'Размер компонента',
        },
        borderRadius: {
            description: 'Скругление компонента',
        },
        styleHover: {
            description: 'Фон при наведении',
        },
        reverse: {
            description: 'Порядок элементов в компоненте',
        },
    }),
    ...defineCategory('Элементы', {
        title: {
            description: 'Заголовок компонента',
        },
        subTitle: {
            description: 'Подзаголовок компонента',
        },
        subTitleShown: {
            description: 'Включить/выключить подзаголовок и текст об ошибке.<br><small>Доступно только для демонстрации</small>',
        },
        iconShown: {
            description: 'Включить/выключить иконку.<br><small>Доступно только для демонстрации</small>',
        },
        leftAdornment: {
            description: 'Элемент слева от заголовка',
            control: false,
        },
        rightAdornment: {
            description: 'Элемент справа от заголовка',
            control: false,
        },
    }),
    ...defineCategory('Состояние', {
        errorText: {
            description: 'Текст об ошибке',
        },
        disabled: {
            description: 'Изменяет состояние компонента на активное/неактивное',
        },
        focused: {
            description: 'Состояние фокуса компонента',
        },
    }),
    ...excludeProp(['ref'], BASE_ARG_TYPES),
};

const defaultArgs: SelectionProps = {
    errorText: '',
    title: 'Доставка на дом',
    subTitle: 'Будние дни 10:00–19:00',
    rightAdornment: <SquaresIcon />,
    size: 'medium',
    borderRadius: 'smooth',
    styleHover: 'smooth',
};

export default {
    title: 'core/Selection',
    component: Selection,
    argTypes: defaultArgTypes,
    args: defaultArgs,
    parameters: {
        actions: { disable: true },
    },
};

interface StorySelectionProps extends SelectionProps{
    subTitleShown: boolean,
    iconShown: boolean,
}

export const Sandbox: Story<StorySelectionProps> = ({
    iconShown,
    rightAdornment,
    subTitleShown, subTitle, ...props
}) => {
    const [checkbox, setCheckbox] = useState(false);
    const [radioButton, setRadioButton] = useState(false);
    const [switcher, setSwitcher] = useState(false);
    return (
        <div>
            <RadioButtonSelection
                {...props}
                rightAdornment={iconShown ? rightAdornment : undefined}
                subTitle={subTitleShown ? subTitle : undefined}
                onClick={() => setRadioButton((prev) => !prev)}
                checked={radioButton}
            />
            <CheckboxSelection
                {...props}
                rightAdornment={iconShown ? rightAdornment : undefined}
                subTitle={subTitleShown ? subTitle : undefined}
                onClick={() => setCheckbox((prev) => !prev)}
                checked={checkbox}
            />
            <SwitcherSelection
                {...props}
                rightAdornment={iconShown ? rightAdornment : undefined}
                subTitle={subTitleShown ? subTitle : undefined}
                onClick={() => setSwitcher((prev) => !prev)}
                checked={switcher}
            />
        </div>
    );
};

Sandbox.args = {
    ...defaultArgs,
    subTitleShown: true,
    iconShown: true,
};

export const BorderRadius: Story<SelectionProps> = (props) => {
    const [checkbox, setCheckbox] = useState(false);
    const [radioButton, setRadioButton] = useState(false);
    const [switcher, setSwitcher] = useState(false);
    return (
        <>
            {DisplayVariants({
                property: 'borderRadius',
                values: ['square', 'smooth'],
                component: CheckboxSelection,
                componentProps: {
                    ...props,
                    onClick: () => setCheckbox((prev) => !prev),
                    checked: checkbox,
                },
            })}
            {DisplayVariants({
                property: 'borderRadius',
                values: ['square', 'smooth'],
                component: RadioButtonSelection,
                componentProps: {
                    ...props,
                    onClick: () => setRadioButton((prev) => !prev),
                    checked: radioButton,
                },
            })}
            {DisplayVariants({
                property: 'borderRadius',
                values: ['square', 'smooth'],
                component: SwitcherSelection,
                componentProps: {
                    ...props,
                    onClick: () => setSwitcher((prev) => !prev),
                    checked: switcher,
                },
            })}
        </>
    );
};

const FlexDiv = styled('div')({
    display: 'flex',
});

export const Sizes: Story<SelectionProps> = (props) => {
    const [checkbox, setCheckbox] = useState(false);
    const [radioButton, setRadioButton] = useState(false);
    const [switcher, setSwitcher] = useState(false);
    return (
        <FlexDiv>
            {DisplayVariants({
                property: 'size',
                values: ['small', 'medium', 'large'],
                component: CheckboxSelection,
                direction: 'vertical',
                componentProps: {
                    ...props,
                    onClick: () => setCheckbox((prev) => !prev),
                    checked: checkbox,
                },
            })}
            {DisplayVariants({
                property: 'size',
                values: ['small', 'medium', 'large'],
                component: RadioButtonSelection,
                direction: 'vertical',
                componentProps: {
                    ...props,
                    onClick: () => setRadioButton((prev) => !prev),
                    checked: radioButton,
                },
            })}
            {DisplayVariants({
                property: 'size',
                values: ['small', 'medium', 'large'],
                component: SwitcherSelection,
                direction: 'vertical',
                componentProps: {
                    ...props,
                    onClick: () => setSwitcher((prev) => !prev),
                    checked: switcher,
                },
            })}
        </FlexDiv>
    );
};

export const Error: Story<SelectionProps> = (props) => {
    const [checkbox, setCheckbox] = useState(false);
    const [radioButton, setRadioButton] = useState(false);
    const [switcher, setSwitcher] = useState(false);
    return (
        <>
            {DisplayVariants({
                property: 'errorText',
                values: ['Error'],
                title: { isShown: false },
                component: CheckboxSelection,
                componentProps: {
                    ...props,
                    onClick: () => setCheckbox((prev) => !prev),
                    checked: checkbox,
                },
            })}
            {DisplayVariants({
                property: 'errorText',
                values: ['Error'],
                title: { isShown: false },
                component: RadioButtonSelection,
                componentProps: {
                    ...props,
                    onClick: () => setRadioButton((prev) => !prev),
                    checked: radioButton,
                },
            })}
            {DisplayVariants({
                property: 'errorText',
                values: ['Error'],
                title: { isShown: false },
                component: SwitcherSelection,
                componentProps: {
                    ...props,
                    onClick: () => setSwitcher((prev) => !prev),
                    checked: switcher,
                },
            })}
        </>
    );
};

export const Reverse: Story<SelectionProps> = (props) => {
    const [checkbox, setCheckbox] = useState(false);
    const [radioButton, setRadioButton] = useState(false);
    const [switcher, setSwitcher] = useState(false);
    return (
        <>
            {DisplayVariants({
                property: 'reverse',
                values: [false, true],
                component: CheckboxSelection,
                componentProps: {
                    ...props,
                    onClick: () => setCheckbox((prev) => !prev),
                    checked: checkbox,
                },
            })}
            {DisplayVariants({
                property: 'reverse',
                values: [false, true],
                component: RadioButtonSelection,
                componentProps: {
                    ...props,
                    onClick: () => setRadioButton((prev) => !prev),
                    checked: radioButton,
                },
            })}
            {DisplayVariants({
                property: 'reverse',
                values: [false, true],
                component: RadioButtonSelection,
                componentProps: {
                    ...props,
                    onClick: () => setSwitcher((prev) => !prev),
                    checked: switcher,
                },
            })}
        </>
    );
};

Sandbox.storyName = 'Компонент';
Error.storyName = 'Ошибка';
Reverse.storyName = 'Порядок элементов';
BorderRadius.storyName = 'Скругления';
Sizes.storyName = 'Размеры';

BorderRadius.argTypes = excludeProp(['borderRadius']);
Sizes.argTypes = excludeProp(['size']);
Reverse.argTypes = excludeProp(['reverse']);
