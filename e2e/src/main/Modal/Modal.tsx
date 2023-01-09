import { FC } from 'react';
import { Modal as KitModal } from '@kit';
import { TestModalProps } from './types';

export const Modal: FC<TestModalProps> = ({ disableBackdrop, ...props }) => (
    <KitModal
        open
        title="Title"
        subTitle="SubTitle"
        body="Body"
        OverScreenProps={{
            disableBackdrop,
            disablePortal: true,
        }}
        footerButtons={{
            success: {
                children: 'Success',
            },
            secondary: {
                children: 'Secondary',
            },
            danger: {
                children: 'Danger',
            },
        }}
        {...props}
    />
);
