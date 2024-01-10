import { FC, forwardRef, useEffect } from 'react';
import {
    PALETTE_COLORS,
    QX_SIZE,
    Selection,
    SelectionControllerProps,
    warning,
} from '@core';
import { RadioButton } from '@core/components/main/RadioButton';
import { usePropsOverwrites } from '@core/styles';
import { If } from '@core/components/system/If';
import {
    SELECTION_LIST_UPDATES,
    SELECTION_LIST_UTILS,
    SelectionListNodeStruct,
} from './utils';
import { SELECTION_LIST_TYPE } from './styles/constants';
import { useStyles } from './styles';
import { DEFAULT_SELECTION_LIST_CONTROLLERS } from './constants';
import {
    DefaultSelectionListControllers,
    isDefaultSelectionListController,
    SelectionListProps,
} from './types';

const DEFAULT_CONTROLLERS: Record<DefaultSelectionListControllers, FC<SelectionControllerProps>> = {
    [DEFAULT_SELECTION_LIST_CONTROLLERS.radiobutton]: RadioButton,
};

export const SelectionList: FC<SelectionListProps> = forwardRef<HTMLDivElement, SelectionListProps>((
    initialProps,
    ref,
) => {
    const {
        cn,
        props,
        styleProps,
    } = usePropsOverwrites('SelectionList', initialProps);
    const {
        hidden = false,
        controller = DEFAULT_SELECTION_LIST_CONTROLLERS.radiobutton,
        nodes,
        onUpdate,
        size = QX_SIZE.medium,
        color = PALETTE_COLORS.brand,
        type = SELECTION_LIST_TYPE.text,

        ...restProps
    } = props;

    const params = { type, size, color };

    const styles = useStyles({ params, ...styleProps });

    const CurrentController = isDefaultSelectionListController(controller)
        ? DEFAULT_CONTROLLERS[controller]
        : controller;

    const onUpdateNode = (node: SelectionListNodeStruct) => (
        (): void => {
            const update = SELECTION_LIST_UPDATES.updateState(node, nodes);
            onUpdate(update);
        }
    );

    useEffect(() => {
        const currentList = SELECTION_LIST_UTILS.setDefaultValues(nodes);

        const { checkValuesUniqueness } = SELECTION_LIST_UTILS;
        if (!checkValuesUniqueness(currentList)) {
            warning([
                'Value параметр должен быть',
                'уникален для каждого узла списка',
                SelectionList.displayName,
            ].join(' '));
        }

        onUpdate(currentList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <If condition={!hidden}>
            <div
                ref={ref}
                className={cn('root', params)}
                css={styles.root}
                {...restProps}
            >
                {nodes.map((node) => (
                    <Selection
                        key={node.value}
                        type={type}
                        title={node.title}
                        helperText={node.helperText}
                        description={node.description}
                        disabled={node.disabled}
                        onChange={onUpdateNode(node)}
                        color={color}
                        size={size}
                        {...node.selectionProps}
                    >
                        <CurrentController
                            {...node.controllerProps}
                            checked={Boolean(node.checked)}
                            value={String(node.value)}
                        />
                    </Selection>
                ))}
            </div>
        </If>
    );
});
