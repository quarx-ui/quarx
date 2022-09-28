/** @jsx jsx */
import { withDocsPage } from '@core/storybook/docsPage';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ElevationSize, makeStyles } from '@core';
import { jsx } from '@emotion/react';
import { Div, H2, P, Code } from '@storybook/components';

const Documentation = () => (
    <Div>
        <H2>Описание</H2>
        <P>
            <strong>elevations</strong>
            &nbsp;- объект, содержащий набор теней для стилизации элементов на странице.
            Содержит в себе варианты размеров и методы для модификации используемой тени.
        </P>
        <Code>boxShadow: elevations.small</Code>
        <H2>Размеры</H2>
        <P>
            Всего 5 вариантов размера: xSmall, small, medium, large, xLarge.
            Для выбора размера необходимо указать их в формате:
        </P>
        <Code>elevations.[size]</Code>
        <H2>Методы</H2>
        <P>
            Для задания собственного цвета тени можно использовать метод
            {' '}
            <strong>setColor()</strong>
            , который принимает два параметра.
            Цвет и размер. Если размер не задан, по умолчанию будет использован medium.
        </P>
        <Code>elevations.setColor(color, [size])</Code>
        <P>
            Может возникнуть необходимость добавить тени свойство inset.
            Это можно сделать с помощью метода
            {' '}
            <strong>inset()</strong>
            .
            Данный метод принимает необязательный параметр size,
            при отсутствии которого будет использован размер medium.
        </P>
        <Code>elevations.inset([size])</Code>
        <P>
            Для одновременного применения собственного цвета и свойства inset можно использовать метод
            {' '}
            <strong>create()</strong>
            . Данный метод принимает объект со свойствами: size, color, inset.
        </P>
        <Code>
            {
                `elevations.create({
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
};

export default {
    title: 'style/elevations',
    argTypes: defaultArgTypes,
    args: {
        size: 'medium',
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
};

interface ElevationStory {
    size: ElevationSize,
}

const useStyles = makeStyles((
    { palette, borderRadii, elevations },
    { size }: Required<ElevationStory>,
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
        background: palette.background.main,
        boxShadow: elevations[size],
    },
}), { name: 'Sandbox' });

export const Sandbox: Story<ElevationStory> = (props) => {
    const styles = useStyles(props);

    return (
        <div css={styles.root}>
            <div css={styles.target} />
        </div>
    );
};

Sandbox.storyName = 'Тени';
