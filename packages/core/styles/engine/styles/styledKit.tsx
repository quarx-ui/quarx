import * as React from 'react';
import { getDisplayName } from '@core/styles/engine/utils';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { Ref } from 'react';
import { CreateCSSProperties, Overwrite, StyledComponentProps, WithStylesOptions, StyledComponent } from './types';
import { Theme as DefaultTheme } from '../theme';
import { makeStylesKit } from './makeStylesKit';

export default function chainPropTypes<A, B>(
    propType1: PropTypes.Validator<A>,
    propType2: PropTypes.Validator<B>,
): PropTypes.Validator<A & B> {
    if (process.env.NODE_ENV === 'production') {
        return () => null;
    }

    return function validate(...args) {
        return propType1(...args) || propType2(...args);
    };
}

export type ComponentCreator<Component extends React.ElementType> = <
    Theme = DefaultTheme,
    // eslint-disable-next-line @typescript-eslint/ban-types
    Props extends {} = React.ComponentPropsWithoutRef<Component>
>(
    styles:
    | CreateCSSProperties<Props>
    | ((props: { theme: Theme } & Props) => CreateCSSProperties<Props>),
    options?: WithStylesOptions<Theme>
) => StyledComponent<
Omit<
JSX.LibraryManagedAttributes<Component, React.ComponentProps<Component>>,
'classes' | 'className'
> &
StyledComponentProps<'root'> &
Overwrite<Props, { className?: string; theme?: Theme }>
>;

export interface StyledProps {
    className: string;
}

/* eslint-disable */

function omit(input: Record<string,any>, fields: string[]) {
    const output : Record<string,any> = {};

    Object.keys(input).forEach((prop) => {
        if (fields.indexOf(prop) === -1) {
            output[prop] = input[prop];
        }
    });

    return output;
}

export function styledKit<ComponentType extends React.ElementType>(Component: ComponentType) {
    function componentCreator<
        Theme = DefaultTheme,
        Props extends {} = React.ComponentPropsWithoutRef<ComponentType>
        >(
            style :
            | CreateCSSProperties<Props>
            | ((props: { theme: Theme } & Props) => CreateCSSProperties<Props>),

            options : WithStylesOptions<Theme> = {}
    ) : StyledComponent<
        Omit<
            JSX.LibraryManagedAttributes<ComponentType, React.ComponentProps<ComponentType>>,
            'classes' | 'className'
            > &
        StyledComponentProps<'root'> &
        Overwrite<Props, { className?: string; theme?: Theme }>
        > {
        const { name, ...stylesOptions } = options;

        if (process.env.NODE_ENV !== 'production' && Component === undefined) {
            throw new Error(
                [
                    'QuarX-UI: You are calling styled(Component)(style) with an undefined component.',
                    'You may have forgotten to import it.',
                ].join('\n'),
            );
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

    const stylesOrCreator =
        typeof style === 'function'
            ? (theme : any) => ({ root: (props: any) => style({ theme, ...props }) })
            : { root: style };

        // @ts-ignore
        const useStyles = makeStylesKit(stylesOrCreator, { Component, name: name || Component.displayName,
        classNamePrefix,
        ...stylesOptions,
    });

    let filterProps: any;
    let propTypes = {};
    // @ts-ignore
    if (style.filterProps) {
        // @ts-ignore
        filterProps = style.filterProps;
        // @ts-ignore

        delete style.filterProps;
    }

        // @ts-ignore
    if (style.propTypes) {
        // @ts-ignore
        propTypes = style.propTypes;
        // @ts-ignore
        delete style.propTypes;
    }


    const StyledComponent = React.forwardRef(function StyledComponent<P extends Record<string, any>>(props: P, ref : Ref<ComponentType>) : React.ReactElement<P, any> | null {
        const {
            children,
            className: classNameProp,
            clone,
            component: ComponentProp,
            ...other
        } = props;
        // @ts-ignore
        const classes = useStyles(props);
        const className = clsx(classes.root, classNameProp);

        let spread: Record<string, any> = other;
        if (filterProps) {
            spread = omit(spread, filterProps);
        }

        if (clone) {
            // @ts-ignore
            return React.cloneElement(children, {
                className: clsx(children.props.className, className),
                ...spread,
            });
        }

        if (typeof children === 'function') {
            return children({ className, ...spread });
        }

        const FinalComponent = ComponentProp || Component;

        return (
            <FinalComponent ref={ref} className={className} {...spread}>
                {children}
            </FinalComponent>
        );
    });
    // @ts-ignore
    StyledComponent.propTypes = {
        /**
         * A render function or node.
         */
        children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
        /**
         * @ignore
         */
        className: PropTypes.string,
        /**
         * If `true`, the component will recycle it's children HTML element.
         * It's using `React.cloneElement` internally.
         *
         * This prop will be deprecated and removed in v5
         */
        clone: chainPropTypes(PropTypes.bool, (props) => {
            if (props.clone && props.component) {
                return new Error('QuarX-UI: You can not use the clone and component prop at the same time.');
            }
            return null;
        }),
        /**
         * The component used for the root node.
         * Either a string to use a HTML element or a component.
         */
        component: PropTypes /* @typescript-to-proptypes-ignore */.elementType,
        ...propTypes,
    };

    if (process.env.NODE_ENV !== 'production') {
        // @ts-ignore
        StyledComponent.displayName = `StyledKit(${classNamePrefix})`;
    }

        // @ts-ignore
        hoistNonReactStatics(StyledComponent, Component);

    return StyledComponent;
}

return componentCreator;
}
