import { SxDevice } from '@core/enums';
import { Breakpoints } from '../../breakpoints';

export type UseMediaArg =
    | string
    | SxDevice
    | ((breakpoints: Breakpoints) => string)
