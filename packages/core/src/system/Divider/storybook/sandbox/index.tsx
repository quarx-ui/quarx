import { Story } from '@storybook/react/types-6-0';
import { Badge, Divider, DividerProps, ORIENTATIONS, Stack } from '@core';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { STACK_DIRECTION } from '../../../Stack/styles/constants';

export const SandboxStory: Story<DividerProps> = ({ ...props }) => (
    <Stack
        inline
        direction={props.orientation === ORIENTATIONS.vertical
            ? STACK_DIRECTION.row
            : STACK_DIRECTION.column}
    >
        <Badge borderRadius="medium">Item 1</Badge>
        <Divider {...props} />
        <Badge borderRadius="medium">Item 2</Badge>
    </Stack>
);

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
