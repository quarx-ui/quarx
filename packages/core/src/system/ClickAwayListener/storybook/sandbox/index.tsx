import ReactDOM from 'react-dom';
import { Story } from '@storybook/react/types-6-0';
import { createElement, useRef, useState } from 'react';
import { Button, ClickAwayListener } from '@core';
import { If } from '@core/src/system/If';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { Column, Title } from '@core/storybook/components';
import { SandBoxClickAwayListenerProps, SimpleModal } from '../utils';

export const SandboxStory: Story<SandBoxClickAwayListenerProps> = ({
    usePortal = false,
    ...props
}) => {
    const ref = useRef(null);
    const [open, setOpen] = useState<boolean>(false);

    const clickAwayListenerModal = (
        <ClickAwayListener
            {...props}
            ignore={ref.current}
            onClickAway={() => setOpen(false)}
        >
            <SimpleModal>
                <span>
                    {`Modal window (usePortal: ${usePortal})`}
                </span>
            </SimpleModal>
        </ClickAwayListener>
    );

    const portalModal = createElement(() => (
        ReactDOM.createPortal(clickAwayListenerModal, document.body)
    ));

    return (
        <Column>
            <Title>Кнопка включена в список игнорируемых onClickAwayListener элементов</Title>
            <Button ref={ref} onClick={() => setOpen(true)}>
                Открыть
            </Button>
            <If condition={open}>
                {usePortal
                    ? portalModal
                    : clickAwayListenerModal}
            </If>
        </Column>
    );
};

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
