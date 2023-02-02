import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import { StoryOverScreenProps, commonDisplayProps } from '../utils';
import { OverScreen } from '../sandbox';
import offsetDescription from './description.md';

export const OffsetStory: Story<StoryOverScreenProps> = (props) => DisplayVariants({
    ...commonDisplayProps,
    component: OverScreen,
    property: 'offset',
    values: [70, '70, 0', '70, -70'],
    componentProps: (_, value) => ({
        ...props,
        buttonText: value,
    } as StoryOverScreenProps),
});

OffsetStory.storyName = 'Смещение';
OffsetStory.argTypes = excludeProp(['offset']);
OffsetStory.parameters = createStoryDescription(offsetDescription);
