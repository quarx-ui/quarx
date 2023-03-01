type RerenderOn = 'end' | 'step';

export interface UseTimerOptions {
    startTime?: number;
    endTime?: number;

    interval?: number;
    timeScale?: number;

    loop?: boolean;
    rerenderOn?: RerenderOn;

    onStart?: () => void;
    onResume?: () => void;
    onPause?: () => void;
    onFinish?: () => void;
}

export interface UseTimerReturn {
    value: number;
    resume: () => void;
    pause: () => void;
    restart: () => void;
}
