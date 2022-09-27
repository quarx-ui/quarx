import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import InputMask from 'react-input-mask';
import NumberFormat from 'react-number-format';
import { Story } from '@storybook/react/types-6-0';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants, DisplayBooleanVariants } from '@core/storybook/DisplayVariants';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Button, QX_SIZE } from '@core';
import { TextFieldProps } from '@quarx-ui/core/src/styled/TextField/types';
import {
    borderRadiusDescription,
    colorBaseDescription,
    externalSettingsDescription,
    helperDescription, masksDescription,
    overflowDescription,
    sizesDescription,
    textAreaDescription,
    visibilityOfClearIconDescription,
} from './descriptions';
import { RightIcon, LeftIcon } from './assets';
import { TextField } from '..';

const defaultArgs: TextFieldProps = {
    label: 'Text Field',
    borderRadius: 'medium',
    size: QX_SIZE.medium,
    counter: false,
    disabled: false,
    helperText: 'Подсказка',
    maxLength: 30,
    leftItem: <LeftIcon />,
    rightItem: <RightIcon />,
    placeholder: 'Имя',
    colorBase: 'main',
    overflow: true,
    required: false,
    readOnly: false,
    autoFocus: false,
    disableLabel: false,
    counterVisibleOn: 'focus',
    clearIconVisibleOn: 'interact',
};

export default {
    title: 'core/TextField',
    component: TextField,
    argTypes: {
        ...defineCategory('Состояние', {
            name: {
                control: false,
            },
            disabled: {},
            autoFocus: {},
            focused: {},
            value: {},
            defaultValue: {},
            loading: {},
            filled: {},
            error: {},
            inputProps: {},
            inputRef: {
                control: false,
            },
            multiline: {},
        }),
        ...defineCategory('Подсказки', {
            label: {},
            placeholder: {},
            counter: {},
            counterVisibleOn: {},
            bottomIsAbsolute: {},
            errorText: {},
            internalErrors: {},
            helperText: {},
            disableLabel: {},
            requiredSymbol: {},
            disableRequiredSymbol: {},
            disableInternalErrorText: {},
        }),
        ...defineCategory('Стилизация', {
            size: {},
            borderRadius: {},
            colorBase: {},
            disableHoverStyles: {},
            rows: {},
        }),
        ...defineCategory('Ограничения', {
            maxLength: {},
            required: {},
            overflow: {},
            readOnly: {},
            minRows: {},
            maxRows: {},
        }),
        ...defineCategory('Боковые элементы', {
            leftIconShown: {
                description: 'Включить/выключить левую иконку.<br><small>Доступно только для демонстрации</small>',
            },
            rightIconShown: {
                description: 'Включить/выключить правую иконку.<br><small>Доступно только для демонстрации</small>',
            },
            rightItem: {
                control: false,
            },
            leftItem: {
                control: false,
            },
            clearIconVisibleOn: {},
        }),
        ...defineCategory('Обработчики', {
            onChange: {
                control: false,
            },
            onClear: {
                control: false,
            },
        }),
        ...defineCategory('Общие', BASE_ARG_TYPES),
    },
    args: defaultArgs,
    parameters: {
        actions: { disable: true },
    },
};

type StoryTextFieldProps = TextFieldProps & {
    leftIconShown: boolean,
    rightIconShown: boolean,
}

export const Sandbox: Story<StoryTextFieldProps> = ({
    leftIconShown,
    rightIconShown,
    leftItem,
    rightItem,
    ...props
}) => {
    const ref = useRef<HTMLInputElement>(null);
    return (
        <TextField
            {...props}
            leftItem={leftIconShown ? leftItem : undefined}
            rightItem={rightIconShown ? rightItem : undefined}
            inputRef={ref}
        />
    );
};

Sandbox.args = {
    ...defaultArgs,
    leftIconShown: true,
    rightIconShown: true,
};

export const Sizes: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'size',
    values: ['small', 'medium', 'large'],
    component: TextField,
    componentProps: props,
});

export const BorderRadius: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'borderRadius',
    values: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
    component: TextField,
    componentProps: props,
});

export const ColorBase: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'colorBase',
    values: ['main', 'secondary'],
    component: TextField,
    componentProps: props,
});

const Flex = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
});

export const Helpers: Story<StoryTextFieldProps> = (props) => (
    <Flex>
        <TextField {...props} helperText="Helper Text" />
        <TextField {...props} helperText="Helper Text" counter />
        <TextField {...props} errorText="Error Text" />
    </Flex>
);

export const Overflow: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'overflow',
    values: [false, true],
    component: TextField,
    componentProps: props,
});

export const VisibilityOfClearIcon: Story<TextFieldProps> = (props) => DisplayVariants({
    property: 'clearIconVisibleOn',
    values: ['interact', 'always', 'none'],
    component: TextField,
    componentProps: props,
});

export const TextArea: Story<TextFieldProps> = (props) => DisplayBooleanVariants({
    properties: ['multiline'],
    component: TextField,
    shownTitle: false,
    componentProps: props,
});

const Grid = styled('div')({
    display: 'grid',
    gridGap: 16,
    gridTemplateColumns: 'repeat(3, 1fr)',
    margin: 16,
});

