import { useEffect, useState } from 'react';
import { BASE_ARG_TYPES } from '@core/storybook/BASE_ARG_TYPES';
import { Story } from '@storybook/react/types-6-0';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { excludeProp } from '@core/storybook/templateParams';
import { DisplayVariants } from '@core/storybook/DisplayVariants';
import {
    Button,
    PALETTE_COLORS,
    QX_SIZE,
    SELECTION_GROUP_TYPE,
    SELECTION_LIST_UTILS,
} from '@core';
import { StoryDarkerContainer } from '@core/storybook/components';
import {
    SelectionList,
    SelectionListProps,
    SelectionListStruct,
    SELECTION_LIST_TYPE,
    DEFAULT_SELECTION_LIST_CONTROLLERS,
} from '../index';

const list: SelectionListStruct = [
    { value: 0, title: 'Value #1' },
    { value: 1, title: 'Value #2' },
    { value: 2, title: 'Value #3' },
    { value: 3, checked: true, title: 'Value #4' },
    { value: 4, disabled: true, title: 'Value #5' },
    { value: 5, disabled: true, title: 'Value #6' },
    { value: 6, title: 'Value #7' },
];

const defaultArgs = {
    nodes: list,
    controller: DEFAULT_SELECTION_LIST_CONTROLLERS.radiobutton,
    type: SELECTION_LIST_TYPE.text,
    color: PALETTE_COLORS.brand,
    size: QX_SIZE.medium,
};

export default {
    title: STORY_PATHS.core.components.main('Selections/SelectionList'),
    component: SelectionList,
    argTypes: {
        controller: { description: 'Контроллер, ответственный за переключение состояния каждого узла' },
        nodes: { description: 'Список узлов' },
        onUpdate: { description: 'Функция, вызываемая при изменении состояния узлов' },
        ...excludeProp(['permissions'], BASE_ARG_TYPES),
    },
    parameters: {
        layout: 'fullscreen',
        actions: { disable: true },
    },
    args: defaultArgs,
};

const Template: Story<SelectionListProps> = ({
    nodes,
    ...props
}) => {
    const [selectionList, setList] = useState(nodes || []);

    useEffect(() => {
        setList(nodes);
    }, [nodes]);

    return (
        <StoryDarkerContainer>
            <SelectionList
                {...props}
                nodes={selectionList}
                onUpdate={setList}
            />
        </StoryDarkerContainer>
    );
};

export const Sandbox = Template.bind({});
Sandbox.storyName = 'Компонент';

export const Types: Story<SelectionListProps> = (props) => (
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

export const Colors: Story<SelectionListProps> = (props) => (
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

export const Sizes: Story<SelectionListProps> = (props) => (
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

export const Utils: Story<SelectionListProps> = ({
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
            <div css={{ marginBottom: 12 }}>
                <Button
                    type="outlined"
                    size="small"
                    color={props.color}
                    onClick={onResetList}
                >
                    Сбросить всё
                </Button>
            </div>
            <SelectionList
                {...props}
                nodes={nodes}
                onUpdate={setNodes}
            />
            <span css={{ display: 'block', margin: '12px 0' }}>
                {`Выбранный узел: ${checkedNode?.title ?? '-'}`}
            </span>
            <span css={{ display: 'block', margin: '24px 0 12px' }}>
                Полный список утилит (с подробным описанием каждой утилиты
                можно ознакомиться посредством jsdoc):
            </span>
            <ul css={{ margin: 0 }}>
                {Object.keys(SELECTION_LIST_UTILS).map((util) => (
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
