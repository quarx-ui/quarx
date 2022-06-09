import { ReactNode } from 'react';

export interface ChildrenProps { children: ReactNode }

export interface StyledProps extends ChildrenProps {
    optionTitle?: boolean,
    size?: 'primary' | 'secondary',
    direction?: 'vertical' | 'horizontal',
    center?: boolean,
    spaceBetween?: boolean,
}

export type TitleProps = Pick<StyledProps, 'size'>
export type VariantProps = Pick<StyledProps, 'optionTitle'>
export type VariantsProps = Pick<StyledProps, 'direction'>
export type ContainerProps = Pick<StyledProps, 'direction' | 'center'>
export type TitleOfContainerProps = Pick<StyledProps, 'direction'>
export type VerticalContainerProps = Omit<StyledProps, 'size' | 'optionTitle'>
