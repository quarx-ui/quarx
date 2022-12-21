import classNames from 'clsx';
import { cloneElement, ReactElement } from 'react';

type ModifyChildClasses = (child?: ReactElement, ...externalClassNames: Array<string>) => ReactElement | undefined

export const modifyChildClasses: ModifyChildClasses = (child?, ...externalClassNames) => {
    if (!child) { return undefined; }
    const localClassnames = classNames(child.props.className, ...externalClassNames);
    const props = { className: localClassnames };

    return cloneElement(child, props);
};

export { classNames };
