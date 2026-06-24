declare module '*.md' {
    export const MarkDown: string;
    export default MarkDown;
}

declare module '*.md?raw' {
    export const MarkDown: string;
    export default MarkDown;
}

declare module '*.png';
declare module '*.png' {
    export const Image: any;
    export default Image;
}

declare module '*.svg?react' {
    import { SFC, SVGProps } from 'react';

    const ReactComponent: SFC<SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}
