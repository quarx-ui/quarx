import { BaseProps, OverridableProps, WithClassesAndStyles } from '@core';
import { ElementType } from 'react';
import { DividerStyleParams } from './styles/types';
import { DividerStyleKeys } from './styles';

export type DividerPropsWithoutHtml =
    & BaseProps<HTMLDivElement>
    & Partial<DividerStyleParams>
    & WithClassesAndStyles<DividerStyleKeys, DividerStyleParams>

export type DividerProps<C extends ElementType = 'div'> = OverridableProps<DividerPropsWithoutHtml, C>;
