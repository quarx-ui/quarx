import { Story } from '@storybook/react/types-6-0';
import { Alert, ALERT_TYPE, AlertProps } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';

export const TypesStory: Story<AlertProps> = (props) => DisplayVariants({
    property: 'type',
    values: Object.keys(ALERT_TYPE),
    component: Alert,
    componentProps: props,
});

setStoryParams(TypesStory, {
    title: 'Типы',
    excludeArgs: ['type'],
});
