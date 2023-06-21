import { Story } from '@storybook/react/types-6-0';
import { BASE_TYPOGRAPHY_TYPES, BaseTypography, BaseTypographyProps, BaseTypographyType } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';
import description from './description.md';

const TYPES: BaseTypographyType[] = [
    BASE_TYPOGRAPHY_TYPES.text,
    BASE_TYPOGRAPHY_TYPES.headline,
];

export const TypesStory: Story<BaseTypographyProps> = (props) => DisplayVariants({
    property: 'type',
    values: TYPES,
    component: BaseTypography,
    componentProps: props,
});

setStoryParams(TypesStory, {
    title: 'Типы типографики',
    description,
    excludeArgs: ['type'],
});
