import { PopupProps, WithClassesAndStyles } from '../../../../../../index';
import {
    DatePickerBlockProps,
    PickerSelectedDate,
    SelectedDates,
} from '../../components';
import { DatePickerStyleKeys } from './styles';
import { DatePickerStyleParams } from './styles/types';

type PopupComponentDatePickerProps = Omit<PopupProps, 'anchor' | 'onClickAway' | 'open'>

type DatePickerPropsToPopup<D extends SelectedDates> = Omit<DatePickerBlockProps<D>, 'classes' | 'styles'>;

export interface DatePickerProps<D extends SelectedDates = PickerSelectedDate> extends
    DatePickerPropsToPopup<D>,
    Pick<PopupProps, 'onClickAway' | 'anchor' |'open'>,
    Partial<DatePickerStyleParams>,
    WithClassesAndStyles<DatePickerStyleKeys, DatePickerStyleParams>
{
    /** Props Popup компонента */
    popupProps?: PopupComponentDatePickerProps;
}
