/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { FC, forwardRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import {
    Backdrop,
    If,
    Portal,
    Transition,
    OVER_SCREEN_DATATYPE,
    OVER_SCREEN_ROLE,
    OVER_SCREEN_PLACEMENT,
} from '@core/src';
import { omitProps } from '@core/utils';
import { OverScreenProps } from './types';
import { useStyles } from './styles';
import { useOverScreenProps } from './useOverScreenProps';

export const OverScreen: FC<OverScreenProps> = forwardRef<HTMLDivElement, OverScreenProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps, name } = usePropsOverwrites('OverScreen', initialProps);
    const {
        open,
        disableBackdrop = false,
        children,
        TransitionProps,
        PortalProps,
        BackdropProps,
        ContentTransitionProps,
        placement = OVER_SCREEN_PLACEMENT.center,
        margin = 0,
        dataIndex,
        uniqAttr,
        onClick,
        ...restProps
    } = useOverScreenProps({
        ...props,
        uniqAttr: `Qx${name}`,
    });

    const omittedProps = omitProps(restProps, [
        'disableScrollLock',
        'disablePortal',
        'origin',
        'appearance',
        'keepMounted',
        'disableCloseByClickAway',
        'disableCloseByEscape',
        'onClose',
    ]);

    const params = {
        placement,
        margin,
    };

    const styles = useStyles({ ...params, ...styleProps });

    return (
        <Portal {...PortalProps}>
            <Transition {...TransitionProps}>
                <div
                    role={OVER_SCREEN_ROLE}
                    datatype={OVER_SCREEN_DATATYPE}
                    tabIndex={dataIndex}
                    {...omittedProps}
                    data-index={dataIndex}
                    data-component={uniqAttr}
                    ref={ref}
                    aria-hidden={!open}
                    onClick={onClick}
                    className={cn('root', params)}
                    css={styles.root}
                >
                    <If condition={!disableBackdrop}>
                        <Backdrop {...BackdropProps} />
                    </If>
                    <Transition {...ContentTransitionProps}>
                        {children}
                    </Transition>
                </div>
            </Transition>
        </Portal>
    );
});
