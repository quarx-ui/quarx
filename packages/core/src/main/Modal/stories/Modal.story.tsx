import { Story } from '@storybook/react/types-6-0';
import { useState } from 'react';
import { ModalProps, Modal as KitModal } from '@core';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { defineCategory, excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import { StoryButton } from '@core/storybook/components';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { sizesDescription, secondWindowDescription, directionDescription } from './descriptions';

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
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, '
        + 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        + 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '
        + 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
        + 'Excepteur sint occaecat cupidatat non proident, '
        + 'sunt in culpa qui officia deserunt mollit anim id est laborum',
};

export default {
    title: STORY_PATHS.core.components.main('Modal'),
    component: KitModal,
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
    args: defaultArgs,
    parameters: {
        actions: { disable: true },
    },
};

export const Modal: Story<ModalProps> = (props) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div>
            <StoryButton
                onClick={() => setIsOpened(true)}
            >
                Открыть
            </StoryButton>
            <KitModal
                open={isOpened}
                onClose={() => setIsOpened(false)}
                {...props}
            />
        </div>
    );
};

Modal.storyName = 'Компонент';

export const FooterDirection: Story<ModalProps> = (props) => DisplayVariants({
    component: Modal,
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

export const SecondModal: Story<ModalProps> = (props) => {
    const [isOpened, setIsOpened] = useState(false);
    const [secondIsOpened, setSecondIsOpened] = useState(false);

    return (
        <div>
            <StoryButton
                onClick={() => setIsOpened(true)}
            >
                Открыть первое окно
            </StoryButton>
            <KitModal
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
            <KitModal
                open={secondIsOpened}
                onClose={() => setSecondIsOpened(false)}
                {...props}
                body={undefined}
            />
        </div>
    );
};

SecondModal.storyName = 'Второе окно';
SecondModal.parameters = {
    docs: {
        description: {
            story: secondWindowDescription,
        },
    },
};

export const Sizes: Story<ModalProps> = (props) => DisplayVariants({
    component: Modal,
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