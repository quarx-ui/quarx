import { DatePickerBlockProps } from '@core/src/experimental';

const getPlaceholderDate = (withTime: DatePickerBlockProps['withTime']) => (withTime ? 'ДД.ММ.ГГГГ ЧЧ:ММ' : 'ДД.ММ.ГГГГ');

export const getPlaceholder = (isPickerType: boolean, withTime: DatePickerBlockProps['withTime']) => {
    if (isPickerType) {
        return getPlaceholderDate(withTime);
    }
    return `${getPlaceholderDate(withTime)} - ${getPlaceholderDate(withTime)}`;
};
