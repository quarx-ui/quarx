import React from 'react';

export interface IfProps {
    /** @description Условие отображения */
    condition: boolean | null | undefined;

    /** @description Отображаемый элемент */
    children?: React.ReactNode;
}
