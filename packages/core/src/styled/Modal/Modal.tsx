/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { forwardRef, useRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { Portal, QX_SIZE, Transition, useEnhancedEffect } from '@core';
import { Backdrop } from '@core/src';
import { limitHeightByRows, useModalProps } from '@core/utils';
import { MODAL_SCROLL_BEHAVIOR } from '@core/src/styled/Modal/common/constants';
import { ModalFooter, ModalHeader } from './common';
import { ModalProps } from './types';
import { MODAL_CSS_VARS, useStyles } from './styles';

export const Modal = forwardRef<HTMLDivElement, ModalProps>((
    initialProps,
    ref,
) => {
    const { props, cn } = usePropsOverwrites('Modal', initialProps, MODAL_CSS_VARS);

    const {
        size = QX_SIZE.medium,
        title,
        subTitle,
        disableCloseButton,
        footer,
        footerButtons,
        direction,
        header,
        body,
        disablePortal,
        open = false,
        HeaderProps,
        FooterProps,
        styles: externalStyles,
        keepMounted = false,
        TransitionProps,
        PortalProps,
        BackdropProps,
        CloseButtonProps,
        onClick,
        onClose,
        disableTransition,
        tabIndex,
        children,
        disableBackdrop = false,
        scrollBehaviour = MODAL_SCROLL_BEHAVIOR.window,
        cssVars,
        ...restProps
    } = useModalProps(props);

    const hasHeader = (!!header || !!HeaderProps?.children)
        || (!!title || !!HeaderProps?.title)
        || (!!subTitle || !!HeaderProps?.subTitle)
        || (!disableCloseButton && !HeaderProps?.disableCloseButton);

    const hasFooter = (!!footer || !!FooterProps?.children)
        || !!Object.keys(footerButtons ?? FooterProps?.buttons ?? {}).length;

    const params = {
        size,
        scrollBehaviour,
        hasChildren: !!children,
        hasHeader,
        hasFooter,
    };

    const styles = useStyles({ ...params, cssVars, styles: externalStyles });

    const contentRef = useRef(null);

    useEnhancedEffect(() => {
        if (open) {
            limitHeightByRows(contentRef.current, 1);
        }
    }, [open]);

    return (
        <Portal
            disablePortal={disablePortal}
            {...PortalProps}
        >
            <Transition
                in={open}
                unmountOnExit={!keepMounted}
                mountOnEnter={!keepMounted}
                enter={!disableTransition}
                exit={!disableTransition}
                {...TransitionProps}
            >
                <div
                    {...restProps}
                    role="presentation"
                    css={styles.root}
                    className={cn('root', params)}
                    ref={ref}
                    datatype="modal"
                    aria-hidden={!open}
                    onClick={onClick}
                    tabIndex={tabIndex}
                >
                    {!disableBackdrop && <Backdrop {...BackdropProps} />}
                    {children ?? (
                        <div
                            css={styles.scrollContainer}
                            className={cn('scrollContainer')}
                            onClick={(e) => onClose?.(e, 'clickAway')}
                        >
                            <div
                                css={styles.box}
                                className={cn('box', params)}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ModalHeader
                                    title={title}
                                    subTitle={subTitle}
                                    disableCloseButton={disableCloseButton}
                                    size={size}
                                    onClose={(e) => onClose?.(e, 'closeButton')}
                                    CloseButtonProps={CloseButtonProps}
                                    {...HeaderProps}
                                >
                                    {header}
                                </ModalHeader>
                                {body && (
                                    <div
                                        css={styles.body}
                                        className={cn('body')}
                                        ref={contentRef}
                                    >
                                        {body}
                                    </div>
                                )}
                                <ModalFooter
                                    buttons={footerButtons}
                                    direction={direction}
                                    size={size}
                                    {...FooterProps}
                                >
                                    {footer}
                                </ModalFooter>
                            </div>
                        </div>
                    )}
                </div>
            </Transition>
        </Portal>
    );
});
