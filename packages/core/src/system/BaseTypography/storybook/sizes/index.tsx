import { Story } from '@storybook/react/types-6-0';
import { BaseTypography, BaseTypographySize, BaseTypographyProps, Stack } from '@core';
import { QX_SIZE } from '@core/enums';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';
import description from './description.md';

const SIZES: BaseTypographySize[] = [
    QX_SIZE.xSmall,
    QX_SIZE.small,
    QX_SIZE.medium,
    QX_SIZE.large,
    QX_SIZE.xLarge,
];

export const SizesStory: Story<BaseTypographyProps> = (props) => DisplayVariants({
    property: 'size',
    values: SIZES,
    componentProps: props,
    component: (componentProps) => (
        <Stack>
            <BaseTypography {...componentProps} type="headline">
                Заголовок
            </BaseTypography>
            <BaseTypography {...componentProps} type="text">
                Текст
            </BaseTypography>
        </Stack>
    ),
});

setStoryParams(SizesStory, {
    title: 'Размеры',
    description,
    excludeArgs: ['size', 'type', 'children'],
});
