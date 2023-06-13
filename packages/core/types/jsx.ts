import { ReactElement, SVGProps, ElementType, ComponentPropsWithRef } from 'react';
import { WithDataTestId } from '@quarx-ui/core';

export type JsxTag = keyof JSX.IntrinsicElements;

export interface Clickable {
    click(): void;
}

export type SVGIcon = ReactElement<SVGProps<SVGElement>>;

export type ComponentHTMLAttributes<
    Props,
    Element extends JsxTag = 'div'
> = Omit<JSX.IntrinsicElements[Element], keyof Props | 'ref'>

export type ComponentPropsWithHTML<
    Props,
    Element extends JsxTag = 'div'
> = Props & ComponentHTMLAttributes<Props, Element> & WithDataTestId

export type MergeProps<P, O> = P & Omit<O, keyof P>

export type OverridableProps<P, C extends ElementType> = P & { component?: C }

export type OverridableComponentRef<C extends ElementType> = ComponentPropsWithRef<C>['ref'];

export interface OverridableComponent<
    Props extends Record<string, any>, // eslint-disable-line @typescript-eslint/no-explicit-any
    Tag extends JsxTag
> {
    <C extends ElementType>(
        props: {
            /**
             * Компонент или jsx-тег, используемый в качестве корневого элемента
             */
            component: C;
        } & MergeProps<Props, ComponentPropsWithRef<C>>
    ): JSX.Element | null;
    (props: ComponentPropsWithHTML<Props, Tag>): JSX.Element | null;
}