export const ExternalSettings: Story<TextFieldProps> = (props) => {
    const [value, setValue] = useState('');
    const [focused, setFocused] = useState<boolean | undefined>(false);
    const [filled, setFilled] = useState<boolean | undefined>(false);
    const [errorText, setErrorText] = useState<string | undefined>();

    const clearInput = () => {
        setValue('');
    };
    const focus = () => {
        setFocused((prev) => !prev);
    };
    const fill = () => {
        setFilled((prev) => !prev);
    };
    const showError = () => {
        setErrorText((prev) => (!prev ? 'Какая-то ошибка' : undefined));
    };

    return (
        <>
            <Grid>
                <TextField {...props} value={value} onChange={(e) => setValue(e.target.value)} />
                <Button onClick={clearInput}>Очистить содержимое</Button>
            </Grid>
            <Grid>
                <TextField {...props} focused={focused} />
                <Button onClick={focus}>
                    {focused ? 'Отключить' : 'Включить'}
                    {' '}
                    фокус
                </Button>
                <Button onClick={() => setFocused(undefined)}>
                    undefined
                </Button>
            </Grid>
            <Grid>
                <TextField {...props} filled={filled} />
                <Button onClick={fill}>
                    {filled ? 'Отключить' : 'Включить'}
                    {' '}
                    заполненность
                </Button>
                <Button onClick={() => setFilled(undefined)}>
                    undefined
                </Button>
            </Grid>
            <Grid>
                <TextField {...props} errorText={errorText} />
                <Button onClick={showError}>
                    {errorText ? 'Скрыть' : 'Показать'}
                    {' '}
                    внешнюю ошибку
                </Button>
            </Grid>
        </>
    );
};

export const Masks: Story<TextFieldProps> = () => (
    <Grid>
        <InputMask mask="9999 9999 9999 9999" maskChar="*">
            {(inputProp: TextFieldProps) => <TextField label="Text Field" {...inputProp} />}
        </InputMask>
        <NumberFormat
            format="#### #### #### ####"
            mask="*"
            customInput={TextField}
            label="Text Field"
        />
    </Grid>
);

Sizes.parameters = {
    docs: {
        description: { story: sizesDescription },
    },
};

ColorBase.parameters = {
    docs: {
        description: { story: colorBaseDescription },
    },
};

Helpers.parameters = {
    docs: {
        description: { story: helperDescription },
    },
};

Overflow.parameters = {
    docs: {
        description: { story: overflowDescription },
    },
};

VisibilityOfClearIcon.parameters = {
    docs: {
        description: { story: visibilityOfClearIconDescription },
    },
};

BorderRadius.parameters = {
    docs: {
        description: { story: borderRadiusDescription },
    },
};

TextArea.parameters = {
    docs: {
        description: { story: textAreaDescription },
    },
};

ExternalSettings.parameters = {
    docs: {
        description: { story: externalSettingsDescription },
    },
};

Masks.parameters = {
    docs: {
        description: { story: masksDescription },
        source: {
            code: `
import InputMask from 'react-input-mask';
import NumberFormat from 'react-number-format';

<InputMask mask="9999 9999 9999 9999" maskChar="*">
    {(inputProp: TextFieldProps) => (
        <TextField 
            label="Text Field" 
            {...inputProp}
        />
    )}
</InputMask>

<NumberFormat
    format="#### #### #### ####"
    mask="*"
    customInput={TextField}
    label="Text Field"
/>
            `,
        },
    },
};

Sandbox.storyName = 'Компонент';
Sizes.storyName = 'Размеры';
ColorBase.storyName = 'Цветовая основа';
Helpers.storyName = 'Подсказки';
Overflow.storyName = 'Переполнение';
BorderRadius.storyName = 'Скругления';
ExternalSettings.storyName = 'Внешнее управление';
VisibilityOfClearIcon.storyName = 'Очистка поля';
Masks.storyName = 'Использование с масками';

const excludedDemos = ['leftIconShown', 'rightIconShown'];

Sizes.argTypes = excludeProp(['size', ...excludedDemos]);
ColorBase.argTypes = excludeProp(['colorBase', ...excludedDemos]);
Helpers.argTypes = excludeProp([
    'helperText',
    'counter',
    'errorText',
    'maxLength',
    ...excludedDemos,
]);
Overflow.argTypes = excludeProp([
    'counter',
    'errorText',
    'maxLength',
    ...excludedDemos,
]);
BorderRadius.argTypes = excludeProp(['borderRadius', ...excludedDemos]);
ExternalSettings.argTypes = excludeProp(['errorText', 'focused', 'filled', ...excludedDemos]);
VisibilityOfClearIcon.argTypes = excludeProp(['clearIconVisibleOn', ...excludedDemos]);
TextArea.argTypes = excludeProp(['multiline', ...excludedDemos]);

Helpers.args = {
    ...defaultArgs,
    defaultValue: 'Some text',
};

VisibilityOfClearIcon.args = {
    ...defaultArgs,
    defaultValue: 'Some text',
};

TextArea.args = {
    ...defaultArgs,
    clearIconVisibleOn: undefined,
};

Overflow.args = {
    ...defaultArgs,
    maxLength: 10,
    counter: true,
};
