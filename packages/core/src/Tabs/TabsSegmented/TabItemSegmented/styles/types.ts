import { SxBorderSize, PaletteColor } from '@core';
import { TabsSize } from '../../../common';

export interface TabItemSegmentedStyleParams {
    icon: boolean,
    color: PaletteColor,
    size: TabsSize,
    selected: boolean,
    borderRadius: SxBorderSize,
}
