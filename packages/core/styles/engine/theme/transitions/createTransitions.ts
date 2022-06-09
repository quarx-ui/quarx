import {
    CreateOptions,
    Duration,
    Easing, FormatMs,
    Transitions,
    CreateTransitionArg,
} from '@core/styles/engine/theme/transitions/types';

export const DEFAULT_EASING: Easing = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};

export const DEFAULT_DURATION: Duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
};

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
