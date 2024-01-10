import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { Title } from '@quarx-ui/core/storybook/DisplayVariants/styledComponents';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
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

setStoryParams(DirectionAndOrderStory, {
    title: 'Направление и порядок элементов',
    description,
    excludeArgs: ['order', 'direction'],
});
