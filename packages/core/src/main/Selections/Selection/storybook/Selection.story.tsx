import LinkTo from '@storybook/addon-links/react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { excludeProp } from '@core/storybook/templateParams';
import { Selection } from '@core';
import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories, Subtitle, Title } from '@storybook/addon-docs';
import { Div } from '@storybook/components';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { CONTROLLER_OPTIONS, SelectionTemplateProps } from './utils';
import description from './description.md';

const defaultArgs: SelectionTemplateProps = {
    children: CONTROLLER_OPTIONS.Checkbox,
    title: 'Title',
    description: 'Description text',
    helperText: 'helper text',
};

export default {
    title: STORY_PATHS.core.components.main('Selections/Selection'),
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
        actions: { disable: true },
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
                    <ArgsTable story={PRIMARY_STORY} />
                    <Stories title="Примеры использования" />
                </Div>
            ),
        },
    },
};

export { SandboxStory } from './sandbox';
export { AdornmentStory } from './adornment';
export { BooleanParamsStory } from './booleanParams';
export { ColorsStory } from './colors';
export { SizesStory } from './sizes';
export { TypesStory } from './types';
