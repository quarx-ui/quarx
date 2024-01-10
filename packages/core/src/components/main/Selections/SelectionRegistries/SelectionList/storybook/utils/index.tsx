import { useEffect, useState } from 'react';
import { Story } from '@storybook/react/types-6-0';
import { StoryDarkerContainer } from '@quarx-ui/core/storybook/components';
import { Button, SelectionList, SelectionListProps, SelectionListStruct, SELECTION_LIST_UTILS } from '@core';
import styled from '@emotion/styled';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';

const StoryButtonGroup = styled('div')({
    marginBottom: 12,
});

const UL = styled('ul')({
    margin: 0,
});

const LI = styled('li')({
    margin: 4,
});

const SPAN = styled('span')({
    display: 'block',
    margin: '24px 0 12px',
});

export const UtilsStory: Story<SelectionListProps> = ({
    nodes: externalNodes,
    ...props
}) => {
    const [nodes, setNodes] = useState<SelectionListStruct>(externalNodes ?? []);
    const {
        checkValuesUniqueness,
        getCheckedNode,
        resetAll,
        setDefaultValues,
    } = SELECTION_LIST_UTILS;

    useEffect(() => {
        if (!checkValuesUniqueness(nodes)) {
            // eslint-disable-next-line no-alert
            alert('Ключи дерева элементов не одинаковы');
        }
        setNodes(setDefaultValues(externalNodes));
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, [externalNodes]);

    const onResetList = () => setNodes(resetAll(nodes));

    const checkedNode = getCheckedNode(nodes);

    return (
        <StoryDarkerContainer>
            <p>
                Пример использования части утилит(
                <code>SELECTION_LIST_UTILS</code>
                ) на практике:
            </p>
            <StoryButtonGroup>
                <Button
                    type="outlined"
                    size="small"
                    color={props.color}
                    onClick={onResetList}
                >
                    Сбросить всё
                </Button>
            </StoryButtonGroup>
            <SelectionList
                {...props}
                nodes={nodes}
                onUpdate={setNodes}
            />
            <SPAN>
                {`Выбранный узел: ${checkedNode?.title ?? '-'}`}
            </SPAN>
            <SPAN>
                Полный список утилит (с подробным описанием каждой утилиты
                можно ознакомиться посредством jsdoc):
            </SPAN>
            <UL>
                {Object.keys(SELECTION_LIST_UTILS).map((util) => (
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
