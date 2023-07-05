import { FC } from 'react';
import { Alert as AlertKit } from '@kit';
import { TestAlertProps } from '@e2e/src/main/Alert/types';

export const Alert: FC<TestAlertProps> = ({
    closeButton = true,
    primaryButton = true,
    secondaryButton = true,
    ...props
}) => (
    <AlertKit
        title="Title"
        description="Description"
        {...props}
        CloseButtonProps={{
            hidden: !closeButton,
        }}
        PrimaryButtonProps={{
            children: 'Primary',
            hidden: !primaryButton,
        }}
        SecondaryButtonProps={{
            children: 'Secondary',
            hidden: !secondaryButton,
        }}
    />
);
