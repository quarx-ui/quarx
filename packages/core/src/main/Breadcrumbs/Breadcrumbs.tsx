import {
    ForwardedRef,
    forwardRef,
    Fragment,
    ReactElement,
} from 'react';
import {
    Breadcrumb,
    BreadCrumbStruct,
    Popup,
    Stack,
    PALETTE_COLORS,
    usePropsOverwrites,
    QX_SIZE,
} from '@core';
import { BreadcrumbsProps } from './types';
import { useStyles } from './styles';
import { BREADCRUMB_TYPE } from './Breadcrumb/styles/constants';
import { DroppedBreadcrumb } from './DroppedBreadcrumb';
import { createOnClickHandler } from './helpers';
import { useBreadcrumbsState } from './useBreadcrumbsState';
import { useBreadcrumbsNavigation } from './useBreadcrumbsNavigation';

export const Breadcrumbs = forwardRef(<S extends BreadCrumbStruct = BreadCrumbStruct>(
    initialProps: BreadcrumbsProps<S>,
    ref: ForwardedRef<HTMLDivElement>,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('Breadcrumbs', initialProps);
    const {
        hidden = false,

        size = QX_SIZE.medium,
        color = PALETTE_COLORS.brand,
        type = BREADCRUMB_TYPE.link,
        disableFocus = false,

        crumbs,
        divider: externalDivider,
        maxCurrentCrumbTextLength = 32,
        maxCrumbTextLength = 24,
        collapse = false,

        BreadcrumbComponent = Breadcrumb,
        EllipsisBreadcrumbComponent = Breadcrumb,
        DroppedBreadcrumbComponent = DroppedBreadcrumb,

        PopupProps,

        ...restProps
    } = props;

    const params = { size, color, type, disableFocus };
    const styles = useStyles({ params, ...styleProps });

    const {
        showed,
        breadcrumbsSpacing,
        collapsible,

        slice,
        ellipsisId,
    } = useBreadcrumbsState({ hidden, type, size, collapse, crumbs });

    const {
        breadcrumbButtonRef,
        dropdownStackRef,
        crumbsStackRef,

        dropdownVisibility,
        hideDropdown,

        ellipsisClickHandler,
        dropdownKeysHandler,
    } = useBreadcrumbsNavigation();

    if (!showed) { return null; }

    const renderCrumbs = (elements: BreadCrumbStruct[]): ReactElement[] => (
        elements.map((crumb) => {
            const { text, ...struct } = crumb;
            const isLastElement = crumb.value === crumbs[crumbs.length - 1].value;
            const maxLength = isLastElement
                ? maxCurrentCrumbTextLength
                : maxCrumbTextLength;

            return (
                <BreadcrumbComponent
                    {...struct}
                    {...params}
                    key={crumb.value}
                    maxCrumbLength={maxLength}
                    onClick={createOnClickHandler(crumb)}
                >
                    {text}
                </BreadcrumbComponent>
            );
        })
    );

    return (
        <Fragment>
            <div
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
                {...restProps}
            >
                <Stack
                    ref={crumbsStackRef}
                    className={cn('stack')}
                    css={styles.stack}
                    direction="row"
                    spacing={breadcrumbsSpacing}
                    divider={(
                        <div
                            className={cn('divider')}
                            css={styles.divider}
                        >
                            {externalDivider ?? '/'}
                        </div>
                    )}
                >
                    {!collapsible
                        ? renderCrumbs(crumbs)
                        : [
                            ...slice.start > 0
                                ? renderCrumbs(crumbs.slice(0, slice.start))
                                : [],
                            <EllipsisBreadcrumbComponent
                                ref={breadcrumbButtonRef}
                                key={ellipsisId}
                                {...params}
                                value="ellipsis"
                                link="#"
                                onClick={ellipsisClickHandler}
                            >
                                ...
                            </EllipsisBreadcrumbComponent>,
                            ...renderCrumbs(crumbs.slice(slice.end)),
                        ]}
                </Stack>
            </div>
            <Popup
                open={dropdownVisibility}
                anchor={breadcrumbButtonRef}
                onClickAway={hideDropdown}
                placement="bottom-start"
                className={cn('popup')}
                css={styles.popup}
                disableBackdrop
                {...PopupProps}
                modifiersOptions={{
                    offset: 8,
                    ...PopupProps?.modifiersOptions,
                }}
            >
                <Stack
                    spacing="4px"
                    direction="column"
                    ref={dropdownStackRef}
                    onKeyDown={dropdownKeysHandler}
                >
                    {crumbs.slice(slice.start, slice.end).map((crumb) => (
                        <DroppedBreadcrumbComponent
                            key={crumb?.value}
                            {...crumb}
                            {...params}
                            onClick={createOnClickHandler(crumb)}
                        >
                            {crumb.text}
                        </DroppedBreadcrumbComponent>
                    ))}
                </Stack>
            </Popup>
        </Fragment>
    );
});
