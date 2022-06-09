export interface Easing {
    easeInOut: string,
    easeOut: string,
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

export type CreateFc = (
    props: string | string[],
    options?: CreateOptions,
) => string;

export interface CreateTransitionArg {
    easing?: Easing,
    duration?: Duration,
    create?: CreateFc,
    getAutoHeightDuration?: (height: number) => number,
}

export type GetAutoHeightDuration = (height: number) => number;
export type FormatMs = (milliseconds: number) => string;

export interface Transitions {
    easing: Easing,
    duration: Duration,
    create: CreateFc,
    getAutoHeightDuration: GetAutoHeightDuration,
}
