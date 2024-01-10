import { ClickAwayListenerProps, colors } from '@core';
import { forwardRef, ReactElement } from 'react';
import styled from '@emotion/styled';

export interface SandBoxClickAwayListenerProps extends ClickAwayListenerProps {
    usePortal?: boolean;
}

export const SimpleModal = forwardRef<HTMLDivElement, {
    children: ReactElement;
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

export const defaultClickAwayListenerArgs: Partial<SandBoxClickAwayListenerProps> = {
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
