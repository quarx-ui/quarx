import { CSSProperties } from 'react';
import { TransitionOptions, ComponentProps, Options, TransitionProps, MapTransitionStatusToStyles } from './types';

export const getTransitionProps = (props: ComponentProps, options: Options): TransitionOptions => {
    const { timeout, easing, style = {} } = props;

    return {
        duration: style.transitionDuration
            ?? (typeof timeout === 'number'
                ? timeout
                : timeout[options.mode] || 0),

        easing: style.transitionTimingFunction
            ?? (typeof easing === 'object'
                ? easing[options.mode]
                : easing),

        delay: style.transitionDelay,
    };
};

export function mapIsObject(
    mapStatusToStyles: TransitionProps['mapStatusToStyles'],
): mapStatusToStyles is MapTransitionStatusToStyles {
    return typeof mapStatusToStyles !== 'function';
}

export function styleIsObject(style: TransitionProps['styles']): style is CSSProperties {
    return typeof style !== 'function';
}
