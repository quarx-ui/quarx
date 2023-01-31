import {
    BaseProps,
    BreadCrumbVisualProps,
    ComponentPropsWithHTML,
    WithClassesAndStyles,
} from '@core';
import { BreadcrumbStyleParams } from '../struct';
import { BreadcrumbStyleKeys } from './styles';

export interface BreadcrumbPropsWithoutHtml extends
    BaseProps<HTMLAnchorElement>,
    Partial<BreadcrumbStyleParams>,
    WithClassesAndStyles<BreadcrumbStyleKeys, BreadcrumbStyleParams>,
    BreadCrumbVisualProps
{}

export type BreadcrumbProps = ComponentPropsWithHTML<BreadcrumbPropsWithoutHtml, 'a'>;
