import { CSSInterpolation } from '@emotion/serialize';

export type Classes<Keys extends string> = Partial<Record<Keys, string>>

export interface WithClassesAndStyles<Keys extends string> {
    /** Объект с дополнительными именами классов для компонента. Обеспечивает возможность
     * добавить кастомное имя класса в один из внутренних элементов по ключу стилей для этого элемента */
    classes?: Classes<Keys>
    /** Объект с переопределениями стилей для элементов компонента */
    styles?: Partial<Record<Keys, CSSInterpolation>>
}
