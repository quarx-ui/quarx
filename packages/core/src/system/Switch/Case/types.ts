import React from 'react';

export interface CaseProps
{
    /** @description Условие выбора данного элемента */
    value?: string;

    /** @description Отображаемый элемент */
    children?: React.ReactNode;
}
