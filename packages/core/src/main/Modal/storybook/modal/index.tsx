import { Story } from '@storybook/react/types-6-0';
import { Modal as KitModal, ModalProps } from '@core';
import { useState } from 'react';
import { StoryButton } from '@core/storybook/components';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const ModalStory: Story<ModalProps> = (props) => {
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
