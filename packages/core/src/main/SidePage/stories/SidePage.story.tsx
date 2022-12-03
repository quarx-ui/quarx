import React, { useState } from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { CommonButton } from '@core/src/system/OverScreen/stories/common/components';
import { ModalProps } from '@core';
import {
    directionDescription,
    secondWindowDescription,
    sizesDescription,
} from '@core/src/main/Modal/stories/descriptions';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
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
            HeaderProps: {
                control: false,
            },
            FooterProps: {
                control: false,
            },
            CloseButtonProps: {
                control: false,
            },
            OverScreenProps: {
                control: false,
            },
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
    parameters: {
        actions: { disable: true },
    },
    args: defaultArgs,
};

const SidePage: Story<SidePageProps> = ({ ...props }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <CommonButton
                onClick={() => setOpen(true)}
            >
                Открыть
            </CommonButton>
            <KitSidePage
                {...props}
                open={open}
                onClose={() => setOpen(false)}
            />
        </>
    );
};

export const Sandbox = SidePage.bind({});
Sandbox.storyName = 'Компонент';

export const FooterDirection: Story<ModalProps> = (props) => DisplayVariants({
    component: SidePage,
    property: 'footerDirection',
    values: ['horizontal', 'vertical'],
    componentProps: props,
});

FooterDirection.storyName = 'Расположение кнопок';
FooterDirection.argTypes = excludeProp(['footerDirection']);
FooterDirection.parameters = {
    docs: {
        description: {
            story: directionDescription,
        },
    },
};

export const SecondSidePage: Story<ModalProps> = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const [secondIsOpened, setSecondIsOpened] = useState(false);

    return (
        <div>
            <CommonButton
                onClick={() => setIsOpened(true)}
            >
                Открыть первое окно
            </CommonButton>
            <KitSidePage
                open={isOpened}
                onClose={() => setIsOpened(false)}
                {...props}
                footerButtons={{
                    success: {
                        children: 'Открыть второе окно',
                        onClick: () => setSecondIsOpened(true),
                    },
                }}
            />
            <KitSidePage
                open={secondIsOpened}
                onClose={() => setSecondIsOpened(false)}
                {...props}
                body={undefined}
            />
        </div>
    );
};

SecondSidePage.storyName = 'Одновременное открытие';
SecondSidePage.parameters = {
    docs: {
        description: {
            story: secondWindowDescription,
        },
    },
};

export const Sizes: Story<ModalProps> = (props) => DisplayVariants({
    component: SidePage,
    property: 'size',
    values: ['small', 'medium'],
    componentProps: props,
});

Sizes.storyName = 'Размеры';
Sizes.argTypes = excludeProp(['size']);
Sizes.parameters = {
    docs: {
        description: {
            story: sizesDescription,
        },
    },
};

const variantsArray = [
    FooterDirection,
    SecondSidePage,
    Sizes,
];

variantsArray.forEach((variant, index) => {
    variantsArray[index].args = defaultArgs;
});
