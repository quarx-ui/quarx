import { ReactElement } from 'react';
import { CaseProps } from '@core/src';

export interface SwitchProps
{
    /** Текущий элемент */
    value?: string;

    /** Case элементы */
    children: ReactElement<CaseProps>[];

    // TODO: Add transition ???
}
