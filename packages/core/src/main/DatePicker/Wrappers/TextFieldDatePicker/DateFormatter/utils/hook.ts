import { MouseEventHandler, Ref, RefObject, useCallback, useMemo, useState } from 'react';
import { DatePickerProps, useEnhancedEffect, useEventCallback } from '@core';
import { getMask } from '@core/src/main/DatePicker/Wrappers/TextFieldDatePicker/utils';
import {
    DATE_SEPARATORS_REGEXP,
} from '@core/src/main/DatePicker/Wrappers/TextFieldDatePicker/DateFormatter/utils/constants';

const DATE_SECTION_INTERVAL = [2, 2, 4];
const DATE_SECTION_INTERVAL_WITH_TIME = [2, 2, 4, 2, 2];

export interface UseSelectionManagerProps extends Pick<DatePickerProps, 'withTime'>{
    isPicker: boolean;
    inputRef: RefObject<HTMLInputElement>;
    customDateSeparatorRegExp: RegExp; // todo вынести в общие пропсы
}

export interface Interval {
    start: number;
    end: number;
}

type UseSelectionIntervalsProps = Pick<UseSelectionManagerProps, 'isPicker' | 'withTime' | 'customDateSeparatorRegExp'>
const useSelectionIntervals = (props: UseSelectionIntervalsProps) => {
    const { withTime, isPicker } = props;
    const mask = useMemo(() => getMask(isPicker, withTime), [isPicker, withTime]);
    const untouchablePositions = useMemo(() => mask.reduce<number[]>((acc, item, position) => {
        if (item.match(DATE_SEPARATORS_REGEXP)) {
            return [...acc, position];
        }
        return acc;
    }, []), [mask]);
    const intervals = useMemo(() => untouchablePositions.reduce<Interval[]>((acc, item, index) => {
        // const untouchablePositionLast = untouchablePositions.length - 1;
        const lengthInput = mask.length - 1;
        if (untouchablePositions.length - 1 === index && lengthInput !== item) {
            return [...acc, { start: item + 1, end: lengthInput }];
        }
        const nextUntouchableSymbolPosition = untouchablePositions[index + 1];
        const isNextSymbolIsUntouchable = nextUntouchableSymbolPosition === item + 1;
        if (isNextSymbolIsUntouchable) {
            return acc;
        }
        switch (true) {
            case (!acc.length && item === 0):
                return [{ start: item + 1, end: nextUntouchableSymbolPosition - 1 }];
            case (!acc.length && item !== 0):
                return [{ start: 0, end: item - 1 }, { start: item + 1, end: nextUntouchableSymbolPosition - 1 }];
            default:
                return [...acc, { start: item + 1, end: nextUntouchableSymbolPosition - 1 }];
        }
    }, []), [mask.length, untouchablePositions]);

    const getSectionByIndex = useCallback((index: number) => intervals.find(({ start, end }) => index >= start && index <= end), [intervals]);

    return { intervals, untouchablePositions, getSectionByIndex };
};

export const useSelectionManager = (props: UseSelectionManagerProps) => {
    const { withTime, isPicker, inputRef, customDateSeparatorRegExp } = props;
    const [currentSelectionInterval, setCurrentSelectionInterval] = useState<Interval | undefined>(undefined);
    const { intervals, untouchablePositions, getSectionByIndex } = useSelectionIntervals({ withTime, isPicker, customDateSeparatorRegExp });
    const syncSelectionFromDOM = () => {
        console.log(inputRef);
        const browserStartIndex = inputRef.current?.selectionStart ?? 0;

        console.log(browserStartIndex, 'index');

        // const nextSectionIndex = browserStartIndex <= state.sections[0].startInInput
        //     ? 1 // Special case if browser index is in invisible characters at the beginning.
        //     : state.sections.findIndex(
        //         (section) => section.startInInput - section.startSeparator.length > browserStartIndex,
        //     );
        // const sectionIndex = nextSectionIndex === -1 ? state.sections.length - 1 : nextSectionIndex - 1;

        setCurrentSelectionInterval(getSectionByIndex(browserStartIndex));
    };

    const onClick: MouseEventHandler = (e) => {
        console.log(e, 'mouse click');
        syncSelectionFromDOM();
    };

    const onMouseUp: MouseEventHandler<HTMLInputElement> = useEventCallback((event) => {
        // todo добавить прокидывание экшнов
        console.log('preventDefault');
        // Without this, the browser will remove the selected when clicking inside an already-selected section.
        event.preventDefault();
    });

    useEnhancedEffect(() => {
        if (currentSelectionInterval == null) {
            console.log('currentInterval is null');
            if (inputRef.current!.scrollLeft) {
                // Ensure that input content is not marked as selected.
                // setting selection range to 0 causes issues in Safari.
                // https://bugs.webkit.org/show_bug.cgi?id=224425
                inputRef.current!.scrollLeft = 0;
            }
            return;
        }

        // const firstSelectedSection = state.sections[selectedSectionIndexes.startIndex];
        // const lastSelectedSection = state.sections[selectedSectionIndexes.endIndex];
        // const selectionStart = firstSelectedSection.startInInput;
        // const selectionEnd = lastSelectedSection.endInInput;

        // if (selectedSectionIndexes.shouldSelectBoundarySelectors) {
        //     selectionStart -= firstSelectedSection.startSeparator.length;
        //     selectionEnd += lastSelectedSection.endSeparator.length;
        // }

        console.log(inputRef.current!.selectionStart, 'selectionStart');

        if (
            currentSelectionInterval.start !== inputRef.current!.selectionStart
            || currentSelectionInterval.end !== inputRef.current!.selectionEnd
        ) {
            // Fix scroll jumping on iOS browser: https://github.com/mui/mui-x/issues/8321
            const currentScrollTop = inputRef.current!.scrollTop;
            inputRef.current!.setSelectionRange(currentSelectionInterval.start, currentSelectionInterval.end);
            // Even reading this variable seems to do the trick, but also setting it just to make use of it
            inputRef.current!.scrollTop = currentScrollTop;
        }
    });

    return {
        onClick,
        onMouseUp,
    };
};
