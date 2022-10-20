import { CSSProperties } from 'react';
import { TransitionProps } from './types';

export const defaultStyles: CSSProperties = {
    opacity: 0,
};

export const defaultMapStatusToStyles: TransitionProps['mapStatusToStyles'] = {
    entering: {
        opacity: 1,
    },
    entered: {
        opacity: 1,
    },
    exiting: {
        opacity: 0,
    },
    exited: {
        opacity: 0,
        visibility: 'hidden',
    },
};
