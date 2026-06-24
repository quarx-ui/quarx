declare module '*.png';
declare module '*.md' {
    export const MarkDown: string;
    export default MarkDown;
}
declare module '*.md?raw' {
    export const MarkDown: string;
    export default MarkDown;
}
declare module '*.svg';
declare module '*.svg' {
    export const ReactComponent: import('react').SFC<import('react').SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
declare module '*.svg?react' {
    const ReactComponent: import('react').SFC<import('react').SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}

interface ObjectConstructor {
    keys<T>(obj: T): Array<Exclude<keyof T, symbol | number>>;
    entries<T>(obj: T): Array<[Exclude<keyof T, symbol | number>, T[keyof T]]>;
}
