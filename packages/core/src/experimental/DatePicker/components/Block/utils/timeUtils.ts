export const checkHour = (hour: number) => hour >= 0 && hour < 24;
export const checkMinute = (minute: number) => minute >= 0 && minute < 60;
export const checkSecond = (second: number) => second >= 0 && second < 60;

export const isValidTime = (hour: number, minutes: number, seconds: number) => checkHour(hour)
    && checkMinute(minutes) && checkSecond(seconds);
