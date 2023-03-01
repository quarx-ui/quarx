export interface Easing {
    easeInOut: string,
    easeOut: string,
    easeOutIn: string,
    easeIn: string,
    sharp: string,
}

export interface Duration {
    shortest: number;
    shorter: number;
    short: number;
    standard: number;
    complex: number;
    enteringScreen: number;
    leavingScreen: number;
}

export interface CreateOptions {
    duration?: number | string,
    easing?: string,
    delay?: number | string
}

export type TransitionsCreateFc = (
    props: string | string[],
    options?: CreateOptions,
) => string;

export interface CreateTransitionArg {
    easing?: Easing,
    duration?: Duration,
    create?: TransitionsCreateFc,
}

export type FormatMs = (milliseconds: number) => string;

export interface Transitions {
    easing: Easing,
    duration: Duration,
    create: TransitionsCreateFc,
}
