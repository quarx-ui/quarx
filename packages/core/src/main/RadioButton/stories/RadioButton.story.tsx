import { Fragment, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants, DisplayVariantsMap } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Button } from '@core/src/main/Button';
import { QX_SIZE } from '@core/enums';
import { PALETTE_COLORS } from '@core/styles';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { RadioButton, RadioButtonProps } from '..';

export default {
    title: STORY_PATHS.core.components.main('RadioButton'),
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
        design: { disable: true },
    },
};

export const Sandbox: Story<RadioButtonProps> = ({ checked, ...props }) => (
    <Fragment>
        <RadioButton
            checked={checked}
            {...props}
        >
            <Fragment>{checked?.toString()}</Fragment>
        </RadioButton>
    </Fragment>
);

export const OuterCheckedState: Story<RadioButtonProps> = (props) => {
    const [bool, setBool] = useState(false);

    return (
        <Fragment>
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
                size={QX_SIZE.small}
            >
                {bool ? 'Деактивировать' : 'Активировать'}
            </Button>
        </Fragment>
    );
};

export const BooleanParams: Story<RadioButtonProps> = (props) => {
    const [bool, setBool] = useState(false);

    return (
        <Fragment>
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
                size={QX_SIZE.small}
            >
                {bool ? 'Деактивировать' : 'Активировать'}
            </Button>
        </Fragment>
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
