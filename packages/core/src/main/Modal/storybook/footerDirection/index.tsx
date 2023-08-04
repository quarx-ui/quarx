import { Story } from '@storybook/react/types-6-0';
import { ModalProps } from '@core';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { FOOTER_DIRECTION } from '@core/src/system/FooterBlock/constants';
import { ModalStory } from '../modal';
import description from './description.md';

export const FooterDirectionStory: Story<ModalProps> = (props) => DisplayVariants({
    component: ModalStory,
    property: 'footerDirection',
    values: Object.values(FOOTER_DIRECTION),
    componentProps: props,
});

setStoryParams(FooterDirectionStory, {
    title: 'Расположение кнопок',
    description,
    excludeArgs: ['footerDirection'],
});
