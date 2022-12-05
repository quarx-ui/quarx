/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Story } from '@storybook/react/types-6-0';
import { withDocsPage } from '@core/storybook/docsPage';
import React from 'react';
import { BorderRadiusSide, QxBorderSize, makeStyles } from '@core';
import { DisplayVariantsMap } from '@core/storybook/DisplayVariants';
import { H2, Div, P, Code } from '@storybook/components';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';

const Documentation = () => (
    <Div>
        <H2>Описание</H2>
        <P>
            <strong>borderRadii</strong>
            &nbsp;- объект, позволяющий задать размер и сторону скругления элементов на странице.
            Содержит в себе варианты размеров и метод create() для модификации используемого скругления.
        </P>
        <P>
            Для настройки скругления можно использовать метод
            {' '}
            <strong>create()</strong>
            . Данный метод принимает два аргумента: side и size (необязательный).
        </P>
        <Code>{'borderRadii.create(\'top\', \'small\')'}</Code>
    </Div>
);

const defaultArgTypes = {
    size: {
        description: 'Размер скругления',
        control: { type: 'select' },
        options: ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'],
    },
    side: {
        description: 'Сторона',
        control: { type: 'select' },
        options: ['top', 'right', 'bottom', 'left', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'all'],
    },
};

export default {
    title: STORY_PATHS.core.style('borderRadii'),
    argTypes: defaultArgTypes,
    args: {
        size: 'medium',
        side: 'all',
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

interface BorderRadiiStory {
    size?: QxBorderSize,
    side?: BorderRadiusSide,
}

const useStyles = makeStyles((
    { palette, borderRadii, borders },
    { size, side }: Required<BorderRadiiStory>,
) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    target: {
        borderRadius: borderRadii.create(side, size),
        width: 224,
        height: 128,
        background: palette.background.main,
        ...borders.large,
        borderColor: palette.colors.brand.border,
    },
}), { name: 'Sandbox' });

const Template: Story<BorderRadiiStory> = ({ size = 'medium', side = 'all' }) => {
    const styles = useStyles({ size, side });

    return (
        <div css={styles.root}>
            <div css={styles.target} />
        </div>
    );
};

export const Sandbox: Story<BorderRadiiStory> = (props) => <Template {...props} />;

Sandbox.storyName = 'Скругления';

export const Sizes: Story<BorderRadiiStory> = (props) => DisplayVariantsMap<BorderRadiiStory>({
    variants: {
        size: ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'],
    },
    component: Template,
    componentProps: props,
    shownTitle: false,
});

export const Sides: Story<BorderRadiiStory> = (props) => DisplayVariantsMap<BorderRadiiStory>({
    variants: {
        side: ['top', 'right', 'bottom', 'left', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'all'],
    },
    component: Template,
    componentProps: {
        ...props,
        size: 'large',
    },
    shownTitle: false,
});

Sizes.storyName = 'Размеры';
Sides.storyName = 'Стороны';

Sizes.parameters = {
    docs: {
        description: {
            story: 'Всего 6 вариантов размера: `xSmall`, `small`, `medium`, `large`, `xLarge`, `max`.'
                + '<br />'
                + 'Для выбора размера необходимо указать их в формате: `borderRadii.[size]`',
        },
        source: {
            code: `
xSmall: borderRadii.xSmall
small: borderRadii.small
medium: borderRadii.medium
large: borderRadii.large
xLarge: borderRadii.xLarge
max: borderRadii.max
            `,
        },
    },
};

Sides.parameters = {
    docs: {
        description: {
            story: 'Выбор стороны состоит из 9-ти вариантов: `top`, `right`, `bottom`, `left`, '
                + '`top-left`, `top-right`, `bottom-left`, `bottom-right`, `all`.',
        },
        source: {
            code: `
top: borderRadii.create('top')
right: borderRadii.create('right')
bottom: borderRadii.create('bottom')
left: borderRadii.create('left')
top-left: borderRadii.create('top-left')
top-right: borderRadii.create('top-right')
bottom-left: borderRadii.create('bottom-left')
bottom-right: borderRadii.create('bottom-right')
all: borderRadii.create('all')
            `,
        },
    },
};
