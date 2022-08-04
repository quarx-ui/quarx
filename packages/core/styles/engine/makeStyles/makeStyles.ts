import { css, CSSObject } from '@emotion/react';
import { MakeStylesOptions } from './types';
import { useTheme, Theme as DefaultTheme } from '../theme';
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
    // eslint-disable-next-line @typescript-eslint/ban-types
    Props extends {},
    Theme extends DefaultTheme = DefaultTheme,
    ClassKey extends string = string
>(styles: Partial<Styles<ClassKey>> | StylesCallback<ClassKey, Props, Theme>, options: MakeStylesOptions = {}): keyof Props extends never
    ? (props?: any) => StylesMap<ClassKey>
    : (props: Props & {
        styles?: Partial<StylesWithCallback<ClassKey, Props>> | StylesCallback<ClassKey, Props, Theme>
    }) => StylesMap<ClassKey> {
    return (props?: any) => {
        const theme = useTheme();

        const { name = 'makeStyles' } = options;

        // const stylesObject = extractStyles(props, theme as Theme, styles);
        const stylesObject = typeof styles === 'function'
            ? styles(theme as Theme, props)
            : styles
        const overwrites = extractStyles(props, theme as Theme, props?.styles);

        return Object.entries(stylesObject)
            .reduce((acc, [key, cssObject]) => {
                acc[key as ClassKey] = css([cssObject as CSSObject, overwrites?.[key]], { label: `${name}-${key}` });
                return acc;
            }, {} as StylesMap<ClassKey>);
    };
}
