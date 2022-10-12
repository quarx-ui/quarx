declare module '*.png';
declare module '*.svg';
declare module '*.svg' {
    // eslint-disable-next-line import/newline-after-import
    import React from 'react';
    export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module '*.png' {
    const value: any;
    export default value;
}
