import { Story } from '@storybook/react/types-6-0';
import { DisplayVariants } from '@quarx-ui/core/storybook/DisplayVariants';
import { Tabs, TabsProps } from '@core';
import { QX_SIZE } from '@core/enums';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { Title } from '../utils';
import description from './description.md';
import { TABS_TYPES } from '../../common';

const SIZES = [QX_SIZE.large, QX_SIZE.medium, QX_SIZE.small];

export const SizesStory: Story<TabsProps> = (props) => (
    <div>
        {Object.values(SIZES).map((value) => (
            <div>
                <Title>{value}</Title>
                {DisplayVariants({
                    title: { isShown: false },
                    property: 'type',
                    values: Object.values(TABS_TYPES),
                    component: Tabs,
                    componentProps: { ...props, size: value },
                    direction: 'vertical',
                })}
            </div>
        ))}
    </div>
);

setStoryParams(SizesStory, {
    title: 'Размеры',
    description,
    excludeArgs: ['size', 'type'],
});
