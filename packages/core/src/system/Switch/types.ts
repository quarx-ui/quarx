import { ReactElement } from 'react';
import { CaseProps } from '@core/src';

export interface SwitchProps
{
    /** @description Текущий элемент */
    value?: string;

    /** @description Case элементы */
    children: ReactElement<CaseProps>[];

    // TODO: Add transition ???
}
