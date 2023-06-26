import {
    QxBorderSize,
    PickQxSize,
    StylesMap,
    Values,
    valuesAsKeysFromArray,
    WithClassesAndStyles,
} from '@core';
import { Dispatch, SetStateAction } from 'react';
import { Locale } from 'date-fns';
import { TimeBadgesStyleKeys } from '@core/src/main/DatePicker/components/Block/components/DatePickerRightSection/styles';
import { DatePickerStyleKeys, DayStyleKeys, FooterDatePickerStyleKeys, MonthBlockStyleKeys, HeaderDatePickerStyleKeys,
    OffsetDayStyleKeys, DropdownDatePickerStyleKeys, DropdownButtonStyleKeys } from '.';

export const DATE_PICKER_TIME_TYPES = valuesAsKeysFromArray(['PERIOD', 'PICKER'] as const);
export type DatePickerTimeTypes = Values<typeof DATE_PICKER_TIME_TYPES>

export const DATE_PICKER_DISPLAY_TYPES = valuesAsKeysFromArray(['SINGLE', 'DOUBLE'] as const);
export type DatePickerDisplayTypes = Values<typeof DATE_PICKER_DISPLAY_TYPES>

export const EDITABLE_PERIOD_PARTS = valuesAsKeysFromArray(['START', 'END'] as const);
export type EditablePeriodParts = Values<typeof EDITABLE_PERIOD_PARTS>

export const PERIOD_CHANGING_FLOW = valuesAsKeysFromArray(['AFTER_DAY', 'AFTER_TIME_BADGE', 'AFTER_EACH', 'DEFAULT'] as const);
export type PeriodChangingFlow = Values<typeof PERIOD_CHANGING_FLOW>

export type DatePickerBorderRadius = QxBorderSize;

export type DatePickerSize = PickQxSize<'small' | 'medium' | 'large'>

export interface DatePickerStyleParams {
    /** Размер компонента (small, medium, large)
     * @default medium */
    size?: DatePickerSize;
    /** Размер скруглений компонента (xSmall, small, medium, large, xLarge)
     * @default medium */
    borderRadius?: DatePickerBorderRadius;

    countWeeksInMonth: number;
    isLarge: boolean;
}

export interface DatePickerAllowedDates {
    start?: Date;
    end?: Date;
}

export interface DatePickerTEXTS {
    /** Перевод названий дней недели
     * @default ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] */
    weekdays?: string[];
    /** Перевод названий месяцев
     * @default ['Январь', 'Февраль',..., 'Декабрь'] */
    monthNames?: string[];
    /** Выбор времени в пикере
     * @default 'Время' */
    time?: string;
    /** Начало времени в периоде
     * @default 'Начало' */
    startTime?: string;
    /** Конец времени в периоде
     * @default 'Конец' */
    endTime?: string;
    /** Ошибка валидации времени в календаре
     * @default 'Некорректное время' */
    errorValidateCalendarTime?: string;
}

export type PickerSelectedDate = Date | undefined;

export interface PeriodSelectedDates {
    start?: Date;
    end?: Date;
}

export type SelectedDates = PeriodSelectedDates | PickerSelectedDate;

export interface CommonDatePickerStyles {
    dropdown: StylesMap<DropdownDatePickerStyleKeys>;
    dropdownHeaderButton: StylesMap<DropdownButtonStyleKeys>;
    footer: StylesMap<FooterDatePickerStyleKeys>;
    header: StylesMap<HeaderDatePickerStyleKeys>;
    monthBlock: StylesMap<MonthBlockStyleKeys>;
    offsetDay: StylesMap<OffsetDayStyleKeys>;
    day: StylesMap<DayStyleKeys>;
    timeBadge: StylesMap<TimeBadgesStyleKeys>;
    datePickerRightSection: StylesMap<TimeBadgesStyleKeys>;
}

