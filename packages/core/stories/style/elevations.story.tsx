import { withDocsPage } from '@core/storybook/docsPage';
import { Story } from '@storybook/react/types-6-0';
import { ElevationSize, ElevationType, makeStyles } from '@core';
import { Div, H2, P, Code } from '@storybook/components';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { Meta } from '@storybook/react';
import { setStoryParams } from '@core/storybook/setStoryParams';

const Documentation = () => (
    <Div>
        <H2>Описание</H2>
        <P>
            <strong>elevations</strong>
            &nbsp;- объект, содержащий набор теней для стилизации элементов на странице.
            Содержит в себе варианты размеров и метод для модификации используемой тени.
        </P>
        <Code>...elevations.main.small</Code>
        <H2>Размеры</H2>
        <P>
            Всего 5 вариантов размера: xSmall, small, medium, large, xLarge.
            Для выбора размера необходимо указать их в формате:
        </P>
        <Code>...elevations.[type].[size]</Code>
        <H2>Методы</H2>
        <P>
            Для одновременного применения собственного цвета, типа и свойства inset можно использовать метод
            {' '}
            <strong>create()</strong>
            . Данный метод принимает объект со свойствами: size, color, inset.
        </P>
        <Code>
            {
                `\
elevations.create({
    type: 'main',
    size: 'small',
    color: 'black',
    inset: true
})`
            }
        </Code>
    </Div>
);

const defaultArgTypes = {
    size: {
        description: 'Размер тени',
        control: { type: 'select' },
        options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
    },
    type: {
        description: 'Тип тени',
        control: { type: 'select' },
        options: ['main', 'secondary'],
    },
};

export default {
    title: STORY_PATHS.core.style('elevations'),
    argTypes: defaultArgTypes,
    args: {
        size: 'medium',
        type: 'main',
    },
    parameters: {
        viewMode: 'docs',
        previewTabs: {
            canvas: { hidden: true },
        },
        docs: {
            source: { type: 'code' },
            page: withDocsPage(Documentation),
        },
    },
} as Meta;

interface ElevationStory {
    size: ElevationSize;
    type: ElevationType;
}

const useStyles = makeStyles((
    { borderRadii, elevations },
    { size, type }: Required<ElevationStory>,
) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    target: {
        borderRadius: borderRadii.small,
        width: 224,
        height: 128,
        ...elevations[type][size],
    },
}), { name: 'Sandbox' });

export const Sandbox: Story<ElevationStory> = (params) => {
    const styles = useStyles({ params });

    return (
        <div css={styles.root}>
            <div css={styles.target} />
        </div>
    );
};

setStoryParams(Sandbox, {
    title: 'Тени',
});
