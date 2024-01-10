import {
    DATE_PICKER_DISPLAY_TYPES,
    DatePickerBlockProps, EDITABLE_PERIOD_PARTS,
    EditablePeriodParts, PERIOD_CHANGING_FLOW,
    PeriodChangingFlow,
    SelectedDates,
} from '@core/components/experimental';
import { useCallback, useEffect, useState } from 'react';
import { isPeriod } from '../types';

export const useEditablePeriodPartManager = <D extends SelectedDates>(
    props: Pick<DatePickerBlockProps<D>,
    'editablePartOfPeriod' | 'onChangeEditablePartOfPeriod' | 'periodChangingFlow' | 'useTimeBadges'
    | 'selected' | 'display'>,
) => {
    const {
        editablePartOfPeriod: externalEditablePartOfPeriod,
        onChangeEditablePartOfPeriod: onChangeExternalEditablePartOfPeriod,
        periodChangingFlow: externalPeriodChangingFlow,
        useTimeBadges,
        display,
        selected,
    } = props;

    const getPartByProps = useCallback((): EditablePeriodParts => {
        if (externalEditablePartOfPeriod) {
            return externalEditablePartOfPeriod;
        }

        if (isPeriod(selected)) {
            switch (true) {
                case selected.start && !selected.end:
                    return EDITABLE_PERIOD_PARTS.END;
                default:
                    return EDITABLE_PERIOD_PARTS.START;
            }
        }

        return EDITABLE_PERIOD_PARTS.START;
    }, [externalEditablePartOfPeriod, selected]);

    const getInitialFlowByProps = (): PeriodChangingFlow => {
        if (externalPeriodChangingFlow) {
            return externalPeriodChangingFlow;
        }
        switch (true) {
            case useTimeBadges && display !== DATE_PICKER_DISPLAY_TYPES.DOUBLE:
                return PERIOD_CHANGING_FLOW.AFTER_TIME_BADGE;
            default:
                return PERIOD_CHANGING_FLOW.AFTER_DAY;
        }
    };

    const [editablePartOfPeriod, setEditablePartOfPeriod] = useState<EditablePeriodParts>(getPartByProps());

    const onChangeEditablePartOfPeriod = (newValue: EditablePeriodParts) => {
        setEditablePartOfPeriod(newValue);
        onChangeExternalEditablePartOfPeriod?.(newValue);
    };

    useEffect(() => {
        if (editablePartOfPeriod !== getPartByProps()) {
            setEditablePartOfPeriod(getPartByProps());
        }
    }, [editablePartOfPeriod, getPartByProps]);

    return { editablePartOfPeriod, onChangeEditablePartOfPeriod, periodChangingFlow: getInitialFlowByProps() };
};
