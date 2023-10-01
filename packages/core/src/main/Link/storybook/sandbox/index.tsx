import { Story } from '@storybook/react/types-6-0';
import { Link, LinkSize, QX_SIZE } from '@core';
import { ReactChild } from 'react';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { ChevronRight16, ChevronRight24, Gear16, Gear24 } from '../assets';
import { defaultLinkArgs } from '../constants';
import { LinkStoryType } from '../types';

const sizeToLeftItem: Record<LinkSize, ReactChild> = {
    inherit: <Gear16 />,
    [QX_SIZE.xSmall]: <Gear16 />,
    [QX_SIZE.small]: <Gear16 />,
    [QX_SIZE.medium]: <Gear16 />,
    [QX_SIZE.large]: <Gear24 />,
    [QX_SIZE.xLarge]: <Gear24 />,
};

const sizeToRightItem: Record<LinkSize, ReactChild> = {
    inherit: <ChevronRight16 />,
    [QX_SIZE.xSmall]: <ChevronRight16 />,
    [QX_SIZE.small]: <ChevronRight16 />,
    [QX_SIZE.medium]: <ChevronRight16 />,
    [QX_SIZE.large]: <ChevronRight24 />,
    [QX_SIZE.xLarge]: <ChevronRight24 />,
};

export const SandboxStory: Story<LinkStoryType> = ({
    children,
    size = QX_SIZE.xLarge,
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

setStoryParams(SandboxStory, {
    title: 'Компонент',
    args: {
        ...defaultLinkArgs,
    },
});
