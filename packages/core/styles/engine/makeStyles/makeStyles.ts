import { css } from '@emotion/react';
import { DefaultStyles, extractStyles, QX_PREFIX, Styles, StylesCallback } from '@core/styles';
import { StylesMap } from '@core/styles/engine/types';
import { flattenDeep } from '@core/utils';
import { MakeStylesOptions, UseStylesProps, UseStylesPropsWithParams } from './types';
import { useTheme } from '../theme';

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
    StyleParams extends object,
    ClassKey extends string = string,
    CSSVars extends string = string,
>(
    styles: Styles<ClassKey> | StylesCallback<ClassKey, StyleParams, CSSVars>,
    options: MakeStylesOptions = {},
): keyof StyleParams extends never
        ? (props?: UseStylesProps<StyleParams, ClassKey, CSSVars>) => StylesMap<ClassKey>
        : (props: UseStylesPropsWithParams<StyleParams, ClassKey, CSSVars>) => StylesMap<ClassKey> {
    return (props?: any) => {
        const theme = useTheme();
        const { cssPrefix, overwritesStyles } = props ?? {};
        const { name = cssPrefix ?? 'makeStyles' } = options;

        const overwrites = name?.startsWith(QX_PREFIX)
            ? theme.defaultStyles?.[name.replace(QX_PREFIX, '') as keyof DefaultStyles]
            : undefined;

        const combinedStyles = extractStyles(
            {
                theme,
                params: props?.params,
                vars: props?.cssVars,
            },
            /* От порядка в массиве зависит приоритетность наложения стилей
            * Базовые стили должны идти первыми, после них стили из темы, последними – из пропсов */
            [
                styles,
                overwrites,
                ...flattenDeep(props?.styles),
                overwritesStyles,
            ],
        );

        return Object.entries(combinedStyles)
            .reduce((acc, [key, cssInterpolationArr]) => {
                const label = `${name}-${key}`;

                acc[key as ClassKey] = css(cssInterpolationArr, { label });
                return acc;
            }, {} as StylesMap<ClassKey>);
    };
}
