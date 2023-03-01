import { css, CSSObject } from '@emotion/react';
import { MakeStylesOptions } from './types';
import { useTheme} from '../theme';
import { extractStyles, StylesWithCallback, StylesCallback, Styles } from '@core/styles';
import { StylesMap } from '@core/styles/engine/types';

/** Функция для создания стилей компонента с использованием глобальной темы и переданных параметров
 *
 * @param styles Объект с ключами элементов компонента, под которыми описаны
 * их стили. Либо функция, которая возвращает такой объект
 *
 * @param options Объект с дополнительными настройками
 *
 * @param options.name имя компонента, которое будет использовано при генерации уникального класса для привязки css стилей
 *
 * @return useStyles – Хук для генерации стилей
 *
 * Вызывается внутри компонента, может принимать параметры стилей, а также параметр `styles` –
 * переопределения стилей элементов по их ключу
 */
export function makeStyles<
    Props extends object,
    ClassKey extends string = string,
    CSSVars extends string = string,
>(
    styles: Styles<ClassKey> | StylesCallback<ClassKey, Props, CSSVars>,
    options: MakeStylesOptions = {}
): keyof Props extends never
    ? (props?: any) => StylesMap<ClassKey>
    : (props: Props & {
        styles?: Partial<StylesWithCallback<ClassKey, Props, CSSVars>> | StylesCallback<ClassKey, Props, CSSVars>,
        cssVars?: Partial<Record<CSSVars, string>>,
    }) => StylesMap<ClassKey> {
    return (props?: any) => {
        const theme = useTheme();

        const { name = 'makeStyles' } = options;

        const stylesObject = typeof styles === 'function'
            ? styles(theme, props, props?.cssVars)
            : styles
        const overwrites = extractStyles(props, theme, props?.styles, props?.cssVars);

        return Object.entries(stylesObject)
            .reduce((acc, [key, cssObject]) => {
                acc[key as ClassKey] = css([cssObject as CSSObject, overwrites?.[key]], { label: `${name}-${key}` });
                return acc;
            }, {} as StylesMap<ClassKey>);
    };
}