export interface CommonDatePickerProps extends Omit<DatePickerStyleParams, 'countWeeksInMonth' | 'isLarge' | 'width'>,
    WithClassesAndStyles<DatePickerStyleKeys, DatePickerStyleParams> {
    /** Объект разрешенных к выбору дат. Возможна работа с одним из значений периода.
     *  При передаче как минимум одного ключа, все, что вне периода становится неактивным */
    allowedDates?: DatePickerAllowedDates;
    /** Дата, которая отобразится первой (значение отслеживается при изменении пропса, можно изменяя его менять отображаемый месяц)  */
    viewingDate?: Date;
    /** Возможность отображения и изменения времени вместе с датой  */
    withTime?: boolean;
    /** Массив номеров года для отображения в Dropdown
     * @default [1980,...,2040] */
    yearsArr?: number[];
    /** Объект переводов текста */
    texts?: DatePickerTEXTS;
    /** Объект date-fns локали для перевода названий дней недели и месяцев автоматически (для полного перевода нужно заполнить `texts`)
     * @default ru_RU */
    locale?: Locale;
    /** Объект стилей для внутренних компонентов */
    innerStyles?: CommonDatePickerStyles;
    /** Возможность отображения нескольких месяцев */
    display?: DatePickerDisplayTypes;
    /** Отключение возможности переключения года в header SINGLE версии */
    disableYearChanging?: boolean;
    /** Активация выбора времени без ввода, а через нажатие на блоки */
    useTimeBadges?: boolean;
    /** Массив времен для выбора при активных баджах времени */
    timesToTimeBadges?: string[];
    /** Использовать увеличенный размер области активации дня при клике и наведении
     * @default (by size: xSmall -- true, others -- false)) */
    useBigPressScope?: boolean;
    /** Определяет, какая часть периода изменяется в данный момент
     * @default undefined */
    editablePartOfPeriod?: EditablePeriodParts;
    /** Функция позволяющая отследить изменение редактируемой части периода
     * @default undefined */
    onChangeEditablePartOfPeriod?: (currentPart: EditablePeriodParts) => void;
    /** Определяет, когда нужно начинать изменение конца периода после изменения начала
     * @default 'AFTER_DAY' */
    periodChangingFlow?: PeriodChangingFlow;
    /** Определяет, нужно ли очищать весь период после изменения дня начала
     * @default true */
    clearAllAfterChangingStartDate?: boolean;
    /** Определяет, нужно ли начинать выбор в периоде сначала при клике на день с уже заполненным selected
     * @default true */
    pickNewSelectedAfterEndDatePick?: boolean;
}

export function isPicker(dates: SelectedDates): dates is PickerSelectedDate {
    return typeof dates === 'undefined' || Object.prototype.toString.call(dates) === '[object Date]';
}

export function isPeriod(dates: SelectedDates): dates is PeriodSelectedDates {
    return !isPicker(dates);
}

export interface DatePickerProps<D extends SelectedDates = PickerSelectedDate> extends CommonDatePickerProps {
    /** Параметр, отвечающий за выбранную/нные даты. На их основе вычисляется тип календаря (Picker/Period).
     * Поэтому важно передавать правильные типы, даже если значения не выбраны
     * @default Picker: undefined; Period: {} */
    selected: D;
    /** Callback изменения выбранного времени. Срабатывает при клике на день календаря,
     * или изменении даты/времени с клавиатуры, если все валидации успешны. */
    onChange: (dates: D) => void;
}

export interface DatePickerInnerComponentsProps<D extends SelectedDates> extends Omit<DatePickerProps<D>, 'listOfYears' | 'permissions'
| 'locale' | 'className' | 'classes' | 'isOpen' | 'changeableDates' | 'css' | 'pickedDates' | 'onChange' | 'useBigPressScope' |
'onChangeEditablePartOfPeriod' | 'disableDefaultPeriodChangingFlow' | 'periodChangingFlow' | 'editablePartOfPeriod' |
'clearAllAfterChangingStartDate' | 'pickNewSelectedAfterEndDatePick'
>, Required<
    Pick<DatePickerProps<D>, 'onChangeEditablePartOfPeriod' | 'periodChangingFlow' | 'editablePartOfPeriod' | 'clearAllAfterChangingStartDate' | 'pickNewSelectedAfterEndDatePick'>
    > {
    onChange: (newDates: D) => void;
    viewingDate: Date;
    styles: Exclude<DatePickerProps<D>['styles'], undefined>;
    isLarge: boolean;
    setViewingDate: Dispatch<SetStateAction<Date>>;
    useBigPressScope: boolean;
}

export interface InnerTimeValues {
    pickedTime: string;
    startTime: string;
    endTime: string;
}

export interface InnerTimeSetters {
    setPickedTime: Dispatch<SetStateAction<string>>;
    setStartTime: Dispatch<SetStateAction<string>>;
    setEndTime: Dispatch<SetStateAction<string>>;
}
