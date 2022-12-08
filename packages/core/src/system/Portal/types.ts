import { ReactElement, RefAttributes } from 'react';

export interface PortalProps<T extends HTMLElement = HTMLDivElement> {
    /** Отключить портал */
    disablePortal?: boolean;

    /** Дочерний элемент */
    children: ReactElement & RefAttributes<T>;

    /** Контейнер для дочернего элемента */
    container?: ReactElement;
}
