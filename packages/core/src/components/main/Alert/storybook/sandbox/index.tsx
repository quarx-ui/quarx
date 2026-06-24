import { StoryFn } from '@storybook/react-vite';
import { Alert as AlertKit } from '@core';
import { StoryAlertProps } from '@core/components/main/Alert/storybook/types';

export const SandboxStory: StoryFn<StoryAlertProps> = ({
    descriptionShown = true,
    actionButtonsShown = true,
    closeButtonShown = true,
    description,
    ...props
}) => (
    <AlertKit
        description={descriptionShown ? description : undefined}
        ActionButtonsProps={{
            hidden: actionButtonsShown ? undefined : true,
        }}
        CloseButtonProps={{
            hidden: !closeButtonShown,
        }}
        {...props}
    />
);

SandboxStory.storyName = 'Компонент';
