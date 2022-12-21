import { Story } from '@storybook/react/types-6-0';
import { DisplayBooleanVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { Grid, StoryOverScreenProps } from './components';
import { commonDisplayProps } from './props';
import { OverScreen } from './Sandbox';
import { booleanVariantsDescription } from '../descriptions';

export const BooleanVariants: Story<StoryOverScreenProps> = (props) => (
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

BooleanVariants.storyName = 'Boolean параметры';
BooleanVariants.argTypes = excludeProp([
    'disableBackdrop', 'disableScrollLock', 'disablePortal',
    'keepMounted',
    'disableCloseByClickAway', 'disableCloseByEscape',
]);
BooleanVariants.parameters = {
    docs: {
        description: { story: booleanVariantsDescription },
    },
};
