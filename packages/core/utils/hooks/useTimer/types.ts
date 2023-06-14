import { Values } from '@core';
import { RERENDER_VALUES } from './constants';

type RerenderOn = Values<typeof RERENDER_VALUES>;

export interface UseTimerOptions {
    /** Начальное время (сек)
     * @default 5 */
    startTime?: number;

    /** Конечное время
     * @default 0 */
    endTime?: number;

    /** Интервал
     * @default 1 */
    interval?: number;

    /** Продолжительность внутренней единицы времени (мс)
     * @default 1000 */
    timeScale?: number;

    /** Автоматический рестарт после окончания
     * @default false */
    loop?: boolean;

    /** Триггер ререндера
     * @default step */
    rerenderOn?: RerenderOn;

    /** Отключить таймер
     * @default false */
    disabled?: boolean;

    /** Callback вызываемый при первом запуске */
    onStart?: () => void;

    /** Callback вызываемый при возобновлении */
    onResume?: () => void;

    /** Callback вызываемый при паузе */
    onPause?: () => void;

    /** Callback вызываемый при окончании */
    onFinish?: () => void;
}

export interface UseTimerReturn {
    /** Текущее значение */
    value: number;

    /** Возобновить таймер */
    resume: () => void;

    /** Приостановить таймер */
    pause: () => void;

    /** Перезапустить таймер */
    restart: () => void;
}
