import { DatePickerProps } from '@core';
import { getFormatValue } from './format';

export interface ValidateJoinedDateProps {
    joinedInput: string;
    isSingleDate: boolean;
    withTime: DatePickerProps['withTime'];
}

interface DatePart {
    value: number;
    type: 'DAY' | 'MONTH' | 'YEAR' | 'HOUR' | 'MINUTE' | 'SECOND';
}

type PickerTypeAndWithTime = Pick<ValidateJoinedDateProps, 'withTime' | 'isSingleDate'>;

export const checkLimitValue = (value: number, lowLimit: number, highLimit: number) => {
    // console.log(value, lowLimit, highLimit);
    switch (true) {
        case (value > highLimit):
            return highLimit;
        case (value < lowLimit):
            return lowLimit;
        default:
            return value;
    }
};

const checkZeroPrefix = (value: number) => (value < 10 && value >= 0 ? `0${value}` : value.toString());

export const getValidHour = (hour: number) => checkZeroPrefix(checkLimitValue(hour, 0, 23));

export const getValidMinuteOrSecond = (minuteOrSecond: number) => checkZeroPrefix(checkLimitValue(minuteOrSecond, 0, 59));

export const getValidDay = (day: number) => checkZeroPrefix(checkLimitValue(day, 1, 31));
export const getValidMonth = (month: number) => checkZeroPrefix(checkLimitValue(month, 1, 12));

const mapFormatToFormatCells = ({ isSingleDate, withTime }: PickerTypeAndWithTime) => getFormatValue(isSingleDate, withTime).split(/[^#]/).filter(Boolean);
const mapFormatCellsToSplittingRegExp = (formatCells: string[], joinedInput: string): RegExp => {
    const regExp = new RegExp(formatCells.reduce((acc, item) => {
        const lengthOfPreviousParts = acc.replace(/[^0-9]/g, '')
            .split('').filter(Boolean).reduce((sum, a) => sum + +a, 0);
        // console.log(joinedInput.length, lengthOfPreviousParts);
        if (joinedInput.length > lengthOfPreviousParts && (joinedInput.length >= 2)) {
            return `${acc}(.{${item.length}})`;
        }
        return acc;
    }, ''));
    return regExp;
};

const splitJoinedInputOnParts = (joinedInput: string, regExp: RegExp) => joinedInput.match(regExp)?.splice(1);

const mapJoinedInputToDateTimeStringParts = (
    joinedInput: string, { isSingleDate, withTime }: PickerTypeAndWithTime,
) => {
    const formatCells = mapFormatToFormatCells({ isSingleDate, withTime });
    // console.log(lengthEachBlockOfDate);
    const regExpForSplit = mapFormatCellsToSplittingRegExp(formatCells, joinedInput);
    // console.log(regExpForSplit);
    return splitJoinedInputOnParts(joinedInput, regExpForSplit);
};

const mapDateTimeStringPartsToDateParts = (
    dateTimeStringParts: string[],
    withTime: PickerTypeAndWithTime['withTime'],
) => dateTimeStringParts.reduce<DatePart[]>((acc, item, index) => {
    const type: DatePart['type'] = (() => {
        const prevElemType = acc?.[index - 1]?.type;
        switch (prevElemType) {
            case 'DAY':
                return 'MONTH';
            case 'MONTH':
                return 'YEAR';
            case 'YEAR':
                return withTime ? 'HOUR' : 'DAY';
            case 'HOUR':
                return 'MINUTE';
            case 'MINUTE':
            default:
                return 'DAY';
        }
    })();
    return [...acc, { value: +item, type }];
}, []);

const mapDatePartsToValidString = (dateParts: DatePart[]) => dateParts.reduce((acc, item) => {
    switch (item.type) {
        case ('DAY'):
            return `${acc}${getValidDay(item.value)}`;
        case ('MONTH'):
            return `${acc}${getValidMonth(item.value)}`;
        case ('HOUR'):
            return `${acc}${getValidHour(item.value)}`;
        case ('MINUTE'):
        case ('SECOND'):
            return `${acc}${getValidMinuteOrSecond(item.value)}`;
        case ('YEAR'):
            return `${acc}${item.value}`;
        default:
            return acc;
    }
}, '');

const joinValidInputPartWithInvalidInputSymbols = (validInputPart: string, joinedInput: string) => (
    validInputPart.length < joinedInput.length
        ? `${validInputPart}${joinedInput.substring(validInputPart.length)}` : validInputPart);

export const validateDateOnInput = (props: ValidateJoinedDateProps) => {
    const { isSingleDate, withTime, joinedInput } = props;
    const dateTimeStringParts = mapJoinedInputToDateTimeStringParts(joinedInput, { isSingleDate, withTime });
    if (dateTimeStringParts) {
        const dateParts: DatePart[] = mapDateTimeStringPartsToDateParts(dateTimeStringParts, withTime);
        const validDateParts = mapDatePartsToValidString(dateParts);
        return joinValidInputPartWithInvalidInputSymbols(validDateParts, joinedInput);
    }
    return joinedInput;
};
