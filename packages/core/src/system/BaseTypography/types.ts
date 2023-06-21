import { BaseProps, OverridableProps, WithClassesAndStyles } from '@core';
import { ElementType, ReactNode } from 'react';
import { BaseTypographyStyleParams } from './styles/types';
import { BaseTypographyStyleKeys } from './styles';

export interface BaseTypographyPropsWithoutHtml extends
    BaseProps,
    Partial<BaseTypographyStyleParams>,
    WithClassesAndStyles<BaseTypographyStyleKeys, BaseTypographyStyleParams>
{
    children?: ReactNode;
}

export type BaseTypographyProps<C extends ElementType = 'div'> = OverridableProps<BaseTypographyPropsWithoutHtml, C>;
