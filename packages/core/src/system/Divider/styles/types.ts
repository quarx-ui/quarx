import { Orientation } from '@core/enums';
import { PaletteStandardKey } from '@core/styles';

export interface DividerStyleParams {
    /** Плоскость, в которой расположен компонент
     *
     * - **vertical** – вертикально
     *
     * - **horizontal** – горизонтально
     *
     * @default horizontal */
    orientation: Orientation;

    /** Отступы по краям разделителя
     *
     * - **false** – без отступов по краям
     *
     * - **true** – отступы по краям будут равны 4px и 8px
     * для вертикального и горизонтального положений соответственно
     *
     * - **number** – кастомный отступ, одинаковый для каждой из двух сторон разделителя
     *
     * - [**number**, **number**] – кастомный отступ, отдельные значения для начала и конца разделителя
     *
     *
     * @default false */
    indent: boolean | number | [number, number];

    /** Цвет разделителя
     *
     * - **main** и **secondary** – выбор цвета из темы, соответствует
     * значениям `palette.border.main` и `palette.border.secondary`
     * - **string** – любое строковое значение для цвета по стандарту css
     *
     * @default main */
    color: PaletteStandardKey | string;
}
