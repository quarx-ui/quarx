import React, { FC } from 'react';
import { render } from '@testing-library/react';

export const expectRootCn = <T extends FC<{ className?: string, children: any }>>(Component: T, name: string) => {
    const className = 'test-class-name';
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { container: { firstChild: rootNode } } = render(<Component className={className} />);
    expect(rootNode).toHaveClass(className);
    expect(rootNode).toHaveClass(name);
};
