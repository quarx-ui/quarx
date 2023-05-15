import { FC } from 'react';
import { forwardRef } from '@core/utils';
import { QX_PREFIX, usePropsOverwrites } from '@core/styles';
import { Transition } from '@core/src';
import { BackdropProps } from './types';
import { useStyles } from './styles';

export const Backdrop: FC<BackdropProps> = forwardRef<HTMLDivElement, BackdropProps>((initialProps, ref) => {
    const { props, cn, styleProps, name } = usePropsOverwrites('Backdrop', initialProps);

    const {
        invisible = false,
        mounted = true,
        children,
        disableTransition = false,
        TransitionProps,
        ...restProps
    } = props;

    const params = {
        invisible,
    };

    const styles = useStyles({ params, ...styleProps });

    return (
        <Transition
            in={mounted}
            unmountOnExit={false}
            mountOnEnter={false}
            enter={!disableTransition}
            exit={!disableTransition}
            {...TransitionProps}
        >
            <div
                className={cn('root')}
                css={styles.root}
                {...restProps}
                data-component={`${QX_PREFIX}${name}`}
                aria-hidden={!mounted}
                ref={ref}
            >
                {children}
            </div>
        </Transition>
    );
});
