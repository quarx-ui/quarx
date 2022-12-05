import { valuesAsKeysFromArray } from '@core';

export const CLICK_AWAY_LISTENER_SYNTHETIC_MOUSE_EVENTS = valuesAsKeysFromArray([
    'onClick',
    'onMouseDown',
    'onMouseUp',
    'onPointerDown',
    'onPointerUp',
]);

export const CLICK_AWAY_LISTENER_SYNTHETIC_TOUCH_EVENTS = valuesAsKeysFromArray([
    'onTouchEnd',
    'onTouchStart',
]);
