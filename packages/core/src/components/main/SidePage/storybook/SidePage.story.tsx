import { BASE_ARG_TYPES } from '@quarx-ui/core/storybook/BASE_ARG_TYPES';
import { defineCategory, excludeProp } from '@quarx-ui/core/storybook/templateParams';
import { Meta } from '@storybook/react';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';
import { SidePage as KitSidePage, SidePageProps } from '..';

const defaultArgs: SidePageProps = {
    title: 'Headline',
    subTitle: 'Description',
    size: 'medium',
    footerDirection: 'horizontal',
    disableCloseByClickAway: false,
    disableCloseByEscape: false,
    disableCloseButton: false,
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
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
        + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        + 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
        + 'Excepteur sint occaecat cupidatat non proident, '
        + 'sunt in culpa qui officia deserunt mollit anim id est laborum',
};

export default {
    title: STORY_PATHS.core.components.main('SidePage'),
    component: KitSidePage,
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
            HeaderProps: {},
            FooterProps: {},
            CloseButtonProps: {},
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
            disableCloseByEscape: {},
            disableCloseByClickAway: {},
        }),
        ...excludeProp(['permissions', 'hidden'], BASE_ARG_TYPES),
    },
} as Meta<SidePageProps>;

export { SandboxStory } from './sandbox';
export { FooterDirectionStory } from './footerDirection';
export { SecondSidePageStory } from './secondSidePage';
export { SizesStory } from './sizes';
