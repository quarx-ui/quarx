import { useState } from 'react';
import directionDescription from '@core/components/main/Modal/storybook/footerDirection/description.md';
import { Story } from '@storybook/react/types-6-0';
import { SidePage, SidePageProps } from '@core';
import { StoryButton } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
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

setStoryParams(FooterDirectionStory, {
    title: 'Расположение кнопок',
    excludeArgs: ['footerDirection'],
    description: directionDescription,
});
