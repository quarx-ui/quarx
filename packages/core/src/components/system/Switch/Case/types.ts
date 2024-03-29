import { ReactNode } from 'react';

export interface CaseProps
{
    /** Условие выбора данного элемента */
    value?: string;

    /** Отображаемый элемент */
    children?: ReactNode;
}
