import { Story } from '@storybook/react/types-6-0';
import { OVER_SCREEN_APPEARANCE, OVER_SCREEN_ORIGIN, OverScreenProps } from '@core';
import { DisplayVariants, DisplayVariantsProps } from '@core/storybook/DisplayVariants/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import { StoryOverScreenProps, commonDisplayProps, Grid } from '../utils';
import { OverScreen } from '../sandbox';
import originDescription from './description.md';

export const OriginsStory: Story<OverScreenProps> = (props) => {
    const variantProps = {
        ...commonDisplayProps,
        property: 'origin',
        component: OverScreen,
        componentProps: (_, value) => ({
            ...props,
            appearance: OVER_SCREEN_APPEARANCE.slide,
            buttonText: value,
        } as StoryOverScreenProps),
    } as DisplayVariantsProps<StoryOverScreenProps>;

    return (
        <Grid>
            {DisplayVariants({
                ...variantProps,
                values: [OVER_SCREEN_ORIGIN.top],
            })}
            {DisplayVariants({
                ...variantProps,
                values: [OVER_SCREEN_ORIGIN.left, OVER_SCREEN_ORIGIN.right],
            })}
            {DisplayVariants({
                ...variantProps,
                values: [OVER_SCREEN_ORIGIN.bottom],
            })}
        </Grid>
    );
};

OriginsStory.storyName = 'Исходное положение';
OriginsStory.argTypes = excludeProp(['origin', 'slide']);
OriginsStory.parameters = createStoryDescription(originDescription);
