import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { OVER_SCREEN_PLACEMENT } from '@core';
import { excludeProp } from '@core/storybook/templateParams';
import { StoryOverScreenProps } from './components';
import { commonDisplayProps } from './props';
import { OverScreen } from './Sandbox';
import { marginDescription } from '../descriptions';

export const Margin: Story<StoryOverScreenProps> = (props) => DisplayVariants({
    ...commonDisplayProps,
    component: OverScreen,
    property: 'margin',
    values: [0, '70, 10', 70],
    componentProps: (_, value) => ({
        ...props,
        placement: OVER_SCREEN_PLACEMENT['top-start'],
        buttonText: value,
    } as StoryOverScreenProps),
});

Margin.storyName = 'Отступы';
Margin.argTypes = excludeProp(['margin']);
Margin.parameters = {
    docs: {
        description: { story: marginDescription },
    },
};
