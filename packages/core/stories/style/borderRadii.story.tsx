import { Story } from '@storybook/react/types-6-0';
import { withDocsPage } from '@quarx-ui/core/storybook/docsPage';
import { BorderRadiusSide, QxBorderSize, makeStyles } from '@core';
import { DisplayVariantsMap } from '@quarx-ui/core/storybook/DisplayVariants';
import { H2, Div, P, Code } from '@storybook/components';
import { Meta } from '@storybook/react';
import { setStoryParams } from '@quarx-ui/core/storybook/setStoryParams';
import { STORY_PATHS } from '@quarx-ui/../.storybook/utils';

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
} as Meta;

interface BorderRadiiStory {
    size?: QxBorderSize;
    side?: BorderRadiusSide;
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
    const styles = useStyles({ params: { size, side } });

    return (
        <div css={styles.root}>
            <div css={styles.target} />
        </div>
    );
};

export const Sandbox: Story<BorderRadiiStory> = (props) => <Template {...props} />;

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

setStoryParams(Sandbox, {
    title: 'Скругления',
});

setStoryParams(Sizes, {
    title: 'Размеры',
    description: 'Всего 6 вариантов размера: `xSmall`, `small`, `medium`, `large`, `xLarge`, `max`.'
        + '<br />'
        + 'Для выбора размера необходимо указать их в формате: `borderRadii.[size]`',
    code: `
xSmall: borderRadii.xSmall
small: borderRadii.small
medium: borderRadii.medium
large: borderRadii.large
xLarge: borderRadii.xLarge
max: borderRadii.max
`,
});

setStoryParams(Sides, {
    title: 'Стороны',
    description: 'Выбор стороны состоит из 9-ти вариантов: `top`, `right`, `bottom`, `left`, '
        + '`top-left`, `top-right`, `bottom-left`, `bottom-right`, `all`.',
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
});
