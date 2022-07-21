import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { DisplayVariants, DisplayVariantsMap } from '@core/storybook/DisplayVariants';
import { designParams, excludeProp } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Button } from '@core/src/Button';
import { SX_SIZE } from '@core/enums';
import { RadioButton, RadioButtonProps } from '..';

export default {
    title: 'core/RadioButton',
    component: RadioButton,
    argTypes: {
        hasError: {
            description: 'Изменяет цвет компонента уведомляя об ошибке',
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
        hasError: false,
        size: 'medium',
        disableFocus: false,
        disabled: false,
        children: 'Доставка на дом',
    },
    parameters: {
        actions: { disable: true },
        design: designParams('https://www.figma.com/file/kqled9AjBtDMRhWKovsgYf/3.1%E3%83%BBControls?node-id=9990%3A76129'),
    },
};

export const Sandbox: Story<RadioButtonProps> = ({ hasError, ...props }) => (
    <>
        <RadioButton
            hasError={hasError}
            {...props}
        >
            <>{props.checked?.toString()}</>
        </RadioButton>
    </>
);

export const OuterCheckedState: Story<RadioButtonProps> = ({ hasError, ...props }) => {
    const [bool, setBool] = useState(false);

    return (
        <>
            <RadioButton
                hasError={hasError}
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

    return DisplayVariantsMap({
        variants: {
            hasError: [true],
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
    });
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

BooleanParams.argTypes = excludeProp(['hasError', 'disabled']);
Sizes.argTypes = excludeProp(['size']);
