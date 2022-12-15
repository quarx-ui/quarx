import { ReactElement, RefAttributes } from 'react';

export interface PortalProps<T extends HTMLElement = HTMLDivElement> {
    /** Отключить портал
     *
     * @default false */
    disablePortal?: boolean;

    /** Дочерний элемент */
    children: ReactElement & RefAttributes<T>;

    /** Контейнер для дочернего элемента */
    container?: ReactElement;
}
