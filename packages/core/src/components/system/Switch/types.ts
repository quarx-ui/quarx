import { ReactElement } from 'react';
import { CaseProps } from './Case';

export interface SwitchProps
{
    /** Текущий элемент */
    value?: string;

    /** Case элементы */
    children: ReactElement<CaseProps>[];

    // TODO: Add transition ???
}
