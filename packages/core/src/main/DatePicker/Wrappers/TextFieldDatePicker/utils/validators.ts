import { DatePickerProps } from '@core';

export interface ValidateJoinedDateProps {
    joinedInput: string;
    isPicker: boolean;
    withTime: DatePickerProps['withTime'];
}

export const validateJoinedDate = (props: ValidateJoinedDateProps) => props.joinedInput;
