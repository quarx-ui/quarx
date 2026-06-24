import { StoryFn } from '@storybook/react-vite';
import { Fragment, useState } from 'react';
import { OverScreen as KitOverScreen } from '@core';
import { StoryButton } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { StoryOverScreenProps, Block } from '../utils';

export const OverScreen: StoryFn<StoryOverScreenProps> = ({
    buttonText = 'Открыть',
    ...props
}) => {
    const [open, setOpen] = useState(false);
    return (
        <Fragment>
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
        </Fragment>
    );
};

setStoryParams(OverScreen, {
    title: 'Компонент',
});
