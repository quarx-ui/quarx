import { useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import sizesDescription from '@core/components/main/Modal/storybook/sizes/description.md';
import { SidePage, SidePageProps } from '@core';
import { StoryButton } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
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

setStoryParams(SizesStory, {
    title: 'Размеры',
    description: sizesDescription,
    excludeArgs: ['size'],
});
