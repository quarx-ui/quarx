import { SxBorderSize, PaletteColor } from '@core';
import { TabsSize } from '../../../common';

export interface TabItemContainedStyleParams {
    color: PaletteColor,
    size: TabsSize,
    selected: boolean,
    borderRadius: SxBorderSize,
}
