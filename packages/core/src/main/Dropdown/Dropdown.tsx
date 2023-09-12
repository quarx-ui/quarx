import { FC, forwardRef, Fragment } from 'react';
import { If } from '@core/src/system/If';
import { usePropsOverwrites } from '@core/styles';
import { Button, DROPDOWN_WIDTH_PRESETS, Popup, QX_SIZE, TextField } from '@core';
import { SearchIcon } from './assets';
import { DropdownProps } from './types';
import { mapSizeToFooterButtonsSize } from './styles/mappers';
import { useAdaptiveDropdownWidth } from './styles/utils';
import { useStyles } from './styles';

export const Dropdown: FC<DropdownProps> = forwardRef<HTMLDivElement, DropdownProps>((
    initialProps,
    ref,
) => {
    const {
        cn,
        props,
        styleProps,
    } = usePropsOverwrites('Dropdown', initialProps);
    const {
        hidden = false,

        size = QX_SIZE.medium,
        zIndex = 'auto',

        // --- Popup properties ---
        anchor,
        open = false,
        width = DROPDOWN_WIDTH_PRESETS.default,
        minWidth,
        maxWidth,
        onClickAway,
        PopupProps,

        // --- header properties ---
        header,

        title,
        searchable = true,
        searchLoading = false,
        searchText,
        onSearchChange,
        onSearchClear,
        searchPlaceHolder,
        SearchableTextFieldProps,

        // --- body properties ---
        children,
        maxBodyHeight = 320,

        // --- footer properties ---
        footer,

        buttonManagement = true,
        onAcceptButtonClick,
        AcceptButtonProps,
        onCancelButtonClick,
        CancelButtonProps,

        ...restProps
    } = props;

    const widths = useAdaptiveDropdownWidth(anchor, width);
    const params = {
        size,
        searchable,
        zIndex,
        maxBodyHeight,
        headerExists: Boolean(header) || searchable || Boolean(title),
        width: widths.width,
        minWidth: minWidth ?? widths.minWidth,
        maxWidth: maxWidth ?? widths.maxWidth,
    };
    const styles = useStyles({ params, ...styleProps });
    const ActualSearchIcon = SearchIcon[size];

    return (
        <If condition={!hidden}>
            <Popup
                ref={ref}
                open={open}
                onClickAway={onClickAway}
                anchor={anchor}
                disableBackdrop
                placement="bottom-start"
                reference="window"
                className={cn('root', params)}
                css={styles.root}
                {...PopupProps}
                {...restProps}
            >
                <If condition={Boolean(header || title || searchable)}>
                    <div
                        className={cn('header')}
                        css={styles.header}
                    >
                        {header ?? (
                            <Fragment>
                                <If condition={Boolean(title)}>
                                    <span
                                        className={cn('title')}
                                        css={styles.title}
                                    >
                                        {title}
                                    </span>
                                </If>
                                <If condition={searchable}>
                                    <TextField
                                        className={cn('searchTextField')}
                                        css={styles.searchTextField}
                                        colorBase="secondary"
                                        size={size}
                                        placeholder={searchPlaceHolder}
                                        leftItem={<ActualSearchIcon />}
                                        onChange={onSearchChange}
                                        onClear={onSearchClear}
                                        loading={searchLoading}
                                        value={searchText}
                                        /** Чтобы не растягивался input. По умолчанию 20 символов.
                                    * Используется вместо clearIconVisibleOn=always */
                                        inputProps={{ size: 1 }}
                                        {...SearchableTextFieldProps}
                                    />
                                </If>
                            </Fragment>
                        )}
                    </div>
                </If>
                <div
                    className={cn('body')}
                    css={styles.body}
                >
                    {children}
                </div>
                {footer ?? (
                    <If condition={buttonManagement}>
                        <div
                            className={cn('footer')}
                            css={styles.footer}
                        >
                            <Button
                                type="outlined"
                                color="brand"
                                onClick={onAcceptButtonClick}
                                size={mapSizeToFooterButtonsSize[size]}
                                {...AcceptButtonProps}
                            >
                                {AcceptButtonProps?.children ?? 'Применить'}
                            </Button>
                            <Button
                                type="text"
                                color="secondary"
                                onClick={onCancelButtonClick}
                                size={mapSizeToFooterButtonsSize[size]}
                                {...CancelButtonProps}
                            >
                                {CancelButtonProps?.children ?? 'Сбросить'}
                            </Button>
                        </div>
                    </If>
                )}
            </Popup>
        </If>
    );
});
