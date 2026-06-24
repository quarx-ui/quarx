import { StoryFn } from '@storybook/react-vite';
import { DisplayBooleanVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { StoryOverScreenProps, commonDisplayProps, Grid } from '../utils';
import { OverScreen } from '../sandbox';
import booleanVariantsDescription from './description.md?raw';

export const BooleanVariantsStory: StoryFn<StoryOverScreenProps> = (props) => (
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

setStoryParams(BooleanVariantsStory, {
    title: 'Boolean параметры',
    description: booleanVariantsDescription,
    excludeArgs: [
        'disableBackdrop',
        'disableScrollLock',
        'disablePortal',
        'keepMounted',
        'disableCloseByClickAway',
        'disableCloseByEscape',
    ],
});
