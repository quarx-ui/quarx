export const prepareTsxIcon = (name: string, data: string) => (
    `import React, { forwardRef } from 'react';

export const ${name} = forwardRef<
SVGSVGElement,
JSX.IntrinsicElements['svg']
>((props, ref) => (
${data.replace(/<svg (.*)>$/m, '<svg $1 {...props} ref={ref}>')}));`
);
