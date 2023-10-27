import {
    BaseProps,
    BreadCrumbVisualProps,
    ComponentPropsWithHTML,
    WithClassesAndStyles,
} from '@core';
import { BreadcrumbStyleParams } from '../struct';
import { DroppedBreadcrumbStyleKeys } from './styles';

export interface DroppedBreadcrumbPropsWithoutHtml extends
    BaseProps<HTMLAnchorElement>,
    Partial<BreadcrumbStyleParams>,
    WithClassesAndStyles<DroppedBreadcrumbStyleKeys, BreadcrumbStyleParams>,
    BreadCrumbVisualProps
{}

export type DroppedBreadcrumbProps = ComponentPropsWithHTML<DroppedBreadcrumbPropsWithoutHtml, 'a'>;
