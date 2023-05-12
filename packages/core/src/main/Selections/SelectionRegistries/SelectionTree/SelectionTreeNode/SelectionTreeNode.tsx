import { FC } from 'react';
import {
    focusable,
    PALETTE_COLORS,
    QX_SIZE,
    Selection,
    SELECTION_TREE_TYPE,
    transitions,
    useBooleanState,
} from '@core';
import { usePropsOverwrites } from '@core/styles';
import { If } from '@core/src/system/If';
import { ArrowIcon } from './assets';
import { SelectionTreeNodeProps } from './types';
import { useStyles } from './styles';
import { SELECTION_TREE_NODE_CSS_VARS } from './styles/vars';

export const SelectionTreeNode: FC<SelectionTreeNodeProps> = (
    initialProps,
) => {
    const {
        cn,
        styleProps,
        props: {
            hidden = false,
            node,
            ControllerComponent,
            createOnChange,
            createOnChangeVisibility,

            level = 0,
            disabled = false,
            color = PALETTE_COLORS.brand,
            size = QX_SIZE.medium,
            type = SELECTION_TREE_TYPE.text,
        },
    } = usePropsOverwrites('SelectionTreeNode', initialProps, SELECTION_TREE_NODE_CSS_VARS);

    const { state: isClickedToArrow, setState: setClickedToArrow } = useBooleanState(false);
    const { state: hover, setState: setHover } = useBooleanState(false);
    const isMultilevelNode = Boolean(node?.children);
    const disableFocus = node?.controllerProps?.disableFocus;
    const CurrentArrowIcon = ArrowIcon[size];

    const arrowFocusableState = focusable(!disableFocus && isMultilevelNode);
    const params = {
        color,
        size,
        type,
        disabled,
        open: Boolean(node.open),
        disableArrowFocus: arrowFocusableState < 0,
        hover,
        isClickedToArrow,
        level,
    };
    const styles = useStyles({ params, ...styleProps });

    // Обработчики событий
    const mouseEnterHandler = () => setHover(true);
    const mouseLeaveHandler = () => setHover(false);
    const onPointerDownArrow = () => setClickedToArrow(true);
    const onPointerUpArrow = () => {
        const timeout = transitions.duration.shortest;
        const disableClicked = () => setClickedToArrow(false);
        setTimeout(disableClicked, timeout);
    };

    return (
        <If condition={!hidden}>
            {/* TODO: Нужно ли давать возможность проброса html свойств в данный div? И стилей соответственно */}
            <div
                className={cn('node')}
                css={styles.node}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
            >
                <div
                    className={cn('leftAdornment')}
                    css={styles.leftAdornment}
                >
                    <If condition={isMultilevelNode}>
                        <button
                            type="button"
                            className={cn('arrow')}
                            css={styles.arrow}
                            tabIndex={arrowFocusableState}
                            onPointerDown={onPointerDownArrow}
                            onPointerUp={onPointerUpArrow}
                            onClick={createOnChangeVisibility(node)}
                        >
                            <CurrentArrowIcon />
                        </button>
                    </If>
                </div>
                <Selection
                    className={cn('selection')}
                    css={styles.selection}
                    type="text"
                    color={color}
                    size={size}
                    title={node.title}
                    helperText={node.helperText}
                    description={node.description}
                    disabled={node.disabled}
                    {...node.selectionProps}
                >
                    <ControllerComponent
                        {...node.controllerProps}
                        onChange={createOnChange(node)}
                        indeterminate={node.indeterminate}
                        checked={node.checked}
                        value={String(node.value)}
                    />
                </Selection>
            </div>
            {/* ToDo: Когда появятся анимации QuarX, заменить на них */}
            <If
                condition={isMultilevelNode && node?.open}
            >
                <div
                    className={cn('children')}
                    css={styles.children}
                >
                    {node.children?.map((child) => (
                        <SelectionTreeNode
                            key={child.value}
                            node={child}
                            ControllerComponent={ControllerComponent}
                            createOnChangeVisibility={createOnChangeVisibility}
                            createOnChange={createOnChange}
                            color={color}
                            size={size}
                            type={type}
                            disabled={disabled}
                            level={level + 1}
                        />
                    ))}
                </div>
            </If>
        </If>
    );
};
