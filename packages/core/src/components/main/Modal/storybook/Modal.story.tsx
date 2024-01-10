import { ModalProps, Modal as KitModal } from '@core';
import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { defineCategory, excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { Meta } from '@storybook/react';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';

const defaultArgs: ModalProps = {
    title: 'Headline',
    subTitle: 'Description',
    size: 'medium',
    footerDirection: 'horizontal',
    scrollBehaviour: 'body',
    disableCloseButton: false,
    disableCloseByEscape: false,
    disableCloseByClickAway: false,
    footerButtons: {
        success: {
            children: 'Accept',
        },
        secondary: {
            children: 'Secondary',
        },
        danger: {
            children: 'Danger',
        },
    },
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
        + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        + 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
        + 'Excepteur sint occaecat cupidatat non proident, '
        + 'sunt in culpa qui officia deserunt mollit anim id est laborum',
};

export default {
    title: STORY_PATHS.core.components.main('Modal'),
    component: KitModal,
    args: defaultArgs,
    argTypes: {
        ...defineCategory('Элементы', {
            title: {
                control: {
                    type: 'text',
                },
            },
            subTitle: {
                control: {
                    type: 'text',
                },
            },
            children: {
                control: {
                    type: 'text',
                },
            },
            body: {
                control: {
                    type: 'text',
                },
            },
            header: {
                control: {
                    type: 'text',
                },
            },
            footer: {
                control: {
                    type: 'text',
                },
            },
            footerButtons: {},
            HeaderProps: {
                control: false,
            },
            FooterProps: {
                control: false,
            },
            CloseButtonProps: {
                control: false,
            },
            OverScreenProps: {},
        }),
        ...defineCategory('Стилизация', {
            size: {},
            footerDirection: {},
        }),
        ...defineCategory('Состояние', {
            open: {},
            onClose: {},
        }),
        ...defineCategory('Поведение', {
            disableCloseButton: {},
            scrollBehaviour: {},
            disableCloseByEscape: {},
            disableCloseByClickAway: {},
        }),
        ...excludeProp(['permissions', 'hidden'], BASE_ARG_TYPES),
    },
} as Meta<ModalProps>;

export { ModalStory } from './modal';
export { FooterDirectionStory } from './footerDirection';
export { SecondModalStory } from './secondModal';
export { SizesStory } from './sizes';
