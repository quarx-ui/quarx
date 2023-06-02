import { defineCategory } from '@core/storybook/templateParams';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { DEMONSTRATION_ALERT } from '@core/storybook/constants';
import { Meta } from '@storybook/react';
import { TextFieldProps } from '@core';
import { TextField } from '../TextField';
import { defaultTextFieldStoryArgs } from './args';

export default {
    title: STORY_PATHS.core.components.main('TextField'),
    component: TextField,
    args: defaultTextFieldStoryArgs,
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
                description: `Включить/выключить левую иконку.${DEMONSTRATION_ALERT}`,
            },
            rightIconShown: {
                description: `Включить/выключить правую иконку.${DEMONSTRATION_ALERT}`,
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
} as Meta<TextFieldProps>;

export { SandboxStory } from './sandbox';
export { SizesStory } from './sizes';
export { ColorBaseStory } from './colorBase';
export { HelpersStory } from './helpers';
export { OverflowStory } from './overflow';
export { BorderRadiusStory } from './borderRadius';
export { ExternalSettingsStory } from './externalSettings';
export { VisibilityOfClearIconStory } from './visibilityOfClearIcon';
export { MasksStory } from './masks';
export { TextAreaStory } from './textArea';
