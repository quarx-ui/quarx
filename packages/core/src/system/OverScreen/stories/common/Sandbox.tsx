import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { OverScreen as KitOverScreen } from '@core';
import { StoryButton } from '@core/storybook/components';
import { Block, StoryOverScreenProps } from './components';

export const OverScreen: Story<StoryOverScreenProps> = ({
    buttonText = 'Открыть',
    ...props
}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <StoryButton
                onClick={() => setOpen(true)}
            >
                {buttonText}
            </StoryButton>
            <KitOverScreen
                open={open}
                onClose={() => setOpen(false)}
                {...props}
            >
                <Block>
                    <div>
                        Over Screen
                    </div>
                </Block>
            </KitOverScreen>
        </>
    );
};

export const Sandbox = OverScreen.bind({});
Sandbox.storyName = 'Компонент';
