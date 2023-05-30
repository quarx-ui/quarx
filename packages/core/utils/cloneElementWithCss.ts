import { CElement, Children, cloneElement, DetailedReactHTMLElement, Fragment } from 'react';
import clsx from 'clsx';
import { jsx } from '@emotion/react';
import { omitProps } from './object';

export interface CloneElementWithCssOptions {
    /** Если элемент уже имеет пропс css, то prepend влияет на порядок
     * слияния между пропсом css элемента и переданным в функцию css */
    prepend?: boolean;
}

/* eslint-disable @typescript-eslint/no-explicit-any,  @typescript-eslint/ban-types */
export const cloneElementWithCss = (
    element: any,
    props: Record<string, unknown> | {} = {},
    options: CloneElementWithCssOptions = {},
): DetailedReactHTMLElement<any, any> | CElement<any, any> => {
    /* eslint-enable @typescript-eslint/no-explicit-any,  @typescript-eslint/ban-types */
    if (element === null || typeof element !== 'object') {
        return element;
    }

    const { css, className } = props as Record<string, unknown>;

    if (!css || !element.props) {
        return cloneElement(element, props);
    }

    if (Array.isArray(element)) {
        return Children.map(element, (child, i) => (
            cloneElementWithCss(child, { ...props, key: i }, options)
        ));
    }

    const { prepend } = options;

    // eslint-disable-next-line no-underscore-dangle
    const clonedElement = element.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__ || element.type;

    if (element === Fragment || clonedElement === Fragment) {
        return cloneElementWithCss(element.props.children, props, options);
    }

    const omittedProps = omitProps(
        props as Record<string, unknown>,
        ['css', 'className', 'key'],
    );

    const clonedProps = {
        key: element.key,
        ref: element.ref,
        ...element.props,
        ...omittedProps,
        css: prepend
            ? [css, element.props.css]
            : [element.props.css, css],
        className: clsx(element.props.className, className as string | undefined),
    };

    return jsx(clonedElement, clonedProps);
};
