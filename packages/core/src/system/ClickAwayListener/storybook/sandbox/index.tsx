import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Story } from '@storybook/react/types-6-0';
import { createElement, useState } from 'react';
import { Button, ClickAwayListener } from '@core';
import { If } from '@core/src/system/If';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { SandBoxClickAwayListenerProps, SimpleModal } from '../utils';

const Flex = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
});

export const SandboxStory: Story<SandBoxClickAwayListenerProps> = ({
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

    const portalModal = createElement(() => (
        ReactDOM.createPortal(clickAwayListenerModal, document.body)
    ));

    return (
        <Flex>
            <Button onClick={() => setOpen(!open)}>
                {TEXT.get(open)}
            </Button>
            <If condition={open}>
                {usePortal
                    ? portalModal
                    : clickAwayListenerModal}
            </If>
        </Flex>
    );
};

setStoryParams(SandboxStory, {
    title: 'Компонент',
});
