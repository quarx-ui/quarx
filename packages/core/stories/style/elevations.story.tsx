/** @jsx jsx */
import { withDocsPage } from '@core/storybook/docsPage';
import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { ElevationSize, makeStyles } from '@core';
import { jsx } from '@emotion/react';

const Documentation = () => (
    <div>
        <h2>Описание</h2>
        <p>
            <strong>elevations</strong>
            &nbsp;- объект, содержащий набор теней для стилизации элементов на странице.
            Содержит в себе варианты размеров и методы для модификации используемой тени.
        </p>
        <pre>boxShadow: elevations.small</pre>
        <h2>Размеры</h2>
        <p>
            Всего 5 вариантов размера: xSmall, small, medium, large, xLarge.
            Для выбора размера необходимо указать их в формате:
        </p>
        <pre>elevations.[size]</pre>
        <h2>Методы</h2>
        <p>
            Для задания собственного цвета тени можно использовать метод
            {' '}
            <strong>setColor()</strong>
            , который принимает два параметра.
            Цвет и размер. Если размер не задан, по умолчанию будет использован medium.
        </p>
        <pre>elevations.setColor(color, [size])</pre>
        <p>
            Может возникнуть необходимость добавить тени свойство inset.
            Это можно сделать с помощью метода
            {' '}
            <strong>inset()</strong>
            .
            Данный метод принимает необязательный параметр size,
            при отсутствии которого будет использован размер medium.
        </p>
        <pre>elevations.inset([size])</pre>
        <p>
            Для одновременного применения собственного цвета и свойства inset можно использовать метод
            {' '}
            <strong>create()</strong>
            . Данный метод принимает объект со свойствами: size, color, inset.
        </p>
        <pre>
            {
                `elevations.create({
    size: 'small',
    color: 'black',
    inset: true
})`
            }
        </pre>
    </div>
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
