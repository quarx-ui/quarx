import { Story } from '@storybook/react/types-6-0';
import { Modal as KitModal, ModalProps } from '@core';
import { useState } from 'react';
import { StoryButton } from '@core/storybook/components';
import { createStoryDescription } from '@core/storybook/utils';
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
                body={undefined}
            />
        </div>
    );
};

SecondModalStory.storyName = 'Второе окно';
SecondModalStory.parameters = createStoryDescription(description);
