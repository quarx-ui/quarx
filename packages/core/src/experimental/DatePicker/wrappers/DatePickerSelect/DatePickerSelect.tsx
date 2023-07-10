import {
    Stack,
    useBooleanState,
    usePropsOverwrites,
} from '@core';
import { forwardRef } from '@core/utils';
import { FocusEventHandler, MouseEventHandler, Ref, useMemo, useRef, useState } from 'react';
import {
    DatePickerBlockProps, isPeriod, isPicker, EditablePeriodParts, SelectedDates,
} from '../../components/Block/types';
import { DatePicker } from '../DatePicker';
import { ACTIVE_FIELD_TYPE, ActiveFieldType, DEFAULT_TEXTS } from './constants';
import { ErrorsFromInput, DatePickerSelectProps } from './types';
import { changeSelectedByValue } from './utils';
import { DateField, PERIOD_CHANGING_FLOW } from '../..';

export const DatePickerSelect = forwardRef(<D extends SelectedDates>(
    initialProps: DatePickerSelectProps<D>, ref: Ref<HTMLDivElement>,
) => {
    const { props } = usePropsOverwrites('DatePickerSelect', initialProps);
    const anchor = useRef<HTMLDivElement>(null);
    const { selected, open = false, withTime = false, onChange, viewingDate: externalViewingDate,
        errorText: externalErrorText, startErrorText: externalStartErrorText, endErrorText: externalEndErrorText,
        texts, allowedDates,
        textFieldProps, useExperimentalDateFieldValidation = false, splittedPeriod = false,
        popupDatePickerStyles, popupDatePickerClasses, useTimeBadges,
        ...popupDatePickerProps } = props;

    const {
        errorByDisallowedPickerDate = DEFAULT_TEXTS.errorByDisallowedPickerDate,
        errorByValidateFirstDate = DEFAULT_TEXTS.errorByValidateFirstDate,
        errorByValidateLastDate = DEFAULT_TEXTS.errorByValidateLastDate,
        errorByValidateSelectedPickerDate = DEFAULT_TEXTS.errorByValidateSelectedPickerDate,
        errorByEndDateBeforeStartDate = DEFAULT_TEXTS.errorByEndDateBeforeStartDate,
        errorByDisallowedStartDate = DEFAULT_TEXTS.errorByDisallowedStartDate,
        errorByDisallowedEndDate = DEFAULT_TEXTS.errorByDisallowedEndDate,
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

    const [isOpen, { setTrue: openPopup, setFalse: closePopup }] = useBooleanState(open);
    const [innerErrorText, setErrorText] = useState('');
    const errorText = externalErrorText || innerErrorText;
    const [viewingDate, setViewingDate] = useState(externalViewingDate);
    const [startErrorText, setStartErrorText] = useState(externalStartErrorText || '');
    const [endErrorText, setEndErrorText] = useState(externalEndErrorText || '');
    const [activeTextField, setActiveTextField] = useState<ActiveFieldType | undefined>(undefined);
    const startInputRef = useRef<HTMLDivElement>(null);
    const endInputRef = useRef<HTMLDivElement>(null);
    const isPickerType = isPicker(selected);

    const onTextFieldClick: MouseEventHandler<HTMLDivElement> = (e) => {
        openPopup();
        textFieldProps?.onClick?.(e);
    };

    const onDateFieldChange = (value: D) => {
        changeSelectedByValue<D>({
            onChange,
            isPickerType,
            value,
            setErrorText,
            allowedDates,
            errorsFromInput,
            setStartErrorText,
            setEndErrorText,
            splittedPeriod,
        });
    };

    const onChangeWithTextFieldChanging: DatePickerBlockProps<D>['onChange'] = (dates) => {
        changeSelectedByValue<D>({
            onChange,
            isPickerType,
            value: dates,
            setErrorText,
            allowedDates,
            errorsFromInput,
            setStartErrorText,
            setEndErrorText,
            splittedPeriod,
        });
    };

    const onChangeSplittedPeriod = (type: ActiveFieldType) => (date?: Date) => {
        setViewingDate(date);
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
            if (!(clickedFieldType
                && [ACTIVE_FIELD_TYPE.START, ACTIVE_FIELD_TYPE.END].includes(clickedFieldType as ActiveFieldType))) {
                closePopup();
            }
        } else {
            closePopup();
        }
    };

    const onChangeEditablePartOfPeriod = (editablePart: EditablePeriodParts) => {
        setActiveTextField(editablePart);
    };

    return (
        <div ref={ref}>
            {splittedPeriod && selected && isPeriod(selected) ? (
                <Stack
                    direction="row"
                    spacing="10px"
                >
                    <DateField
                        id={ACTIVE_FIELD_TYPE.START}
                        value={selected.start}
                        isSingleDate
                        ref={startInputRef}
                        onFocus={onFocusSplittedPeriod(ACTIVE_FIELD_TYPE.START)}
                        onChange={onChangeSplittedPeriod(ACTIVE_FIELD_TYPE.START)}
                        useExperimentalDateFieldValidation={useExperimentalDateFieldValidation}
                        errorText={startErrorText}
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
                        errorText={endErrorText}
                        withTime={withTime}
                        inputProps={{
                            'data-field-type': ACTIVE_FIELD_TYPE.END,
                        }}
                    />
                </Stack>
            ) : (
                <DateField
                    {...textFieldProps}
                    onClick={onTextFieldClick}
                    onChange={(dates: D) => {
                        setViewingDate(isPicker(dates) ? dates : (dates.end || dates.start));
                        onDateFieldChange(dates);
                    }}
                    ref={anchor}
                    value={selected}
                    isSingleDate={isPickerType}
                    withTime={withTime}
                    errorText={errorText}
                    useExperimentalDateFieldValidation={useExperimentalDateFieldValidation}
                />
            )}
            <DatePicker
                {...popupDatePickerProps}
                viewingDate={viewingDate}
                selected={selected}
                onChange={onChangeWithTextFieldChanging}
                withTime={withTime}
                open={isOpen}
                onClickAway={onClickAwayDatePicker}
                editablePartOfPeriod={activeTextField}
                periodChangingFlow={withTime && useTimeBadges && splittedPeriod
                    ? PERIOD_CHANGING_FLOW.AFTER_TIME_BADGE : PERIOD_CHANGING_FLOW.AFTER_EACH}
                onChangeEditablePartOfPeriod={onChangeEditablePartOfPeriod}
                styles={popupDatePickerStyles}
                useTimeBadges={useTimeBadges}
                classes={popupDatePickerClasses}
                anchor={splittedPeriod ? activeRef : anchor}
                clearAllAfterChangingStartDate={!splittedPeriod}
                pickNewSelectedAfterEndDatePick={!splittedPeriod}
                texts={restTexts}
            />
        </div>
    );
});
