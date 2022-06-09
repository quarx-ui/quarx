/* eslint-disable */

import React, { ComponentType, ReactNode } from 'react';
import {
    GenerateId, Jss, SheetsManager, SheetsRegistry,
} from 'jss';
import * as CSS from 'csstype';
import * as JSS from 'jss';
import { Theme as DefaultTheme } from '../theme';

export interface GenerateClassNameOptions {
    disableGlobal?: boolean;
    productionPrefix?: string;
    seed?: string;
}

export interface StylesCreator<Theme, Props extends object, ClassKey extends string = string> {
    create: (theme: Theme, name: string) => StyleRules<Props, ClassKey>;
    options: {};
    themingEnabled: boolean;
}

export interface StylesProviderProps {
    /**
     * Your component tree.
     */
    children: ReactNode,
    /**
     * You can disable the generation of the styles with this option.
     * It can be useful when traversing the React tree outside of the HTML
     * rendering step on the server.
     * Let's say you are using react-apollo to extract all
     * the queries made by the interface server-side - you can significantly speed up the traversal with this prop.
     */
    disableGeneration: boolean,
    /**
     * JSS's class name generator.
     */
    generateClassName: GenerateId,
    /**
     * By default, the styles are injected last in the <head> element of the page.
     * As a result, they gain more specificity than any other style sheet.
     * If you want to override QuarX-UI's styles, set this prop.
     */
    injectFirst: boolean,
    /**
     * JSS's instance.
     */
    jss: Jss,
    /**
     * @ignore
     */
    serverGenerateClassName: Function,
    /**
     * @ignore
     *
     * Beta feature.
     *
     * Cache for the sheets.
     */
    sheetsCache: null,
    /**
     * @ignore
     *
     * The sheetsManager is used to deduplicate style sheet injection in the page.
     * It's deduplicating using the (theme, styles) couple.
     * On the server, you should provide a new instance for each request.
     */
    sheetsManager: SheetsManager,
    /**
     * @ignore
     *
     * Collect the sheets.
     */
    sheetsRegistry: SheetsRegistry,
}

// Disable automatic export
export {};

type JSSFontface = CSS.AtRule.FontFace & { fallbacks?: CSS.AtRule.FontFace[] };

export type PropsFunc<Props extends object, T> = (props: Props) => T;

/**
 * Allows the user to augment the properties available
 */
export interface BaseCSSProperties extends CSS.Properties<number | string> {
    '@font-face'?: JSSFontface | JSSFontface[];
}

export interface CSSProperties extends BaseCSSProperties {
    // Allow pseudo selectors and media queries
    // `unknown` is used since TS does not allow assigning an interface without
    // an index signature to one with an index signature. This is to allow type safe
    // module augmentation.
    // Technically we want any key not typed in `BaseCSSProperties` to be of type
    // `CSSProperties` but this doesn't work. The index signature needs to cover
    // BaseCSSProperties as well. Usually you would use `BaseCSSProperties[keyof BaseCSSProperties]`
    // but this would not allow assigning React.CSSProperties to CSSProperties
    [k: string]: unknown | CSSProperties;
}

export type BaseCreateCSSProperties<Props extends object = {}> = {
    [P in keyof BaseCSSProperties]: BaseCSSProperties[P] | PropsFunc<Props, BaseCSSProperties[P]>;
};

export interface CreateCSSProperties<Props extends object = {}>
    extends BaseCreateCSSProperties<Props> {
    // Allow pseudo selectors and media queries
    [k: string]:
    | BaseCreateCSSProperties<Props>[keyof BaseCreateCSSProperties<Props>]
    | CreateCSSProperties<Props>;
}

export type Classes = Record<string, string>;

/**
 * This is basically the API of JSS. It defines a Map<string, CSS>,
 * where
 * - the `keys` are the class (names) that will be created
 * - the `values` are objects that represent CSS rules (`React.CSSProperties`).
 *
 * if only `CSSProperties` are matched `Props` are inferred to `any`
 */
