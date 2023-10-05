import { ThemeProviderProps as EmotionThemeProviderProps } from '@emotion/react';

export interface ThemeProviderProps extends EmotionThemeProviderProps {
    /** Изолировать тему в отдельный ключ, чтобы избежать потенциальных конфликтов с другими темами emotion.
     * Значение по-умолчанию определяется из контекста emotion-темы */
    isolate?: boolean;
}
