import { QxDevice } from '@core/enums';
import { Breakpoints } from '../../breakpoints';

export type UseMediaArg =
    | string
    | QxDevice
    | ((breakpoints: Breakpoints) => string)
