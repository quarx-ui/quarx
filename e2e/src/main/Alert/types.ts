import { AlertProps } from '@kit';

export interface TestAlertProps extends AlertProps {
    closeButton?: boolean;
    primaryButton?: boolean;
    secondaryButton?: boolean;
}
