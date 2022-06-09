export const expectPropsInClasses = (element: HTMLElement, sxClassname?: string) => (prop: string, value?: string | boolean) => {
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
