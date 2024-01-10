import { Story } from '@storybook/react/types-6-0';
import { Alert, ALERT_COLORS, ALERT_SIZE, AlertProps } from '@core';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const ColorsStory: Story<AlertProps> = (props) => DisplayVariants({
    property: 'color',
    values: Object.keys(ALERT_COLORS),
    component: Alert,
    componentProps: props,
});

setStoryParams(ColorsStory, {
    title: 'Цвета',
    excludeArgs: ['color'],
    args: {
        size: ALERT_SIZE.small,
    },
});
