import { QX_SIZE } from '@core/enums';
import { TextFieldProps } from '../types';
import { RightIcon, LeftIcon } from './assets';

export const defaultTextFieldStoryArgs: TextFieldProps = {
    label: 'Text Field',
    borderRadius: 'medium',
    size: QX_SIZE.medium,
    counter: false,
    disabled: false,
    helperText: 'Подсказка',
    maxLength: 30,
    leftItem: <LeftIcon />,
    rightItem: <RightIcon />,
    placeholder: 'Имя',
    colorBase: 'main',
    overflow: true,
    required: false,
    readOnly: false,
    autoFocus: false,
    disableLabel: false,
    counterVisibleOn: 'focus',
    clearIconVisibleOn: 'interact',
};
