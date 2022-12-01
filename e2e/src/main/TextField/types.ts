import { TestComponentProps } from '@e2e/constants';
import { TextFieldProps } from '@kit';

export type TestTextFieldProps = TestComponentProps<TextFieldProps, {
    leftItem?: boolean;
    rightItem?: boolean;
}>