export type StyleRules<Props extends object = {}, ClassKey extends string = string> = Record<
ClassKey,
// JSS property bag
| CSSProperties
// JSS property bag where values are based on props
| CreateCSSProperties<Props>
// JSS property bag based on props
| PropsFunc<Props, CreateCSSProperties<Props>>
>;

/**
 * @internal
 */
export type StyleRulesCallback<Theme, Props extends object, ClassKey extends string = string> = (
    theme: Theme,
    props: Props,
) => StyleRules<Props, ClassKey>;

export type Styles<Theme, Props extends object, ClassKey extends string = string> =
    | StyleRules<Props, ClassKey>
    | StyleRulesCallback<Theme, Props, ClassKey>;

export interface WithStylesOptions<Theme = DefaultTheme> extends JSS.StyleSheetFactoryOptions {
    Component?: ComponentType,
    defaultTheme?: Theme;
    flip?: boolean;
    withTheme?: boolean;
    name?: string;
}

export type ClassNameMap<ClassKey extends string = string> = Record<ClassKey, string>;

/**
 * @internal
 */
export type ClassKeyInferable<Theme, Props extends object> = string | Styles<Theme, Props>;
export type ClassKeyOfStyles<StylesOrClassKey> = StylesOrClassKey extends string
    ? StylesOrClassKey
    : StylesOrClassKey extends StyleRulesCallback<any, any, infer ClassKey>
        ? ClassKey
        : StylesOrClassKey extends StyleRules<any, infer ClassKey>
            ? ClassKey
            : never;

/**
 * infers the type of the props used in the styles
 */
export type PropsOfStyles<StylesType> = StylesType extends Styles<any, infer Props> ? Props : {};

/**
 * infers the type of the theme used in the styles
 */
export type ThemeOfStyles<StylesType> = StylesType extends Styles<infer Theme, any> ? Theme : {};

export type WithStyles<
    StylesType extends ClassKeyInferable<any, any>,
    IncludeTheme extends boolean | undefined = false
> = (IncludeTheme extends true ? { theme: ThemeOfStyles<StylesType> } : {}) & {
    classes: ClassNameMap<ClassKeyOfStyles<StylesType>>;
    innerRef?: React.Ref<any>;
} & PropsOfStyles<StylesType>;

export interface StyledComponentProps<ClassKey extends string = string> {
    /**
     * Override or extend the styles applied to the component.
     */
    classes?: Partial<ClassNameMap<ClassKey>>;
    innerRef?: React.Ref<any>;
}

export type ClassKeyMapFromUseStyles<T extends (args: never) => {}> = Partial<Record<keyof ReturnType<T>, string>>;

export interface ClassesFromUseStyles<T extends (args: never) => {}> {
    classes?: ClassKeyMapFromUseStyles<T>,
}

export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

export type Overwrite<T, U> = DistributiveOmit<T, keyof U> & U;

export type StyledComponent<P extends {}> = (props: P) => React.ReactElement<P, any> | null;

/**
 * `T extends ConsistentWith<T, U>` means that where `T` has overlapping properties with
 * `U`, their value types do not conflict.
 *
 * @internal
 */
export type ConsistentWith<DecorationTargetProps, InjectedProps> = {
    [P in keyof DecorationTargetProps]: P extends keyof InjectedProps
        ? InjectedProps[P] extends DecorationTargetProps[P]
            ? DecorationTargetProps[P]
            : InjectedProps[P]
        : DecorationTargetProps[P];
};

/**
 * a function that takes {component} and returns a component that passes along
 * all the props to {component} except the {InjectedProps} and will accept
 * additional {AdditionalProps}
 */
export type PropInjector<InjectedProps, AdditionalProps = {}> = <
    C extends React.ComponentType<ConsistentWith<React.ComponentProps<C>, InjectedProps>>
    >(
    component: C
) => React.ComponentType<
    Omit<JSX.LibraryManagedAttributes<C, React.ComponentProps<C>>, keyof InjectedProps> &
    AdditionalProps
    >;

