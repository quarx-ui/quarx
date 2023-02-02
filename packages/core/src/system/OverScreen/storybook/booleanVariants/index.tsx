import { Story } from '@storybook/react/types-6-0';
import { DisplayBooleanVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { createStoryDescription } from '@core/storybook/utils';
import { StoryOverScreenProps, commonDisplayProps, Grid } from '../utils';
import { OverScreen } from '../sandbox';
import booleanVariantsDescription from './description.md';

export const BooleanVariantsStory: Story<StoryOverScreenProps> = (props) => (
    <Grid>
        {DisplayBooleanVariants({
            ...commonDisplayProps,
            component: OverScreen,
            properties: [
                'disableBackdrop',
                'disableScrollLock',
                'disablePortal',
            ],
            shownTitle: false,
            componentProps: (property) => ({
                ...props,
                buttonText: property,
            } as StoryOverScreenProps),
        })}
        {DisplayBooleanVariants({
            ...commonDisplayProps,
            component: OverScreen,
            properties: [
                'keepMounted',
                ['disableCloseByClickAway', false],
                ['disableCloseByEscape', false],
            ],
            shownTitle: false,
            componentProps: (property) => ({
                ...props,
                buttonText: property,
            } as StoryOverScreenProps),
        })}
    </Grid>
);

BooleanVariantsStory.storyName = 'Boolean параметры';
BooleanVariantsStory.parameters = createStoryDescription(booleanVariantsDescription);
BooleanVariantsStory.argTypes = excludeProp([
    'disableBackdrop',
    'disableScrollLock',
    'disablePortal',
    'keepMounted',
    'disableCloseByClickAway',
    'disableCloseByEscape',
]);
