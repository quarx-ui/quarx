import React, { ComponentType } from 'react';
import { screen, render } from '@testing-library/react';

export const expectPropsInClasses = (
    element: HTMLElement,
    sxClassname?: string,
) => (
    prop: string,
    value?: string | boolean,
) => {
    const sxSelector = sxClassname ?? element.classList[0];

    const valueIsBoolean = typeof value === 'boolean' || value === 'true' || value === 'false';
    const booleanClassname = value === true || value === 'true' ? `${sxSelector}_${prop}` : undefined;

    const expectedClassname = booleanClassname
        ?? (!valueIsBoolean
            ? `${sxSelector}_${prop}_${value}`
            : undefined);

    if (!expectedClassname) {
        return null;
    }

    return expect(element).toHaveClass(expectedClassname);
};

export const expectPropsMapInClasses = (element: HTMLElement, sxClassname?: string) => {
    const expectPropInClasses = expectPropsInClasses(element, sxClassname);

    return (expectedProps: Record<string, string | boolean>) => {
        Object.keys(expectedProps).forEach((prop) => {
            expectPropInClasses(prop, expectedProps[prop]);
        });
    };
};

export const testStyleParams = <
    S extends Record<string, any>,
    P extends Record<string, any> = Record<string, any>,
>(
    Component: ComponentType<P>,
    defaultProps?: P,
) => (props: { [key in keyof S]: S[key][] }) => {
    Object.entries(props).forEach(([propName, values]) => {
        describe(propName, () => {
            Object.values(values).forEach((value) => {
                it(`${value}`, () => {
                    const testId = `testStyleParams-${propName}-${value}`;

                    const testProps = { [propName]: value };
                    const { asFragment } = render(
                        <Component
                            {...(defaultProps ?? {})}
                            {...testProps as P}
                            data-testid={testId}
                        />,
                    );

                    const element = screen.getByTestId(testId);
                    expectPropsMapInClasses(element)(testProps as S);
                    expect(asFragment()).toMatchSnapshot();
                });
            });
        });
    });
};
