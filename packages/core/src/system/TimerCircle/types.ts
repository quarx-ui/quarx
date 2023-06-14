import { BaseProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { UseTimerOptions } from '@core/utils/hooks/useTimer/types';
import { TimerCircleStyleKeys } from './styles';

export interface TimerCirclePropsWithoutHtml extends
    BaseProps,
    WithClassesAndStyles<TimerCircleStyleKeys>,
    Omit<UseTimerOptions, 'rerenderOn' | 'loop' | 'timeScale' | 'onPause' | 'onResume'>
{
    /** Количество отрезков в одном круге
     * @default 5 */
    circleSegments?: number;

    /** Текущее значение таймера
     * @default circleSegments */
    value?: number;
}

export type TimerCircleProps = ComponentPropsWithHTML<TimerCirclePropsWithoutHtml>;
