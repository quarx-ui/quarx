import { Story } from '@storybook/react/types-6-0';
import { useState } from 'react';
import { designParams, excludeProp } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { DisplayVariants, DisplayVariantsMap } from '@core/storybook/DisplayVariants';
import { PALETTE_COLORS } from '@core/styles';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { CheckboxProps, Checkbox } from '..';

export default {
    title: STORY_PATHS.core.components.main('Checkbox'),
    component: Checkbox,
    argTypes: {
        borderRadius: {
            description: 'Скругление',
        },
        color: {
            description: 'Изменяет цвет компонента',
        },
        disabled: {
            description: 'Изменяет состояние компонента на активное/неактивное',
        },
        size: {
            description: 'Размер компонента',
        },
        children: {
            description: 'Дочерний текстовый элемент',
        },
        ...BASE_ARG_TYPES,
    },
    args: {
        color: PALETTE_COLORS.brand,
        disabled: false,
        indeterminate: false,
        borderRadius: 'medium',
        size: 'medium',
    },
    parameters: {
        design: designParams('https://www.figma.com/file/kqled9AjBtDMRhWKovsgYf/3.1%E3%83%BBControls?node-id=8672%3A61110'),
        actions: { disable: true },
    },
};

export const Sandbox: Story<CheckboxProps> = ({ ...props }) => {
    const [bool, setBool] = useState(false);
    return (
        <div style={{ width: 'max-content' }}>
            <Checkbox
                onChange={(e) => setBool(e.currentTarget.checked)}
                checked={bool}
                {...props}
            >
                {bool.toString()}
            </Checkbox>
        </div>
    );
};

export const BooleanParams: Story<CheckboxProps> = (props) => {
    const [bool, setBool] = useState(false);
    return DisplayVariantsMap({
        variants: {
            disabled: [true],
            indeterminate: [true],
        },
        direction: 'vertical',
        optionTitle: {
            isShown: false,
        },
        component: Checkbox,
        componentProps: {
            ...props,
            checked: bool,
            children: bool.toString(),
            onChange: (e) => setBool(e.currentTarget.checked),
        },
    });
};

export const ColorsParams: Story<CheckboxProps> = (props) => {
    const [bool, setBool] = useState(false);
    return DisplayVariants({
        property: 'color',
        values: Object.values(PALETTE_COLORS),
        component: Checkbox,
        componentProps: {
            ...props,
            checked: bool,
            children: bool.toString(),
            onChange: (e) => setBool(e.currentTarget.checked),
        },
    });
};

export const Sizes: Story<CheckboxProps> = (props) => {
    const [bool, setBool] = useState(false);
    return DisplayVariants({
        property: 'size',
        values: ['small', 'medium', 'large'],
        component: Checkbox,
        componentProps: {
            ...props,
            checked: bool,
            children: bool.toString(),
            onChange: (e) => setBool(e.currentTarget.checked),
        },
    });
};

export const BorderRadius: Story<CheckboxProps> = (props) => {
    const [bool, setBool] = useState(false);
    return DisplayVariants({
        property: 'borderRadius',
        values: ['medium', 'max'],
        component: Checkbox,
        componentProps: {
            ...props,
            checked: bool,
            children: bool.toString(),
            onChange: (e) => setBool(e.currentTarget.checked),
        },
    });
};

Sandbox.storyName = 'Компонент';
BooleanParams.storyName = 'Boolean параметры';
ColorsParams.storyName = 'Цвета';
Sizes.storyName = 'Размеры';
BorderRadius.storyName = 'Скругления';

BooleanParams.argTypes = excludeProp(['disabled', 'indeterminate']);
ColorsParams.argTypes = excludeProp(['color']);
Sizes.argTypes = excludeProp(['size']);
BorderRadius.argTypes = excludeProp(['borderRadius']);
