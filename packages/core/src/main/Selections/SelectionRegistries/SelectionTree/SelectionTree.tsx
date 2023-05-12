import { FC, forwardRef, useEffect } from 'react';
import {
    PALETTE_COLORS,
    QX_SIZE,
    SELECTION_LIST_TYPE,
    warning,
    SelectionControllerProps,
} from '@core';
import { Checkbox } from '@core/src/main/Checkbox';
import { usePropsOverwrites } from '@core/styles';
import { If } from '@core/src/system/If';
import { DefaultSelectionTreeControllers, isDefaultSelectionTreeController, SelectionTreeProps } from './types';
import { useStyles } from './styles';
import { DEFAULT_SELECTION_TREE_CONTROLLERS } from './constants';
import { SelectionTreeNode } from './SelectionTreeNode';
import {
    SelectionTreeNodeStruct,
    SELECTION_TREE_UPDATES,
    SELECTION_TREE_UTILS,
} from './utils';

const DEFAULT_CONTROLLERS: Record<DefaultSelectionTreeControllers, FC<SelectionControllerProps>> = {
    [DEFAULT_SELECTION_TREE_CONTROLLERS.checkbox]: Checkbox,
};

export const SelectionTree: FC<SelectionTreeProps> = forwardRef<HTMLDivElement, SelectionTreeProps>((
    initialProps,
    ref,
) => {
    const { cn, props, styleProps } = usePropsOverwrites('SelectionTree', initialProps);
    const {
        hidden = false,
        controller = DEFAULT_SELECTION_TREE_CONTROLLERS.checkbox,
        nodes,
        onUpdate,
        size = QX_SIZE.medium,
        color = PALETTE_COLORS.brand,
        type = SELECTION_LIST_TYPE.text,
        synchronizeChildrenVisibility = true,

        ...restProps
    } = props;

    const params = { size, color, type };
    const styles = useStyles({ params, ...styleProps });

    useEffect(() => {
        const { checkValuesUniqueness, setDefaultValues } = SELECTION_TREE_UTILS;
        const currentTree = setDefaultValues(nodes, true);

        if (!checkValuesUniqueness(currentTree)) {
            warning([
                'Value параметр должен быть',
                'уникален для каждого узла списка',
                SelectionTree.displayName,
            ].join(' '));
        }

        onUpdate(currentTree);
    // eslint-disable-next-line
    }, []);

    const createOnChangeNode = (
        node: SelectionTreeNodeStruct,
    ) => (
        () => {
            const update = SELECTION_TREE_UPDATES.updateState(node, nodes);
            onUpdate(update);
        }
    );

    const createOnChangeNodeVisibility = (
        node: SelectionTreeNodeStruct,
    ) => (
        () => {
            const update = SELECTION_TREE_UPDATES.updateVisibility(
                node,
                nodes,
                synchronizeChildrenVisibility,
            );
            onUpdate(update);
        }
    );

    const CurrentController = isDefaultSelectionTreeController(controller)
        ? DEFAULT_CONTROLLERS[controller]
        : controller;

    return (
        <If condition={!hidden}>
            <div
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
                {...restProps}
            >
                {nodes.map((node) => (
                    <SelectionTreeNode
                        key={node.value}
                        node={node}
                        type={type}
                        size={size}
                        color={color}
                        ControllerComponent={CurrentController}
                        createOnChangeVisibility={createOnChangeNodeVisibility}
                        createOnChange={createOnChangeNode}
                    />
                ))}
            </div>
        </If>
    );
});
