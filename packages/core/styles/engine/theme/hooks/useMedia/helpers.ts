import { SxDevice } from '@core/enums';
import { BREAKPOINT_KEYS, BreakpointKey } from '../../breakpoints';

export const removeMediaPrefix = (query: string): string => (
    query.replace(/^@media( ?)/m, '')
);

export const deviceToBreakpoint: Record<SxDevice, BreakpointKey> = {
    mobile: BREAKPOINT_KEYS.XS,
    tablet: BREAKPOINT_KEYS.S,
    smallDesktop: BREAKPOINT_KEYS.M,
    desktop: BREAKPOINT_KEYS.L,
};
