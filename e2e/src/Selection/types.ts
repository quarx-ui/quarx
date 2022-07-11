import { SelectionProps } from '@kit';
import { TestComponentProps } from '@e2e/constants';

export type TestSelectionProps = TestComponentProps<SelectionProps, {
    hasError?: boolean,
    rightAdornment?: boolean,
}>
