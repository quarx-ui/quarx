import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { excludeProp } from '@core/storybook/templateParams';
import sizesDescription from '@core/src/main/Modal/storybook/sizes/description.md';
import { SidePage, SidePageProps } from '@core';
import { StoryButton } from '@core/storybook/components';
import { createStoryDescription } from '@core/storybook/utils';
import { FlexRow } from '../utils';

export const SizesStory: Story<SidePageProps> = ({
    open: externalOpen,
    ...props
}) => {
    const [openSmall, setSmallOpen] = useState(false);
    const [openMedium, setMediumOpen] = useState(false);

    return (
        <FlexRow>
            <StoryButton onClick={() => setSmallOpen(true)}>
                small
            </StoryButton>
            <SidePage
                {...props}
                size="small"
                open={externalOpen || openSmall}
                onClose={() => setSmallOpen(false)}
            />
            <StoryButton onClick={() => setMediumOpen(true)}>
                medium
            </StoryButton>
            <SidePage
                {...props}
                size="medium"
                open={externalOpen || openMedium}
                onClose={() => setMediumOpen(false)}
            />
        </FlexRow>
    );
};

SizesStory.storyName = 'Размеры';
SizesStory.argTypes = excludeProp(['size']);
SizesStory.parameters = createStoryDescription(sizesDescription);
