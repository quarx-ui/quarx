import { FC, forwardRef, MouseEventHandler, PointerEventHandler } from 'react';
import { If } from '@core/src/system/If';
import { PALETTE_COLORS, usePropsOverwrites } from '@core/styles';
import { QX_SIZE } from '@core/enums';
import { Checkbox, Stack } from '@core/src';
import { focusable, useBooleanState } from '@core/utils';
import { Transition } from '@core';
import { DROPDOWN_ITEM_TYPE } from './styles/constants';
import { DROPDOWN_ITEM_CSS_VARS } from './styles/vars';
import { useStyles } from './styles';
import { DropdownItemProps } from './types';
import { ActiveIcon } from './assets';

export const DropdownItem: FC<DropdownItemProps> = forwardRef<HTMLButtonElement, DropdownItemProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('DropdownItem', initialProps, DROPDOWN_ITEM_CSS_VARS);
    const {
        hidden = false,
        size = QX_SIZE.medium,
        color = PALETTE_COLORS.brand,

        title,
        description,
        ellipsis = false,
        children,

        type = DROPDOWN_ITEM_TYPE.default,
        disableFocus = false,
        state = false,
        onChange,
        leftItem,
        activeIcon,
        ActiveIconTransitionProps,

        onClick,
        onPointerEnter,
        onPointerLeave,
        ...restProps
    } = props;

    const [hover, { setTrue: setHover, setFalse: resetHover }] = useBooleanState(false);
    const isDefaultType = type === DROPDOWN_ITEM_TYPE.default;
    const isCheckboxType = type === DROPDOWN_ITEM_TYPE.checkbox;

    const commonEllipsis = typeof ellipsis === 'boolean';
    const params = {
        titleEllipsis: Boolean(commonEllipsis ? ellipsis : ellipsis?.title),
        descriptionEllipsis: Boolean(commonEllipsis ? ellipsis : ellipsis?.description),
        descriptionExists: Boolean(description),
        size,
        color,
        hover,
        disableFocus,
        type,
        state: Boolean(state),
    };
    const styles = useStyles({ params, ...styleProps });

    const onChangeHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
        onChange?.();
        onClick?.(event);
    };
    const onPointerEnterHandler: PointerEventHandler<HTMLButtonElement> = (event) => {
        setHover();
        onPointerEnter?.(event);
    };
    const onPointerLeaveHandler: PointerEventHandler<HTMLButtonElement> = (event) => {
        resetHover();
        onPointerLeave?.(event);
    };
    const emptyFunction = () => undefined;

    return (
        <If condition={!hidden}>
            <button
                ref={ref}
                type="button"
                tabIndex={focusable(!disableFocus)}
                className={cn('root', params)}
                css={styles.root}
                onClick={onChangeHandler}
                onPointerEnter={onPointerEnterHandler}
                onPointerLeave={onPointerLeaveHandler}
                {...restProps}
            >
                <div
                    className={cn('container')}
                    css={styles.container}
                >
                    <div
                        className={cn('content')}
                        css={styles.container}
                    >
                        <If condition={isCheckboxType}>
                            <div
                                className={cn('icon')}
                                css={styles.icon}
                            >
                                <Checkbox
                                    color={color}
                                    size={size}
                                    checked={state}
                                    hover={hover}
                                    onChange={emptyFunction}
                                    disableFocus
                                />
                            </div>
                        </If>
                        <If condition={Boolean(leftItem)}>
                            {leftItem}
                        </If>
                        {children ?? (
                            <Stack
                                spacing="0"
                                direction="column"
                                alignItems="flex-start"
                                className={cn('texts')}
                                css={styles.texts}
                            >
                                <span
                                    className={cn('title')}
                                    css={styles.title}
                                >
                                    {title}
                                </span>
                                <If condition={Boolean(description)}>
                                    <span
                                        className={cn('description')}
                                        css={styles.description}
                                    >
                                        {description}
                                    </span>
                                </If>
                            </Stack>
                        )}
                    </div>
                    <If condition={isDefaultType}>
                        <Transition
                            in={state}
                            timeout={100}
                            appear
                            enter
                            exit
                            // ToDo: при unmountOnExit=true || mountOnEnter=true не срабатывает анимация появления. Обсудить с @ISAYwtf
                            mountOnEnter={false}
                            unmountOnExit={false}
                            {...ActiveIconTransitionProps}
                        >
                            <div
                                className={cn('activeIcon')}
                                css={styles.activeIcon}
                            >
                                {activeIcon ?? <ActiveIcon />}
                            </div>
                        </Transition>
                    </If>
                </div>
            </button>
        </If>
    );
});
