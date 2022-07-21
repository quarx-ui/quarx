import React, { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { designParams, excludeProp } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { DisplayVariants, DisplayVariantsMap } from '@core/storybook/DisplayVariants';
import { Switcher, SWITCHER_POSITION, SwitcherProps } from '..';

export default {
    title: 'core/Switcher',
    component: Switcher,
    parameters: {
        actions: { disable: true },
        design: designParams(
            'https://www.figma.com/file/kqled9AjBtDMRhWKovsgYf/3.1%E3%83%BBControls?node-id=3997%3A74968',
        ),
    },
    argTypes: {
        size: { description: 'Размер компонента' },
        hasError: { description: 'Изменяет цвет компонента уведомляя об ошибке' },
        disabled: { description: 'Изменяет состояние компонента на активное/неактивное' },
        position: {
            description: 'Позиция переключателя относительно текста',
        },
        onToggle: { description: 'Событие, возникающее при клике на компонент' },
        ...BASE_ARG_TYPES,
    },
    args: {
        hasError: false,
        size: 'medium',
        disabled: false,
        position: SWITCHER_POSITION.left,
    },
};

export const Sandbox: Story<SwitcherProps> = (props) => {
    const [checked, setChecked] = useState(false);

    return (
        <div style={{ width: 'max-content' }}>
            <Switcher
                {...props}
                checked={checked}
                onChange={(e) => setChecked(e.currentTarget.checked)}
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

export const BooleanParams: Story<SwitcherProps> = (props) => {
    const [checked, setChecked] = useState(false);

    return DisplayVariantsMap({
        variants: {
            disabled: [true],
            hasError: [true],
        },
        optionTitle: { isShown: false },
        direction: 'vertical',
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
BooleanParams.storyName = 'Boolean параметры';

Sizes.argTypes = excludeProp(['size']);
BooleanParams.argTypes = excludeProp(['disabled', 'hasError']);
