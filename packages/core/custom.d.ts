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

interface ObjectConstructor {
    keys<T>(obj: T): Array<Exclude<keyof T, symbol | number>>;
    entries<T>(obj: T): Array<[Exclude<keyof T, symbol | number>, T[keyof T]]>;
}
