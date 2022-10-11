import { CSSObject } from '@emotion/react';

export const flexCenter: CSSObject = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export const hidden: CSSObject = {
    '&&': {
        visibility: 'hidden',
    },
};
