import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { excludeProp } from '@core/storybook/templateParams';
import { Title } from '@core/storybook/DisplayVariants/styledComponents';
import { createStoryDescription } from '@core/storybook/utils';
import { StackProps } from '../../types';
import { STACK_DIRECTION, STACK_ORDER } from '../../styles/constants';
import { Stack } from '../../Stack';
import description from './description.md';

export const DirectionAndOrderStory: Story<StackProps> = (props) => (
    <Stack direction="row" justifyContent="space-evenly">
        <Stack alignItems="center">
            <Title size="primary">{STACK_DIRECTION.column}</Title>
            {DisplayVariants({
                title: { size: 'secondary' },
                property: 'order',
                values: Object.values(STACK_ORDER),
                component: Stack,
                componentProps: props,
            })}
        </Stack>
        <Stack alignItems="center">
            <Title size="primary">{STACK_DIRECTION.row}</Title>
            {DisplayVariants({
                title: { size: 'secondary' },
                property: 'order',
                values: Object.values(STACK_ORDER),
                component: Stack,
                componentProps: { ...props, direction: 'row' } as StackProps,
                direction: 'vertical',
            })}
        </Stack>
    </Stack>
);

DirectionAndOrderStory.storyName = 'Направление и порядок элементов';
DirectionAndOrderStory.argTypes = excludeProp(['order', 'direction']);
DirectionAndOrderStory.parameters = createStoryDescription(description);