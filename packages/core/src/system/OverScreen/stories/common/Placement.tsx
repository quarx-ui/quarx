import { Story } from '@storybook/react/types-6-0';
import { OVER_SCREEN_PLACEMENT, OverScreenProps } from '@core';
import { DisplayVariants, DisplayVariantsProps } from '@core/storybook/DisplayVariants/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { commonDisplayProps } from './props';
import { OverScreen } from './Sandbox';
import { Grid, StoryOverScreenProps } from './components';
import { placementDescription } from '../descriptions';

export const Placements: Story<OverScreenProps> = (props) => {
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
                values: [OVER_SCREEN_PLACEMENT['top-start'], OVER_SCREEN_PLACEMENT.top, OVER_SCREEN_PLACEMENT['top-end']],
            })}
            {DisplayVariants({
                ...variantProps,
                values: [OVER_SCREEN_PLACEMENT.left, OVER_SCREEN_PLACEMENT.center, OVER_SCREEN_PLACEMENT.right],
            })}
            {DisplayVariants({
                ...variantProps,
                values: [OVER_SCREEN_PLACEMENT['bottom-start'], OVER_SCREEN_PLACEMENT.bottom, OVER_SCREEN_PLACEMENT['bottom-end']],
            })}
        </Grid>
    );
};

Placements.storyName = 'Расположение';
Placements.argTypes = excludeProp(['placement']);
Placements.parameters = {
    docs: {
        description: { story: placementDescription },
    },
};
