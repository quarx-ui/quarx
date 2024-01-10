import {
    CreateOptions,
    FormatMs,
    Transitions,
    CreateTransitionArg,
} from './types';
import { DEFAULT_DURATION, DEFAULT_EASING } from './constants';

const formatMs: FormatMs = (milliseconds) => `${Math.round(milliseconds)}ms`;

export const createTransitions = (inputTransitions?: CreateTransitionArg): Transitions => {
    const mergedEasing = {
        ...DEFAULT_EASING,
        ...inputTransitions?.easing,
    };

    const mergedDuration = {
        ...DEFAULT_DURATION,
        ...inputTransitions?.duration,
    };

    const create = (props: string | string[] = ['all'], options: CreateOptions = {}): string => {
        const {
            duration = mergedDuration.standard,
            easing: easingOption = mergedEasing.easeInOut,
            delay = 0,
        } = options;

        const durationOption = typeof duration === 'string' ? duration : formatMs(duration);
        const delayOption = typeof delay === 'string' ? delay : formatMs(delay);

        return (Array.isArray(props) ? props : [props])
            .map((animatedProp) => `${animatedProp} ${durationOption} ${easingOption} ${delayOption}`)
            .join(',');
    };

    return {
        create,
        ...inputTransitions,
        easing: mergedEasing,
        duration: mergedDuration,
    };
};

export const transitions = createTransitions();
