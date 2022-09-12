import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants, DisplayVariantsMap } from '@core/storybook/DisplayVariants';
import { designParams, excludeProp } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Button } from '@core/src/StyledComponents/Button';
import { SX_SIZE } from '@core/enums';
import { PALETTE_COLORS } from '@core/styles';
import { RadioButton, RadioButtonProps } from '..';

export default {
    title: 'core/RadioButton',
    component: RadioButton,
    argTypes: {
        color: {
            description: 'Изменяет цвет компонента',
        },
        size: {
            description: 'Размер компонента',
        },
        disableFocus: {
            description: 'Отключение возможность фокуса',
        },
        disabled: {
            description: 'Изменяет состояние компонента на активное/неактивное',
        },
        ...BASE_ARG_TYPES,
    },
    args: {
        size: 'medium',
        disableFocus: false,
        disabled: false,
        children: 'Доставка на дом',
        color: PALETTE_COLORS.brand,
    },
    parameters: {
        actions: { disable: true },
        design: designParams('https://www.figma.com/file/kqled9AjBtDMRhWKovsgYf/3.1%E3%83%BBControls?node-id=9990%3A76129'),
    },
};

export const Sandbox: Story<RadioButtonProps> = ({ checked, ...props }) => (
    <>
        <RadioButton checked={checked} {...props}>
            <>{checked?.toString()}</>
        </RadioButton>
    </>
);

export const OuterCheckedState: Story<RadioButtonProps> = (props) => {
    const [bool, setBool] = useState(false);

    return (
        <>
            <RadioButton
                name="StoryBool"
                onChange={() => {
                    setBool((prevState) => !prevState);
                }}
                checked={bool}
                {...props}
            >
                <div>
                    {bool.toString()}
                </div>
            </RadioButton>
            <Button
                onClick={() => { setBool((prevState) => !prevState); }}
                style={{ marginTop: 10 }}
                size={SX_SIZE.small}
            >
                {bool ? 'Деактивировать' : 'Активировать'}
            </Button>
        </>
    );
};

export const BooleanParams: Story<RadioButtonProps> = (props) => {
    const [bool, setBool] = useState(false);

    return (
        <>
            {DisplayVariantsMap({
                variants: {
                    disabled: [true],
                },
                optionTitle: {
                    isShown: false,
                },
                direction: 'vertical',
                component: RadioButton,
                componentProps: {
                    ...props,
                    checked: bool,
                    onChange: () => setBool((prev) => !prev),
                },
            })}
            <Button
                onClick={() => { setBool((prevState) => !prevState); }}
                style={{ marginTop: 10 }}
                size={SX_SIZE.small}
            >
                {bool ? 'Деактивировать' : 'Активировать'}
            </Button>
        </>
    );
};

export const Sizes: Story<RadioButtonProps> = (props) => {
    const [bool, setBool] = useState(false);

    return DisplayVariants({
        property: 'size',
        values: ['small', 'medium', 'large'],
        component: RadioButton,
        componentProps: {
            ...props,
            checked: bool,
            onChange: () => setBool((prev) => !prev),
        },
    });
};

Sandbox.storyName = 'Компонент';
OuterCheckedState.storyName = 'Внешнее управление компонентом';
BooleanParams.storyName = 'Boolean параметры';
Sizes.storyName = 'Размеры';

BooleanParams.argTypes = excludeProp(['disabled']);
Sizes.argTypes = excludeProp(['size']);
