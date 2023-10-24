import { StylesMap } from '@core';
import { MouseEventHandler } from 'react';
import { BaseTextFieldProps, TextFieldPropsWithoutHtml } from '../types';

export interface BaseStylesProps {
    styles: StylesMap;
    cn: any;
}

export interface BottomProps extends
    Pick<TextFieldPropsWithoutHtml, 'helperText' | 'counter' | 'errorText' | 'errorIcon'>,
    Pick<BaseTextFieldProps, 'maxLength'>,
    BaseStylesProps
{
    length?: number;
}

export interface LabelProps extends
    Pick<TextFieldPropsWithoutHtml, 'disableLabel' | 'label' | 'requiredSymbol' | 'disableRequiredSymbol'>,
    Pick<BaseTextFieldProps, 'required'>,
    BaseStylesProps
{
    onClick?: MouseEventHandler<HTMLDivElement>;
    required?: boolean;
}

export interface RightItemProps extends BaseStylesProps
{
    disableClearIcon: boolean;
    item: TextFieldPropsWithoutHtml['rightItem'];
    resetValue: MouseEventHandler<HTMLDivElement>;
}
