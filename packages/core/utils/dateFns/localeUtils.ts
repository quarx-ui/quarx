import * as Locales from 'date-fns/locale';
import { Locale } from 'date-fns';

/**
 * Геттер локали из date-fns. Т.к при прямом импорте локали в некоторых файлах могут случаться проблемы с путями и
 * сборкой.
 * @param localeKey Ключ, по которому нужно брать локаль.
 * @returns date-fns locale.
 */
export function getDateFnsLocale(localeKey: keyof typeof Locales): Locale {
    return Locales[localeKey];
}
