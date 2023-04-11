import { Story } from '@storybook/react/types-6-0';
import { OVER_SCREEN_PLACEMENT, OverScreenProps } from '@core';
import { DisplayVariants, DisplayVariantsProps } from '@core/storybook/DisplayVariants/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import { StoryOverScreenProps, commonDisplayProps, Grid } from '../utils';
import { OverScreen } from '../sandbox';
import { placementDescription } from './description.md';

export const PlacementsStory: Story<OverScreenProps> = (props) => {
    const variantProps = {
        ...commonDisplayProps,
        component: OverScreen,
        property: 'placement',
        containerJustify: 'space-between',
        componentProps: (_, value) => ({
            ...props,
            buttonText: value,
        } as StoryOverScreenProps),
    } as DisplayVariantsProps<StoryOverScreenProps>;

    return (
        <Grid>
            {DisplayVariants({
                ...variantProps,
                values: [
                    OVER_SCREEN_PLACEMENT['top-start'],
                    OVER_SCREEN_PLACEMENT.top,
                    OVER_SCREEN_PLACEMENT['top-end'],
                ],
            })}
            {DisplayVariants({
                ...variantProps,
                values: [OVER_SCREEN_PLACEMENT.left, OVER_SCREEN_PLACEMENT.center, OVER_SCREEN_PLACEMENT.right],
            })}
            {DisplayVariants({
                ...variantProps,
                values: [
                    OVER_SCREEN_PLACEMENT['bottom-start'],
                    OVER_SCREEN_PLACEMENT.bottom,
                    OVER_SCREEN_PLACEMENT['bottom-end'],
                ],
            })}
        </Grid>
    );
};

PlacementsStory.storyName = 'Расположение';
PlacementsStory.argTypes = excludeProp(['placement']);
PlacementsStory.parameters = createStoryDescription(placementDescription);
