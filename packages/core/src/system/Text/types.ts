import { BaseProps, OverridableProps, WithClassesAndStyles } from '@core';
import { ElementType, ReactNode } from 'react';
import { TextStyleParams } from './styles/types';
import { BaseTypographyStyleKeys } from './styles';

export interface TextPropsWithoutHtml extends
    BaseProps,
    Partial<TextStyleParams>,
    WithClassesAndStyles<BaseTypographyStyleKeys, TextStyleParams>
{
    children?: ReactNode;
}

export type TextProps<C extends ElementType = 'div'> = OverridableProps<TextPropsWithoutHtml, C>;
