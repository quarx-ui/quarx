import { Story } from '@storybook/react/types-6-0';
import { Link, LinkSize } from '@core';
import { ReactChild } from 'react';
import { ChevronRight16, ChevronRight24, Gear16, Gear24 } from '../assets';
import { defaultLinkArgs } from '../constants';
import { LinkStoryType } from '../types';

const sizeToLeftItem: Record<LinkSize, ReactChild> = {
    inherit: <Gear16 />,
    S: <Gear16 />,
    M: <Gear16 />,
    L: <Gear24 />,
    XL: <Gear24 />,
};

const sizeToRightItem: Record<LinkSize, ReactChild> = {
    inherit: <ChevronRight16 />,
    S: <ChevronRight16 />,
    M: <ChevronRight16 />,
    L: <ChevronRight24 />,
    XL: <ChevronRight24 />,
};

export const SandboxStory: Story<LinkStoryType> = ({
    children,
    size = 'XL',
    color,
    underline,
    disabled,
    showLeftItem,
    showRightItem,
}) => (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
        underline={underline}
        size={size}
        color={color}
        disabled={disabled}
        leftItem={showLeftItem ? sizeToLeftItem[size] : undefined}
        rightItem={showRightItem ? sizeToRightItem[size] : undefined}
    >
        {children}
    </Link>
);

SandboxStory.storyName = 'Компонент';
SandboxStory.args = {
    ...defaultLinkArgs,
    showLeftItem: true,
    showRightItem: true,
};
