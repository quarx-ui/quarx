import { BaseProps, ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { TimerIconStyleKeys } from '@core/src/main/Snackbar/elements/TimerIcon/styles';

export interface TimerIconPropsWithoutHtml extends
    BaseProps,
    WithClassesAndStyles<TimerIconStyleKeys>
{
    /** Начальное значение таймера */
    initialTimerValue?: number;

    /** Текущее значение таймера */
    timerValue?: number;
}

export type TimerIconProps = ComponentPropsWithHTML<TimerIconPropsWithoutHtml>;
