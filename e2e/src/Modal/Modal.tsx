import React, { FC } from 'react';
import { ModalProps, Modal as KitModal } from '@kit';

export const Modal: FC<ModalProps> = (props) => (
    <KitModal
        open
        title="Title"
        subTitle="SubTitle"
        body="Body"
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
