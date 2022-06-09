import { Ref } from 'react';

export interface Permissions {
    /** Объект с правами доступа к компоненту
     * @param disabled Изменяет состояние компонента на активное/неактивное
     * @param hidden Удаляет элемент со страницы */
    permissions?: {
        disabled?: boolean,
        hidden?: boolean,
    },
}

export interface BaseProps<ElementType> extends Permissions {
    /** Ссылка к корневому элементу */
    ref?: Ref<ElementType>,

    /** Пользовательский CSS-класс для корневого элемента */
    className?: string,
}
