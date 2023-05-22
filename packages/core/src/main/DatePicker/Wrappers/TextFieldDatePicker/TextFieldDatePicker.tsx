import {
    DatePickerProps, isPeriod,
    isPicker,
    SelectedDates,
    useBooleanState,
    usePropsOverwrites,
} from '@core';
import { forwardRef } from '@core/utils';
import { PopupDatePicker } from '@core/src/main/DatePicker/Wrappers/PopupDatePicker';
import { FocusEventHandler, MouseEventHandler, Ref, useEffect, useMemo, useRef, useState } from 'react';
import { PopupDatePickerProps } from '@core/src/main/DatePicker/Wrappers/PopupDatePicker/types';
import { ACTIVE_FIELD_TYPE, ActiveFieldType } from '@core/src/main/DatePicker/Wrappers/TextFieldDatePicker/constants';
import { ErrorsFromInput, TextFieldDatePickerProps } from './types';
import { changeSelectedByValue } from './utils';
import { DateField } from '../..';
import { useStyles } from './styles';

export const TextFieldDatePicker = forwardRef(<D extends SelectedDates>(
    initialProps: TextFieldDatePickerProps<D>, ref: Ref<HTMLDivElement>,
) => {
    const { props, styleProps, cn } = usePropsOverwrites('TextFieldDatePicker', initialProps);
    const anchor = useRef<HTMLDivElement>(null);
    const { selected, open = false, withTime = false, onChange, viewingDate: initialViewingDate,
        errorText: externalErrorText, texts, allowedDates,
        textFieldProps, useExperimentalDateFieldValidation = false, splittedPeriod = false,
        popupDatePickerStyles, popupDatePickerClasses,
        ...popupDatePickerProps } = props;

    const styles = useStyles({ ...styleProps });
    const {
        errorByDisallowedPickerDate = 'Выбранная дата вне разрешенного диапазона',
        errorByValidateFirstDate = 'Некорректная дата начала периода',
        errorByValidateLastDate = 'Некорректная дата конца периода',
        errorByValidateSelectedPickerDate = 'Некорректная дата',
        errorByEndDateBeforeStartDate = 'Дата конца периода раньше начала периода',
        errorByDisallowedStartDate = 'Дата начала вне разрешенного диапазона',
        errorByDisallowedEndDate = 'Дата конца вне разрешенного диапазона',
        ...restTexts
    } = texts || {};

    const errorsFromInput: Required<ErrorsFromInput> = {
        errorByDisallowedPickerDate,
        errorByValidateFirstDate,
        errorByValidateLastDate,
        errorByValidateSelectedPickerDate,
        errorByDisallowedStartDate,
        errorByDisallowedEndDate,
        errorByEndDateBeforeStartDate,
    };

    const { state: isOpen, setTrue: openPopup, setFalse: closePopup } = useBooleanState(open);
    const [viewingDate, setViewingDate] = useState<DatePickerProps['viewingDate']>(initialViewingDate);
    const [errorText, setErrorText] = useState(externalErrorText);
    const [activeTextField, setActiveTextField] = useState<ActiveFieldType | undefined>(undefined);
    const startInputRef = useRef<HTMLDivElement>(null);
    const endInputRef = useRef<HTMLDivElement>(null);
    const isPickerType = isPicker(selected);

    const onTextFieldClick: MouseEventHandler<HTMLDivElement> = (e) => {
        openPopup();
        textFieldProps?.onClick?.(e);
    };

    const onDateFieldChange = (value: D) => {
        changeSelectedByValue<D>(
            { onChange, isPickerType, value, setErrorText, allowedDates, errorsFromInput },
        );
    };

    const onChangeWithTextFieldChanging: PopupDatePickerProps<D>['onChange'] = (dates) => {
        console.log(dates);
        onChange(dates);
    };

    const onChangeSplittedPeriod = (type: ActiveFieldType) => (date?: Date) => {
        onDateFieldChange(type === ACTIVE_FIELD_TYPE.START ? { ...selected, start: date } : { ...selected, end: date });
    };

    const onFocusSplittedPeriod = (type: ActiveFieldType): FocusEventHandler<HTMLDivElement> => () => {
        setActiveTextField(type);
    };

    const activeRef = useMemo(() => (
        activeTextField === ACTIVE_FIELD_TYPE.START ? startInputRef : endInputRef
    ), [activeTextField]);

    const onClickAwayDatePicker = (e: PointerEvent) => {
        if (splittedPeriod) {
            const clickedFieldType = (e.target as Element).getAttribute('data-field-type');
            if (!(clickedFieldType === 'END' || clickedFieldType === 'START')) { // todo переписать по нормальному
                closePopup();
            }
        } else {
            closePopup();
        }
    };

    useEffect(() => {
        if (externalErrorText) {
            setErrorText(externalErrorText);
        }
    }, [externalErrorText]);

    return (
        <div ref={ref}>
            {splittedPeriod && selected && isPeriod(selected) ? (
                <div
                    css={styles.splittedTextFields}
                    className={cn('splittedTextFields', {})}
                >
                    <DateField
                        id={ACTIVE_FIELD_TYPE.START}
                        value={selected.start}
                        isSingleDate
                        ref={startInputRef}
                        onFocus={onFocusSplittedPeriod(ACTIVE_FIELD_TYPE.START)}
                        onChange={onChangeSplittedPeriod(ACTIVE_FIELD_TYPE.START)}
                        useExperimentalDateFieldValidation={useExperimentalDateFieldValidation}
                        onClick={onTextFieldClick}
                        withTime={withTime}
                        inputProps={{
                            'data-field-type': ACTIVE_FIELD_TYPE.START,
                        }}
                    />
                    <DateField
                        id={ACTIVE_FIELD_TYPE.END}
                        value={selected.end}
                        isSingleDate
                        ref={endInputRef}
                        onFocus={onFocusSplittedPeriod(ACTIVE_FIELD_TYPE.END)}
                        onChange={onChangeSplittedPeriod(ACTIVE_FIELD_TYPE.END)}
                        useExperimentalDateFieldValidation={useExperimentalDateFieldValidation}
                        onClick={onTextFieldClick}
                        withTime={withTime}
                        inputProps={{
                            'data-field-type': ACTIVE_FIELD_TYPE.END,
                        }}
                    />
                </div>
            ) : (
                <DateField
                    {...textFieldProps}
                    onClick={onTextFieldClick}
                    onChange={onDateFieldChange}
                    ref={anchor}
                    value={selected}
                    isSingleDate={isPickerType}
                    withTime={withTime}
                    errorText={errorText}
                    useExperimentalDateFieldValidation={useExperimentalDateFieldValidation}
                />
            )}
            <PopupDatePicker
                {...popupDatePickerProps}
                selected={selected}
                viewingDate={viewingDate}
                onChange={onChangeWithTextFieldChanging}
                withTime={withTime}
                open={isOpen}
                onClickAway={onClickAwayDatePicker}
                styles={popupDatePickerStyles}
                classes={popupDatePickerClasses}
                anchor={splittedPeriod ? activeRef : anchor}
                texts={restTexts}
            />
        </div>
    );
});
