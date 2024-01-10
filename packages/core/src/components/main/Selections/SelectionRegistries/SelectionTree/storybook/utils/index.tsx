import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Story } from '@storybook/react/types-6-0';
import { SelectionTree, SelectionTreeProps, SELECTION_TREE_UTILS } from '@core';
import { StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { StoryUtilButton } from '../StoryUtilButton';

const CONTAINER = styled('div')({
    display: 'flex',
    gap: 4,
    margin: '4px 0 16px',
});

const SPAN = styled('span')({
    display: 'block',
    margin: '24px 0 12px',
});

const UL = styled('ul')({ margin: 0 });

const LI = styled('li')({ margin: 4 });

export const UtilsStory: Story<SelectionTreeProps> = ({
    nodes,
    color,
    ...props
}) => {
    const [selectionTree, setTree] = useState(nodes || []);

    useEffect(() => {
        const { setDefaultValues, checkValuesUniqueness } = SELECTION_TREE_UTILS;
        if (!checkValuesUniqueness(nodes)) {
            // eslint-disable-next-line no-alert
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
            <CONTAINER>
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
            </CONTAINER>
            <SelectionTree
                {...props}
                color={color}
                nodes={selectionTree}
                onUpdate={setTree}
            />
            <SPAN>Выбранные узлы (без indeterminate):</SPAN>
            <UL>
                {checkedNodes.map((node) => (
                    <LI key={node.value}>
                        {node.title}
                    </LI>
                ))}
            </UL>
            <SPAN>
                Полный список утилит (с подробным описанием каждой утилиты
                можно ознакомиться посредством jsdoc):
            </SPAN>
            <UL>
                {Object.keys(SELECTION_TREE_UTILS).map((util) => (
                    <LI key={util}>
                        {util}
                    </LI>
                ))}
            </UL>
        </StoryDarkerContainer>
    );
};

setStoryParams(UtilsStory, {
    title: 'Утилиты',
});
