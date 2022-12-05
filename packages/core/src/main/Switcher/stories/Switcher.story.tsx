import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { PALETTE_COLORS } from '@core/styles';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { Switcher, SWITCHER_POSITION, SwitcherProps } from '..';

export default {
    title: STORY_PATHS.core.components.main('Switcher'),
    component: Switcher,
    parameters: {
        actions: { disable: true },
        design: { disable: true },
    },
    argTypes: {
        size: { description: 'Размер компонента' },
        color: { description: 'Изменяет цвет компонента' },
        disabled: { description: 'Изменяет состояние компонента на активное/неактивное' },
        position: {
            description: 'Позиция переключателя относительно текста',
        },
        onToggle: { description: 'Событие, возникающее при клике на компонент' },
        ...BASE_ARG_TYPES,
    },
    args: {
        size: 'medium',
        color: PALETTE_COLORS.brand,
        disabled: false,
        position: SWITCHER_POSITION.left,
    },
};

export const Sandbox: Story<SwitcherProps> = ({ checked: externalChecked, ...props }) => {
    const [checked, setChecked] = useState(externalChecked);

    return (
        <div style={{ width: 'max-content' }}>
            <Switcher
                {...props}
                checked={checked}
                onChange={() => setChecked(!checked)}
            >
                Switcher
            </Switcher>
        </div>
    );
};

export const Sizes: Story<SwitcherProps> = (props) => {
    const [checked, setChecked] = useState(false);

    return DisplayVariants({
        property: 'size',
        values: ['small', 'medium', 'large'],
        component: Switcher,
        componentProps: {
            ...props,
            checked,
            onChange: (e) => setChecked(e.currentTarget.checked),
            children: 'Switcher',
        },
    });
};

export const DisabledParam: Story<SwitcherProps> = (props) => {
    const [checked, setChecked] = useState(false);

    return DisplayVariants({
        property: 'disabled',
        title: {
            type: 'value',
            isShown: true,
            size: 'primary',
        },
        values: [false, true],
        component: Switcher,
        componentProps: {
            ...props,
            checked,
            onChange: (e) => setChecked(e.currentTarget.checked),
            children: 'Switcher',
        },
    });
};

export const ColorParam: Story<SwitcherProps> = (props) => {
    const [checked, setChecked] = useState(false);

    return DisplayVariants({
        property: 'color',
        values: Object.values(PALETTE_COLORS),
        component: Switcher,
        componentProps: {
            ...props,
            checked,
            onChange: (e) => setChecked(e.currentTarget.checked),
            children: 'Switcher',
        },
    });
};

Sandbox.storyName = 'Компонент';
Sizes.storyName = 'Размеры';
DisabledParam.storyName = 'Disabled параметр';
ColorParam.storyName = 'Цветовая палитра';

Sizes.argTypes = excludeProp(['size']);
DisabledParam.argTypes = excludeProp(['disabled']);
ColorParam.argTypes = excludeProp(['color']);
