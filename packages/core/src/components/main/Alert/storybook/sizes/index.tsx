import { Story } from '@storybook/react/types-6-0';
import { Alert, ALERT_SIZE, AlertProps } from '@core';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

export const SizesStory: Story<AlertProps> = (props) => DisplayVariants({
    property: 'size',
    values: Object.keys(ALERT_SIZE),
    component: Alert,
    componentProps: props,
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    excludeArgs: ['size'],
});
