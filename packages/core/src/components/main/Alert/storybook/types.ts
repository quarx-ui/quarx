import { AlertProps } from '@core';

export interface StoryAlertProps extends AlertProps {
    descriptionShown: boolean;
    actionButtonsShown: boolean;
    closeButtonShown: boolean;
}
