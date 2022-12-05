import { Story } from '@storybook/react/types-6-0';
import React, { useState } from 'react';
import { OverScreen as KitOverScreen } from '@core';
import { Block, CommonButton, StoryOverScreenProps } from './components';

export const OverScreen: Story<StoryOverScreenProps> = ({
    buttonText = 'Открыть',
    ...props
}) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <CommonButton
                onClick={() => setOpen(true)}
            >
                {buttonText}
            </CommonButton>
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
