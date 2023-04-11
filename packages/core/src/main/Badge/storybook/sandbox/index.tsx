import { Story } from '@storybook/react/types-6-0';
import { Badge } from '@core';
import {
    AttentionIconLarge,
    AttentionIconSmall,
    InfoIconLarge,
    InfoIconSmall,
} from '@core/src/main/Badge/storybook/assets';
import { StoryType } from '../types';

export const SandboxStory: Story<StoryType> = ({
    children,
    size = 'small',
    leftItemShown = true,
    rightItemShown = true,
    counterShown = true,
    counter,
    ...args
}) => (
    <Badge
        {...args}
        size={size}
        leftItem={size === 'small' ? leftItemShown && <InfoIconSmall /> : leftItemShown && <InfoIconLarge />}
        rightItem={size === 'small'
            ? rightItemShown && <AttentionIconSmall />
            : rightItemShown && <AttentionIconLarge />}
        counter={counterShown ? counter : undefined}
    >
        {children}
    </Badge>
);

SandboxStory.storyName = 'Компонент';
SandboxStory.args = {
    leftItemShown: true,
    rightItemShown: true,
    counterShown: true,
};
