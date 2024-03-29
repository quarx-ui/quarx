import { useState } from 'react';
import secondWindowDescription from '@core/components/main/Modal/storybook/secondModal/description.md';
import { Story } from '@storybook/react/types-6-0';
import { SidePageProps, SidePage } from '@core';
import { StoryButton } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const SecondSidePageStory: Story<SidePageProps> = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const [secondIsOpened, setSecondIsOpened] = useState(false);

    return (
        <div>
            <StoryButton onClick={() => setIsOpened(true)}>
                Открыть первое окно
            </StoryButton>
            <SidePage
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
            <SidePage
                open={secondIsOpened}
                onClose={() => setSecondIsOpened(false)}
                {...props}
                body={undefined}
            />
        </div>
    );
};

setStoryParams(SecondSidePageStory, {
    title: 'Одновременное открытие',
    description: secondWindowDescription,
});
