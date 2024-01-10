import { ReactNode } from 'react';

export interface IfProps {
    /** Условие отображения */
    condition: boolean | null | undefined;

    /** Отображаемый элемент */
    children?: ReactNode;
}
