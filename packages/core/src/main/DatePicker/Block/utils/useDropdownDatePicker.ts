import { Dispatch, RefObject, SetStateAction, useRef, useState } from 'react';
import { Locale } from 'date-fns';
import { DROPDOWN_TYPES, DropdownDatePickerTypes } from '..';
import { getMonthNamesByLocale, INITIAL_MONTHS, YEARS } from '.';

export type DropdownItemDatePicker = string | number

export interface DropdownDatePickerHookType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    ref: RefObject<HTMLDivElement>;
    content: DropdownItemDatePicker[];
}

interface ParseItemsData {
    locale?: Locale;
    content?: DropdownItemDatePicker[];
}

export const useDropdownDatePicker = (
    type: DropdownDatePickerTypes,
    parseObj: ParseItemsData,
) => {
    const { content: externalContent, locale } = parseObj;
    const [isOpen, setIsOpen] = useState(false);
    const content = type === DROPDOWN_TYPES.YEARS ? externalContent || YEARS
        : type && DROPDOWN_TYPES.MONTHS && (externalContent || getMonthNamesByLocale(locale) || INITIAL_MONTHS());
    const ref = useRef<HTMLDivElement>(null);
    return {
        isOpen,
        setIsOpen,
        ref,
        content,
    };
};
