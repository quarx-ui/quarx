import {
    BREADCRUMB_TYPE,
    BreadcrumbsProps,
    BreadCrumbsSlice,
    isCustomCollapseSettings,
    MINIMUM_CRUMBS_COLLAPSIBLE_NUMBER,
    useId,
} from '@core';
import { mapSizeToSpacing } from './maps';

type UseBreadcrumbsStateProps = Required<Pick<BreadcrumbsProps,
| 'hidden'
| 'type'
| 'size'
| 'collapse'
| 'crumbs'
>>;

interface UseBreadcrumbsState {
    /** Необходимо ли показывать breadcrumbs */
    showed: boolean;

    /** Расстояние между компонентами */
    breadcrumbsSpacing: string;

    /** Возможно ли скрыть часть Breadcrumbs */
    collapsible: boolean;

    /** Слайс breadcrumbs для скрытия */
    slice: BreadCrumbsSlice;

    /** Уникальный идентификатор компонента с троеточием */
    ellipsisId: string;
}

export const useBreadcrumbsState = ({
    hidden,
    type,
    size,
    collapse,
    crumbs,
}: UseBreadcrumbsStateProps): UseBreadcrumbsState => {
    // CONDITIONS
    const isEmpty = crumbs.length === 0;
    const collapsiblePresetCondition = Boolean(collapse) && crumbs.length >= MINIMUM_CRUMBS_COLLAPSIBLE_NUMBER;
    const collapsible = isCustomCollapseSettings(collapse, crumbs.length) || collapsiblePresetCondition;

    // STATES
    const ellipsisId = useId();
    const breadcrumbsSpacing = type === BREADCRUMB_TYPE.link
        ? mapSizeToSpacing[size]
        : '2px';
    const slice: BreadCrumbsSlice = isCustomCollapseSettings(collapse, crumbs.length)
        ? collapse
        : { start: 1, end: -3 };

    return {
        showed: !hidden && !isEmpty,
        breadcrumbsSpacing,
        collapsible,

        slice,
        ellipsisId,
    };
};
