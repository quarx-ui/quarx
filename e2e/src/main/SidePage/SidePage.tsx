import React, { FC } from 'react';
import { SidePage as KitSidePage } from '@kit';
import { TestSidePageProps } from './types';

export const SidePage: FC<TestSidePageProps> = ({ disableBackdrop, ...props }) => (
    <KitSidePage
        open
        title="Title"
        subTitle="SubTitle"
        body="Body"
        OverScreenProps={{
            disableBackdrop,
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
