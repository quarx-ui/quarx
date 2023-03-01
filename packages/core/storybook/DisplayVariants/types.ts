import { ReactNode } from 'react';

export interface ChildrenProps { children: ReactNode }

export interface DisplayVariantsStyledProps extends ChildrenProps {
    optionTitle?: boolean;
    size?: 'primary' | 'secondary';
    direction?: 'vertical' | 'horizontal';
    containerAlign?: 'flex-start' | 'center' | 'flex-end';
    containerJustify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-evenly';
    variantAlign?: 'flex-start' | 'center' | 'flex-end';
}

export type TitleProps = Pick<DisplayVariantsStyledProps, 'size'>
export type VariantProps = Pick<DisplayVariantsStyledProps, 'optionTitle' | 'variantAlign'>
export type VariantsProps = Pick<DisplayVariantsStyledProps, 'direction' | 'containerJustify' | 'containerAlign'>
export type ContainerProps = Pick<DisplayVariantsStyledProps, 'direction' | 'containerJustify' | 'containerAlign'>
export type TitleOfContainerProps = Pick<DisplayVariantsStyledProps, 'direction'>
export type VerticalContainerProps = Omit<DisplayVariantsStyledProps, 'size' | 'optionTitle'>
