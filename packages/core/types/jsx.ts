import { ReactElement, SVGProps } from 'react';

export interface Clickable {
    click(): void;
}

export type SVGIcon = ReactElement<SVGProps<SVGElement>>;

export type ComponentHTMLAttributes<
    Props,
    Element extends keyof JSX.IntrinsicElements = 'div'
> = Omit<JSX.IntrinsicElements[Element], keyof Props | 'ref'>

export type ComponentPropsWithHTML<
    Props,
    Element extends keyof JSX.IntrinsicElements = 'div'
> = Props & ComponentHTMLAttributes<Props, Element>
