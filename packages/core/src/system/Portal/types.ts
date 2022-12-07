import { ReactElement, RefAttributes } from 'react';

export interface PortalProps<T extends HTMLElement = HTMLDivElement> {
    /** @description Отключить портал
     *
     * @default false */
    disablePortal?: boolean;

    /** @description Дочерний элемент */
    children: ReactElement & RefAttributes<T>;

    /** @description Контейнер для дочернего элемента */
    container?: ReactElement;
}
