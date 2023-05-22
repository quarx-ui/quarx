import { jsx } from '@emotion/react';
import { Fragment } from 'react';
import { CSSInterpolation } from '@emotion/serialize';
import clsx from 'clsx';

export interface AddCssToElementOptions {
    /** Если элемент уже имеет пропс css, то prepend влияет на порядок
     * слияния между пропсом css элемента и переданным в функцию css */
    prepend?: boolean;

    /** Добавить элементу дополнительный className */
    addClassName?: string;
}

export const addCssToElement = (element: any, css: CSSInterpolation, options: AddCssToElementOptions = {}) => {
    const { prepend, addClassName } = options;

    // eslint-disable-next-line no-underscore-dangle
    let clonedElement = element.props.__EMOTION_TYPE_PLEASE_DO_NOT_USE__ || element.type;

    if (element === Fragment || clonedElement === Fragment) {
        clonedElement = 'div';
    }

    const clonedProps = {
        key: element.key,
        ref: element.ref,
        ...element.props,
        css: prepend
            ? [css, element.props.css]
            : [element.props.css, css],
        className: clsx(element.props.className, addClassName),
    };

    return jsx(clonedElement, clonedProps);
};
