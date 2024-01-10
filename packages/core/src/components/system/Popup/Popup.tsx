import { FC, forwardRef, ReactElement, Ref, useEffect, useRef, useState } from 'react';
import {
    Backdrop,
    ClickAwayListener,
    Portal,
    Transition,
    useFloating,
    useForkRef,
} from '@core';
import { usePropsOverwrites } from '@core/styles';
import { If } from '@core/components/system/If';
import { PopupProps } from './types';
import { POPUP_CSS_VARS } from './styles/vars';
import { POPUP_PAPER_REFERENCE } from './styles/constants';
import { useStyles } from './styles';
import { referenceToArrangementMap } from './maps';

export const Popup: FC<PopupProps> = forwardRef<HTMLDivElement, PopupProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('Popup', initialProps, POPUP_CSS_VARS);
    const {
        hidden = false,
        TransitionProps,
        disableTransition = false,

        disablePortal = false,
        container,

        onClickAway,
        clickAwayIgnore,
        ClickAwayListenerProps,

        disableBackdrop = false,
        BackdropProps,

        open = false,
        anchor,
        placement,
        disableOffset,
        disableFlip,
        disableShift,
        modifiersOptions,
        customModifiers,
        reference = POPUP_PAPER_REFERENCE.window,
        children,

        ...restProps
    } = props;

    const [currentRef, setCurrentRef] = useState<Ref<HTMLDivElement>>(ref);
    useEffect(() => setCurrentRef(ref), [ref]);

    const floatingRef = useRef<HTMLDivElement>(null);
    const refs = useForkRef(floatingRef, currentRef);
    const { floating } = useFloating({
        open,
        anchor,
        floatingRef,
        placement,
        disableOffset,
        disableFlip,
        disableShift,
        modifiersOptions,
        customModifiers,
        arrangement: referenceToArrangementMap[reference],
    });

    const params = { ...floating, disableBackdrop, reference };
    const styles = useStyles({ params, ...styleProps });

    // TODO: Не работает transition. Добавить в ClickAwayListener возможность проброса внешнего ref дочерним элементам
    const PopupWrapper = (
        <Transition
            in={open}
            unmountOnExit
            mountOnEnter
            enter={!disableTransition}
            exit={!disableTransition}
            {...TransitionProps}
        >
            <ClickAwayListener
                ignore={clickAwayIgnore}
                onClickAway={(event) => onClickAway?.(event)}
                {...ClickAwayListenerProps}
            >
                <div
                    ref={refs}
                    className={cn('root', params)}
                    css={styles.root}
                    {...restProps}
                >
                    {children}
                </div>
            </ClickAwayListener>
        </Transition>
    );

    const withBackdrop = (node: ReactElement): ReactElement => (
        <Backdrop
            mounted={open}
            {...BackdropProps}
        >
            {node}
        </Backdrop>
    );

    return (
        <If condition={!hidden}>
            <Portal
                disablePortal={disablePortal}
                container={container}
            >
                {disableBackdrop
                    ? PopupWrapper
                    : withBackdrop(PopupWrapper)}
            </Portal>
        </If>
    );
});
