import { ReactElement } from 'react';
import { Chips, ChipsProps, ChipsSize, QX_SIZE } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { EnvelopeIcon as EnvelopeIconSmallSize } from '@quarx-ui/icons/src/envelope/16px/stroke/rounded';
import { EnvelopeIcon as EnvelopeIconMediumSize } from '@quarx-ui/icons/src/envelope/24px/stroke/rounded';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const EnvelopeIcon: Record<ChipsSize, ReactElement> = {
    small: <EnvelopeIconSmallSize />,
    medium: <EnvelopeIconMediumSize />,
};

export const SandboxStory: Story<ChipsProps> = ({
    size,
    ...props
}) => (
    <Chips
        {...props}
        size={size}
        leftIcon={props.leftIcon ?? EnvelopeIcon[size ?? QX_SIZE.medium]}
    />
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
