import { ThemeProviderProps } from '@emotion/react/types/theming';
import { CreateThemeArg, PaletteType, Theme } from '@core';

export interface SystemBasedThemeProviderProps extends Partial<ThemeProviderProps> {
    /** Тип темы
     * @default light */
    themeType?: PaletteType;
    /** Отключить проверку системной темы
     * @default false */
    disableCheckSystemTheme?: boolean;
    /** Аргументы создания темы */
    createThemeArgs?: CreateThemeArg;
    /** Явная тема, которая 100% присвоится не смотря ни на что (отключает логику) */
    theme?: Theme;
}
