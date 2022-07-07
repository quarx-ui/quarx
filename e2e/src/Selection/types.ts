import { SelectionProps } from '@kit';

export interface TestSelectionProps extends Omit<SelectionProps, 'rightAdornment'> {
    hasError?: boolean,
    rightAdornment?: boolean,
}
