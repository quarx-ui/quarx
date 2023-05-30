import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { QX_SIZE } from '@core';
import { SandboxStory } from './sandbox';
import { CustomizationStory } from './customization';
import { SizesStory } from './sizes';
import { Dropdown, DROPDOWN_WIDTH_PRESETS, DropdownProps } from '..';

export default {
    title: STORY_PATHS.core.components.main('Dropdown'),
    component: Dropdown,
    parameters: {
        actions: { disable: true },
    },
    argTypes: {
        ...defineCategory('Стилевые параметры', {
            size: { description: 'Размер компонента' },
            width: { description: 'Ширина Dropdown' },
            minWidth: { description: 'Минимальная ширина, независимая от выбора предустановленной ширины' },
            maxWidth: { description: 'Максимальная ширина, независимая от выбора предустановленной ширины' },
            searchable: { description: 'Включена ли поисковая строка' },
            zIndex: { description: 'CSS свойство zIndex' },
        }),
        ...defineCategory('Параметры всплывающего окна', {
            anchor: { description: 'Якорный элемент' },
            open: { description: 'Видимость всплывающего окна' },
            onClickAway: { description: 'Функция, вызываемая при клике вне дочернего компонента' },
            PopupProps: { description: 'Свойства всплывающего окна' },
        }),
        ...defineCategory('Параметры шапки всплывающего окна', {
            title: { description: 'Заголовок компонента' },
            searchPlaceHolder: { description: 'Вспомогательный текст для поисковой строки' },
            onSearchChange: { description: 'Обработчик события изменения значения компонента' },
            onSearchClear: { description: 'Обработчик очистки поисковой строки' },
            searchLoading: { description: 'Состояние загрузки поисковой строки' },
            searchText: { description: 'Текст поисковой строки' },
            SearchableTextFieldProps: { description: 'Свойства поисковой строки' },
            header: { description: 'Пользовательская шапка компонента. Заменяет шапку по умолчанию' },
        }),
        ...defineCategory('Параметры тела всплывающего окна', {
            children: { description: 'Основной контент компонента' },
            maxBodyHeight: { description: 'Ограничение высоты контента dropdown' },
        }),
        ...defineCategory('Параметры подвала всплывающего окна', {
            buttonManagement: { description: 'Подвал с кнопочным управлением' },
            AcceptButtonProps: { description: 'Свойства кнопки "Принять"' },
            onAcceptButtonClick: { description: 'Обработчик события клика по кнопке применения' },
            CancelButtonProps: { description: 'Свойства кнопки "Отменить"' },
            onCancelButtonClick: { description: 'Обработчик события клика по кнопке сброса' },
            footer: { description: 'Пользовательский подвал компонента. Заменяет подвал по умолчанию' },
        }),
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    args: {
        size: QX_SIZE.medium,
        open: false,
        width: DROPDOWN_WIDTH_PRESETS.default,
        searchable: true,
        searchLoading: false,
        buttonManagement: true,
        onClickAway: () => undefined,
        maxBodyHeight: 320,
        hidden: false,
    } as Partial<DropdownProps>,
};

export {
    SandboxStory,
    CustomizationStory,
    SizesStory,
};
