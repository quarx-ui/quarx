import { useEffect, useState } from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import {
    PALETTE_COLORS,
    QX_SIZE,
    SELECTION_GROUP_TYPE,
} from '@core';
import { StoryDarkerContainer } from '@core/src/main/Selections/stories/StoryDarkerContainer';
import { DEFAULT_SELECTION_TREE_CONTROLLERS } from '../constants';
import { SELECTION_TREE_TYPE } from '../styles/constants';
import { SelectionTree, SelectionTreeProps } from '../index';
import { SELECTION_TREE_UTILS } from '../utils';
import { EXAMPLE_TREE } from './example';
import { StoryUtilButton } from './StoryUtilButton';

const defaultArgs = {
    controller: DEFAULT_SELECTION_TREE_CONTROLLERS.checkbox,
    nodes: EXAMPLE_TREE,
    type: SELECTION_TREE_TYPE.text,
    color: PALETTE_COLORS.brand,
    size: QX_SIZE.medium,
    synchronizeChildrenVisibility: true,
};

export default {
    title: STORY_PATHS.core.components.main('Selections/SelectionTree'),
    component: SelectionTree,
    argTypes: {
        controller: { description: 'Контроллер, ответственный за переключение состояния каждого узла' },
        nodes: { description: 'Список узлов' },
        onUpdate: { description: 'Функция, вызываемая при изменении состояния узлов' },
        synchronizeChildrenVisibility: { description: 'При свертывании узла дочерние элементы будут свертаны' },
        color: { description: 'Цветовая схема компонента' },
        size: { description: 'Размер компонента' },
        type: { description: 'Тип группировки компонента' },

        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        layout: 'fullscreen',
        actions: { disable: true },
    },
    args: defaultArgs,
};

const Template: Story<SelectionTreeProps> = ({
    nodes,
    ...props
}) => {
    const [selectionTree, setTree] = useState(nodes || []);
    return (
        <StoryDarkerContainer>
            <SelectionTree
                {...props}
                nodes={selectionTree}
                onUpdate={setTree}
            />
        </StoryDarkerContainer>
    );
};

export const Sandbox = Template.bind({});
Sandbox.storyName = 'Компонент';

export const Types: Story<SelectionTreeProps> = (props) => (
    <StoryDarkerContainer>
        {DisplayVariants({
            property: 'type',
            values: Object.values(SELECTION_GROUP_TYPE),
            component: Template,
            componentProps: props,
        })}
    </StoryDarkerContainer>
);

Types.storyName = 'Типы';
Types.argTypes = excludeProp(['type']);

export const Colors: Story<SelectionTreeProps> = (props) => (
    <StoryDarkerContainer>
        {DisplayVariants({
            property: 'color',
            values: Object.values(PALETTE_COLORS),
            component: Template,
            componentProps: props,
        })}
    </StoryDarkerContainer>
);

Colors.storyName = 'Цвета';
Colors.argTypes = excludeProp(['color']);

export const Sizes: Story<SelectionTreeProps> = (props) => (
    <StoryDarkerContainer>
        {DisplayVariants({
            property: 'size',
            values: [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large],
            component: Template,
            componentProps: props,
        })}
    </StoryDarkerContainer>
);

Sizes.storyName = 'Размеры';
Sizes.argTypes = excludeProp(['size']);

export const Utils: Story<SelectionTreeProps> = ({
    nodes,
    color,
    ...props
}) => {
    const [selectionTree, setTree] = useState(nodes || []);

    useEffect(() => {
        const { setDefaultValues, checkValuesUniqueness } = SELECTION_TREE_UTILS;
        if (!checkValuesUniqueness(nodes)) {
            alert('Ключи дерева элементов не одинаковы');
        }
        setTree(setDefaultValues(nodes));
    }, [nodes]);

    const openAll = () => {
        const update = SELECTION_TREE_UTILS.openAll(selectionTree);
        setTree(update);
    };

    const closeAll = () => {
        const update = SELECTION_TREE_UTILS.closeAll(selectionTree);
        setTree(update);
    };

    const selectAll = () => {
        const update = SELECTION_TREE_UTILS.selectAll(selectionTree, false);
        setTree(update);
    };

    const resetAll = () => {
        const update = SELECTION_TREE_UTILS.resetAll(selectionTree);
        setTree(update);
    };

    const checkedNodes = SELECTION_TREE_UTILS.getCheckedNodes(selectionTree, true);

    return (
        <StoryDarkerContainer>
            <p>
                Пример использования части утилит(
                <code>SELECTION_TREE_UTILS</code>
                ) на практике:
            </p>
            <div
                css={{
                    display: 'flex',
                    gap: 4,
                    margin: '4px 0 16px',
                }}
            >
                <StoryUtilButton
                    onClick={openAll}
                    color={color}
                >
                    Развернуть всё
                </StoryUtilButton>
                <StoryUtilButton
                    onClick={closeAll}
                    color={color}
                >
                    Скрыть всё
                </StoryUtilButton>
                <StoryUtilButton
                    onClick={selectAll}
                    color={color}
                >
                    Выбрать всё
                </StoryUtilButton>
                <StoryUtilButton
                    onClick={resetAll}
                    color={color}
                >
                    Сбросить всё
                </StoryUtilButton>
            </div>
            <SelectionTree
                {...props}
                color={color}
                nodes={selectionTree}
                onUpdate={setTree}
            />
            <span css={{ display: 'block', margin: '12px 0' }}>
                Выбранные узлы (без indeterminate):
            </span>
            <ul css={{ margin: 0 }}>
                {checkedNodes.map((node) => (
                    <li
                        key={node.value}
                        css={{ margin: 4 }}
                    >
                        {node.title}
                    </li>
                ))}
            </ul>
            <span css={{ display: 'block', margin: '24px 0 12px' }}>
                Полный список утилит (с подробным описанием каждой утилиты
                можно ознакомиться посредством jsdoc):
            </span>
            <ul css={{ margin: 0 }}>
                {Object.keys(SELECTION_TREE_UTILS).map((util) => (
                    <li
                        key={util}
                        css={{ margin: 4 }}
                    >
                        {util}
                    </li>
                ))}
            </ul>
        </StoryDarkerContainer>
    );
};

Utils.storyName = 'Утилиты';

const variantsArray = [
    Types,
    Colors,
    Sizes,
    Utils,
];

variantsArray.forEach((variant, index) => {
    variantsArray[index].args = defaultArgs;
});
