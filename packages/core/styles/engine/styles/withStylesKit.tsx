/* eslint-disable */

import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { getDisplayName } from '../utils';
import { makeStylesKit } from '@core/styles';
import {
    ClassKeyOfStyles,
    PropInjector,
    PropsOfStyles,
    StyledComponentProps,
    Styles,
    ThemeOfStyles, WithStyles,
    WithStylesOptions,
} from './types';

// Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.

export const withStylesKit = <
    StylesType extends Styles<any, any>,
    Options extends WithStylesOptions<ThemeOfStyles<StylesType>>
>(styles: StylesType, options?: Options): PropInjector<
WithStyles<StylesType, Options['withTheme']>,
StyledComponentProps<ClassKeyOfStyles<StylesType>> & PropsOfStyles<StylesType>
// @ts-ignore
> => (Component) => {
    const {
            defaultTheme, withTheme = false, name, ...stylesOptions
        } = options || {};

    if (process.env.NODE_ENV !== 'production') {
        if (Component === undefined) {
            throw new Error(
                [
                    'You are calling withStyles(styles)(Component) with an undefined component.',
                    'You may have forgotten to import it.',
                ].join('\n'),
            );
        }
    }

    let classNamePrefix = name;

    if (process.env.NODE_ENV !== 'production') {
        if (!name) {
            // Provide a better DX outside production.
            const displayName = getDisplayName(Component);
            if (displayName !== undefined) {
                classNamePrefix = displayName;
            }
        }
    }

    const useStyles = makeStylesKit(styles, {
        defaultTheme,
        // @ts-ignore
        Component,
        name: name || Component.displayName,
        classNamePrefix,
        ...stylesOptions,
    });

    const WithStyles = React.forwardRef((props, ref) => {
        // @ts-ignore
        const { classes: classesProp, innerRef, ...other } = props;
        // The wrapper receives only user supplied props, which could be a subset of
        // the actual props Component might receive due to merging with defaultProps.
        // So copying it here would give us the same result in the wrapper as well.
        const classes = useStyles({ ...Component.defaultProps, ...props });

        // @ts-ignore
        return <Component ref={innerRef || ref} classes={classes} {...(other)} />;
    });

    if (process.env.NODE_ENV !== 'production') {
        // @ts-ignore
        WithStyles.displayName = `WithStyles(${getDisplayName(Component)})`;
    }

    hoistNonReactStatics(WithStyles, Component);

    return WithStyles;
};
