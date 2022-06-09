declare module '*.png';
declare module '*.svg';
declare module '*.svg' {
    // eslint-disable-next-line import/newline-after-import
    import React from 'react';
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
