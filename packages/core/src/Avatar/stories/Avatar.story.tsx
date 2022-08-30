import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { Avatar } from '../Avatar';
import { AvatarProps } from '../types';

export default {
    title: 'core/Avatar',
    component: Avatar,
    parameters: {
        actions: { disable: true },
    },
};

export const Sandbox: Story<AvatarProps> = ({
    children,
    ...props
}) => (
    <Avatar
        {...props}
    >
        {children}
    </Avatar>
);
