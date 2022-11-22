import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { OVER_SCREEN_APPEARANCE } from '@core';
import { excludeProp } from '@core/storybook/templateParams';
import { commonDisplayProps } from './props';
import { OverScreen } from './Sandbox';
import { appearanceDescription } from '../descriptions';
import { StoryOverScreenProps } from './components';

export const Appearances: Story<StoryOverScreenProps> = (props) => DisplayVariants({
    ...commonDisplayProps,
    component: OverScreen,
    property: 'appearance',
    values: Object.keys(OVER_SCREEN_APPEARANCE),
    componentProps: (_, value) => ({
        ...props,
        buttonText: value,
    } as StoryOverScreenProps),
});

Appearances.storyName = 'Типы появления';
Appearances.argTypes = excludeProp(['appearance']);
Appearances.parameters = {
    docs: {
        description: { story: appearanceDescription },
    },
};
