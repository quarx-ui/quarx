import { Story } from '@storybook/react/types-6-0';
import { Modal as KitModal, ModalProps } from '@core';
import { useState } from 'react';
import { StoryButton } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import description from './description.md';

export const SecondModalStory: Story<ModalProps> = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const [secondIsOpened, setSecondIsOpened] = useState(false);

    return (
        <div>
            <StoryButton
                onClick={() => setIsOpened(true)}
            >
                Открыть первое окно
            </StoryButton>
            <KitModal
                open={isOpened}
                onClose={() => setIsOpened(false)}
                {...props}
                footerButtons={{
                    success: {
                        children: 'Открыть второе окно',
                        onClick: () => setSecondIsOpened(true),
                    },
                }}
            />
            <KitModal
                open={secondIsOpened}
                onClose={() => setSecondIsOpened(false)}
                {...props}
            >
                {undefined}
            </KitModal>
        </div>
    );
};

setStoryParams(SecondModalStory, {
    title: 'Второе окно',
    description,
});
