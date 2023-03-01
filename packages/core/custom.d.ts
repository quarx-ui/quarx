declare module '*.png';
declare module '*.md';
declare module '*.svg';
declare module '*.svg' {
    // eslint-disable-next-line import/newline-after-import
    import { SFC, SVGProps } from 'react';
    export const ReactComponent: SFC<SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

declare module '*.png' {
    const value: any;
    export default value;
}
