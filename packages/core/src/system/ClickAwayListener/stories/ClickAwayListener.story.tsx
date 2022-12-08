import React, { useState } from 'react';
import { Button, colors } from '@core';
import { Story } from '@storybook/react/types-6-0';
import { defineCategory } from '@core/storybook/templateParams';
import styled from '@emotion/styled';
import ReactDOM from 'react-dom';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { ClickAwayListener, ClickAwayListenerProps } from '..';

const Flex = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
});

const SimpleModal = React.forwardRef<HTMLDivElement, {
    children: React.ReactElement;
}>(({
    children,
}, ref) => {
    const Component = styled('div')({
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 150,
        height: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '3px solid',
        borderRadius: 12,
        borderColor: '#FCFCFC',
        backgroundColor: colors.Emerald['500'],
        color: '#FCFCFC',
        textAlign: 'center',
    });

    return <Component ref={ref}>{children}</Component>;
});

interface SandBoxProps extends ClickAwayListenerProps {
    usePortal?: boolean;
}

const defaultArgs: Partial<SandBoxProps> = {
    /** Только для демонстрации */
    usePortal: false,

    mouseEvent: 'onClick',
    touchEvent: 'onTouchEnd',
    disableReactTree: false,
    children: (
        <SimpleModal>
            <span>Modal</span>
        </SimpleModal>
    ),
};

export default {
    title: STORY_PATHS.core.components.system('ClickAwayListener'),
    component: ClickAwayListener,
    argTypes: {
        ...defineCategory('Для демонстрации', {
            usePortal: { description: 'Использовать порталы для модальных окон' },
        }),
        mouseEvent: { description: 'Прослушиваемое событие мыши. Выключено при false.' },
        touchEvent: { description: 'Прослушиваемое событие touch. Выключено при false.' },
        onClickAway: { description: 'Функция, срабатываемая при клике вне дочернего компонента.' },
        children: { description: 'Элемент для прослушивания' },
        disableReactTree: { description: '' },
    },
    parameters: {
        actions: { disable: true },
    },
    args: defaultArgs,
};

export const Sandbox: Story<SandBoxProps> = ({
    usePortal = false,
    ...props
}) => {
    const [open, setOpen] = useState<boolean>(false);

    const TEXT = new Map([
        [true, 'Скрыть'],
        [false, 'Открыть'],
    ]);

    const clickAwayListenerModal = (
        <ClickAwayListener
            {...props}
            onClickAway={() => setOpen(false)}
        >
            <SimpleModal>
                <span>
                    {`Modal window (usePortal: ${usePortal})`}
                </span>
            </SimpleModal>
        </ClickAwayListener>
    );

    const portalModal = React.createElement(() => (
        ReactDOM.createPortal(clickAwayListenerModal, document.body)
    ));

    const modal = usePortal ? portalModal : clickAwayListenerModal;

    return (
        <Flex>
            <Button onClick={() => setOpen(!open)}>
                {TEXT.get(open)}
            </Button>
            {open && modal}
        </Flex>
    );
};
Sandbox.storyName = 'Компонент';
