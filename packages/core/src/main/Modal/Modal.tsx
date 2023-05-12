import { forwardRef, useState } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { OverScreen, OVER_SCREEN_CLOSE_REASON, FooterBlock, HeaderBlock, QX_SIZE, useEnhancedEffect } from '@core';
import { If } from '@core/src/system/If';
import { limitHeightByRows } from '@core/utils';
import { MODAL_SCROLL_BEHAVIOR } from '@core/src/main/Modal/constants';
import { ModalProps } from './types';
import { MODAL_CSS_VARS, useStyles } from './styles';

export const Modal = forwardRef<HTMLDivElement, ModalProps>((
    initialProps,
    ref,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('Modal', initialProps, MODAL_CSS_VARS);

    const {
        size = QX_SIZE.medium,
        title,
        subTitle,
        disableCloseButton,
        disableCloseByClickAway,
        footer,
        footerButtons,
        footerDirection,
        header,
        body,
        open = false,
        onClose,
        scrollBehaviour = MODAL_SCROLL_BEHAVIOR.window,
        HeaderProps,
        FooterProps,
        CloseButtonProps,
        OverScreenProps,
        ...restProps
    } = props;

    const hasHeader = (!!header || !!HeaderProps?.children)
        || (!!title || !!HeaderProps?.title)
        || (!!subTitle || !!HeaderProps?.subTitle)
        || (!disableCloseButton && !HeaderProps?.disableCloseButton);

    const hasFooter = (!!footer || !!FooterProps?.children)
        || !!Object.keys(footerButtons ?? FooterProps?.buttons ?? {}).length;

    const params = {
        size,
        scrollBehaviour,
        hasHeader,
        hasFooter,
    };

    const styles = useStyles({ params, ...styleProps });

    const [bodyRef, setBodyRef] = useState<HTMLDivElement | null>(null);

    useEnhancedEffect(() => {
        if (open) {
            limitHeightByRows(bodyRef, 1);
        }
    }, [open, bodyRef]);

    return (
        <OverScreen
            {...restProps}
            open={open}
            onClose={onClose}
            disableCloseByClickAway={disableCloseByClickAway}
            {...OverScreenProps}
            ref={ref}
            className={cn('root', params)}
            css={styles.root}
        >
            <div
                css={styles.scrollContainer}
                className={cn('scrollContainer')}
                onClick={(e) => {
                    if (!disableCloseByClickAway) {
                        onClose?.(e, OVER_SCREEN_CLOSE_REASON.clickAway);
                    }
                }}
            >
                <div
                    css={styles.box}
                    className={cn('box')}
                    onClick={(e) => e.stopPropagation()}
                >
                    <HeaderBlock
                        title={title}
                        subTitle={subTitle}
                        disableCloseButton={disableCloseButton}
                        size={size}
                        onClose={(e) => onClose?.(e, OVER_SCREEN_CLOSE_REASON.closeButton)}
                        CloseButtonProps={CloseButtonProps}
                        {...HeaderProps}
                    >
                        {header}
                    </HeaderBlock>
                    <If condition={!!body}>
                        <div
                            css={styles.body}
                            className={cn('body')}
                            ref={setBodyRef}
                        >
                            {body}
                        </div>
                    </If>
                    <FooterBlock
                        buttons={footerButtons}
                        direction={footerDirection}
                        size={size}
                        {...FooterProps}
                    >
                        {footer}
                    </FooterBlock>
                </div>
            </div>
        </OverScreen>
    );
});
