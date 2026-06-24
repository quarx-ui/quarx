import LinkTo from '@storybook/addon-links/react';
import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { Selection } from '@core';
import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs/blocks';
import { Div } from 'storybook/internal/components';
import { Meta } from '@storybook/react-vite';
import { CONTROLLER_OPTIONS, SelectionTemplateProps } from './utils';
import description from './description.md?raw';

const defaultArgs: SelectionTemplateProps = {
    children: CONTROLLER_OPTIONS.Checkbox,
    title: 'Title',
    description: 'Description text',
    helperText: 'helper text',
};

export default {
    title: 'core/components/main/Selections/Selection',
    tags: ['autodocs'],
    component: Selection,
    args: defaultArgs,
    argTypes: {
        onChange: { description: 'Обработчик изменения состояния контроллера' },
        children: {
            description: 'Контроллер состояния',
            options: Object.values(CONTROLLER_OPTIONS),
        },
        title: { description: 'Заголовок компонента' },
        description: { description: 'Текст описания' },
        helperText: { description: 'Вспомогательный текст' },
        leftAdornment: { description: 'Левый элемент' },
        rightAdornment: { description: 'Правый элемент' },
        disableHandlingChildProps: {
            description: [
                'Отключение управления дочерними свойствами.',
                'Значениями свойств onChange, disableFocus, hover',
                'управляет Selection. Данное свойство отключит',
                'контроль дочерних свойств.',
            ].join(' '),
        },

        type: { description: 'Тип компонента' },
        color: { description: 'Цветовая схема компонента ' },
        size: { description: 'Размер компонента' },
        disabled: { description: 'Активное/неактивное состоние компонента' },
        reverse: { description: 'Включить/Отключить обратный порядок элементов' },
        disableFocus: { description: 'Возможность отключения focus`а компонента' },
        hover: { description: 'Начальное состояние эффекта наведения' },

        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        layout: 'fullscreen',
        docs: {
            page: () => (
                <Div>
                    <Title />
                    <Description markdown={description} />
                    <LinkTo
                        kind="core-manuals"
                        story="overwriting-properties"
                        // eslint-disable-next-line
                        // @ts-ignore
                        style={{ fontSize: 14 }}
                    >
                        Синхронизация реализуется по принципам, описанным в manuals
                    </LinkTo>
                    <Primary />
                    <Subtitle>Описание пропсов</Subtitle>
                    <Controls />
                    <Stories title="Примеры использования" />
                </Div>
            ),
        },
    },
} as Meta<SelectionTemplateProps>;

export { SandboxStory } from './sandbox';
export { AdornmentStory } from './adornment';
export { BooleanParamsStory } from './booleanParams';
export { ColorsStory } from './colors';
export { SizesStory } from './sizes';
export { TypesStory } from './types';
