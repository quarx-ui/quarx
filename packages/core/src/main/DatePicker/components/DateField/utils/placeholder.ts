import { DatePickerProps } from '@core';

const getPlaceholderDate = (withTime: DatePickerProps['withTime']) => (withTime ? 'ДД.ММ.ГГГГ ЧЧ:ММ' : 'ДД.ММ.ГГГГ');

export const getPlaceholder = (isPickerType: boolean, withTime: DatePickerProps['withTime']) => {
    if (isPickerType) {
        return getPlaceholderDate(withTime);
    }
    return `${getPlaceholderDate(withTime)} - ${getPlaceholderDate(withTime)}`;
};
