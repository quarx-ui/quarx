import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { StoryOverScreenProps } from './components';
import { commonDisplayProps } from './props';
import { OverScreen } from './Sandbox';
import { offsetDescription } from '../descriptions';

export const Offset: Story<StoryOverScreenProps> = (props) => DisplayVariants({
    ...commonDisplayProps,
    component: OverScreen,
    property: 'offset',
    values: [70, '70, 0', '70, -70'],
    componentProps: (_, value) => ({
        ...props,
        buttonText: value,
    } as StoryOverScreenProps),
});

Offset.storyName = 'Смещение';
Offset.argTypes = excludeProp(['offset']);
Offset.parameters = {
    docs: {
        description: { story: offsetDescription },
    },
};
