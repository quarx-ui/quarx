import { StoryFn } from '@storybook/react-vite';
import { Modal as KitModal, ModalProps } from '@core';
import { useState } from 'react';
import { StoryButton } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const ModalStory: StoryFn<ModalProps> = (props) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div>
            <StoryButton
                onClick={() => setIsOpened(true)}
            >
                Открыть
            </StoryButton>
            <KitModal
                open={isOpened}
                onClose={() => setIsOpened(false)}
                {...props}
            />
        </div>
    );
};

setStoryParams(ModalStory, {
    title: 'Компонент',
});
