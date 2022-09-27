export const testLayout = (componentName: string): string => `import { cleanup, render, screen } from '@testing-library/react';
import React, { FC } from 'react';
import userEvent from '@testing-library/user-event';
import { expectPropsMapInClasses } from '@core/test-utils';
import { ${componentName} } from '..';
import { ${componentName}StyleParams } from '../types';

const checkPropsInClasses = (props: Partial<${componentName}StyleParams>) => {
    const {} = props;
    const component = document.querySelector('.Sx${componentName}');
    if (!component) { return; }
    const propsWithDefault = {};

    expectPropsMapInClasses(component as HTMLElement)(propsWithDefault);
};

const checkProps = (Component: FC) => (checkedProps?: Partial<${componentName}StyleParams>) => () => {
    const { asFragment } = render(<Component {...checkedProps}>{Component.displayName}</Component>);

    checkPropsInClasses(checkedProps ?? {});
    expect(asFragment()).toMatchSnapshot();
};

describe('${componentName} snapshots', () => {
    ${componentName}.displayName = '${componentName}';
});

describe('${componentName} behavior', () => {
    it('text should be in the document', () => {
        render(<${componentName}>${componentName}</${componentName}>);

        expect(screen.queryByText('${componentName}')).toBeInTheDocument();
    });
});
`;

export const testPW = (componentName: string): string => `
`;
