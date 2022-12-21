declare module '*.png';
declare module '*.svg';
declare module '*.svg' {
    // eslint-disable-next-line import/newline-after-import
    import { SFC, SVGProps } from 'react';
    export const ReactComponent: SFC<SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
