import { Ref } from 'react';

export interface Permissions {
    disabled?: boolean,
    hidden?: boolean,
}

export interface WithPermissions {
    /** Объект с правами доступа к компоненту
     * @param disabled Изменяет состояние компонента на активное/неактивное
     * @param hidden Удаляет элемент со страницы */
    permissions?: Permissions,
}

export interface BaseProps<ElementType extends HTMLElement = HTMLDivElement> extends WithPermissions {
    /** Ссылка к корневому элементу */
    ref?: Ref<ElementType>,

    /** Пользовательский CSS-класс для корневого элемента */
    className?: string,
}
