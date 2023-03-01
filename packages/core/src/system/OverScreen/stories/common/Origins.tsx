import { Story } from '@storybook/react/types-6-0';
import { OVER_SCREEN_APPEARANCE, OVER_SCREEN_ORIGIN, OverScreenProps } from '@core';
import { DisplayVariants, DisplayVariantsProps } from '@core/storybook/DisplayVariants/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { commonDisplayProps } from './props';
import { OverScreen } from './Sandbox';
import { Grid, StoryOverScreenProps } from './components';
import { originDescription } from '../descriptions';

export const Origins: Story<OverScreenProps> = (props) => {
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

Origins.storyName = 'Исходное положение';
Origins.argTypes = excludeProp(['origin', 'slide']);
Origins.parameters = {
    docs: {
        description: { story: originDescription },
    },
};
