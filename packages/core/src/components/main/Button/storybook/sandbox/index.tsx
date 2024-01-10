import { Story } from '@storybook/react/types-6-0';
import { Button, ButtonProps, IconButton, IconButtonProps } from '@core';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { ChevronDownIcon, PaperClipIcon, SmallPaperClipIcon } from '../assets';

interface StoryButtonProps extends ButtonProps {
    leftIconShown: boolean;
    rightIconShown: boolean;
}

export const SandboxStory: Story<StoryButtonProps> = ({
    leftIcon,
    rightIcon,
    leftIconShown = true,
    rightIconShown = true,
    ...args
}) => (
    <div style={{
        display: 'flex',
        flexDirection: 'column',
    }}
    >
        <div style={{
            display: 'flex',
            marginBottom: 10,
        }}
        >
            <IconButton {...args as IconButtonProps}>
                {
                    args.size === 'xSmall'
                        ? <SmallPaperClipIcon />
                        : <PaperClipIcon />
                }
            </IconButton>
        </div>
        <div style={{ display: 'flex' }}>
            <Button
                {...args}
                leftIcon={leftIconShown ? leftIcon : undefined}
                rightIcon={rightIconShown ? rightIcon : undefined}
            />
        </div>
    </div>
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
    args: {
        buttonType: 'button',
        children: 'Перейти',
        size: 'medium',
        borderRadius: 'medium',
        disabled: false,
        loading: false,
        color: 'brand',
        type: 'contained',
        leftIcon: <PaperClipIcon />,
        rightIcon: <ChevronDownIcon />,
        leftIconShown: true,
        rightIconShown: true,
    },
});
