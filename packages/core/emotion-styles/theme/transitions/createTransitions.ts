import {
    CreateOptions,
    Duration,
    Easing, FormatMs,
    GetAutoHeightDuration, Transitions,
    CreateTransitionArg,
} from '@core/emotion-styles/theme/transitions/types';

export const defaultEasing: Easing = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
};

export const defaultDuration: Duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
};

const formatMs: FormatMs = (milliseconds) => `${Math.round(milliseconds)}ms`;

const getAutoHeightDuration: GetAutoHeightDuration = (height) => {
    const constant = height / 36;

    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
};

export const createTransitions = (inputTransitions?: CreateTransitionArg): Transitions => {
    const mergedEasing = {
        ...defaultEasing,
        ...inputTransitions?.easing,
    };

    const mergedDuration = {
        ...defaultDuration,
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
        getAutoHeightDuration,
        create,
        ...inputTransitions,
        easing: mergedEasing,
        duration: mergedDuration,
    };
};

export const transitions = createTransitions();
