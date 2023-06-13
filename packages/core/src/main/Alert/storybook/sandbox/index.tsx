import { Story } from '@storybook/react/types-6-0';
import { Alert as AlertKit } from '@core';
import { StoryAlertProps } from '@core/src/main/Alert/storybook/types';

export const SandboxStory: Story<StoryAlertProps> = ({
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
