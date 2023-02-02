import { useState } from 'react';
import { excludeProp } from '@core/storybook/templateParams';
import directionDescription from '@core/src/main/Modal/storybook/footerDirection/description.md';
import { Story } from '@storybook/react/types-6-0';
import { SidePage, SidePageProps } from '@core';
import { StoryButton } from '@core/storybook/components';
import { createStoryDescription } from '@core/storybook/utils';
import { FlexRow } from '../utils';

export const FooterDirectionStory: Story<SidePageProps> = ({
    open: externalOpen,
    ...props
}) => {
    const [openHorizontal, setHorizontalOpen] = useState(false);
    const [openVertical, setVerticalOpen] = useState(false);

    return (
        <FlexRow>
            <StoryButton onClick={() => setHorizontalOpen(true)}>
                horizontal
            </StoryButton>
            <SidePage
                {...props}
                footerDirection="horizontal"
                open={externalOpen || openHorizontal}
                onClose={() => setHorizontalOpen(false)}
            />
            <StoryButton onClick={() => setVerticalOpen(true)}>
                vertical
            </StoryButton>
            <SidePage
                {...props}
                footerDirection="vertical"
                open={externalOpen || openVertical}
                onClose={() => setVerticalOpen(false)}
            />
        </FlexRow>
    );
};

FooterDirectionStory.storyName = 'Расположение кнопок';
FooterDirectionStory.argTypes = excludeProp(['footerDirection']);
FooterDirectionStory.parameters = createStoryDescription(directionDescription);
