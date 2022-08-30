import { ComponentPropsWithHTML, WithClassesAndStyles } from '@core';
import { ReactNode } from 'react';
import { AvatarStyleKeys, AvatarStyleParams } from './styles';

export interface AvatarPropsWithoutHtml extends
    Partial<AvatarStyleParams>,
    WithClassesAndStyles<AvatarStyleKeys, AvatarStyleParams>,
    AvatarImageProps
{
    className?: string,
    children?: ReactNode,
}

export type AvatarImagePropKeys =
| 'alt'
| 'src'
| 'srcSet'
| 'crossOrigin'
| 'referrerPolicy'

export type AvatarImageProps = Pick<JSX.IntrinsicElements['img'], AvatarImagePropKeys>;
export type AvatarProps = ComponentPropsWithHTML<AvatarPropsWithoutHtml>;
export * from './styles/types';
