import { BaseProps, OverridableProps, WithClassesAndStyles } from '@core';
import { ElementType, ReactNode } from 'react';
import { HeadlineStyleParams } from './styles/types';
import { HeadlineStyleKeys } from './styles';

export interface HeadlinePropsWithoutHtml extends
    BaseProps,
    Partial<HeadlineStyleParams>,
    WithClassesAndStyles<HeadlineStyleKeys, HeadlineStyleParams>
{
    children?: ReactNode;
}

export type HeadlineProps<C extends ElementType = 'div'> = OverridableProps<HeadlinePropsWithoutHtml, C>;
