import { Story } from '@storybook/react/types-6-0';
import { withDocsPage } from '@core/storybook/docsPage';
import { BordersSide, BordersSize, BordersStyle, makeStyles } from '@core';
import { DisplayVariantsMap } from '@core/storybook/DisplayVariants';
import { Div, H2, P, Code, UL, LI } from '@storybook/components';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';

const Documentation = () => (
    <Div>
        <H2>Описание</H2>
        <P>
            <strong>borders</strong>
            &nbsp;- объект, позволяющий задать толщину, стиль и конкретную сторону обводки элементов на странице.
            Содержит в себе варианты размеров и метод create() для модификации используемой обводки.
            Возвращает объект с CSS-свойствами: borderWidth, borderStyle, borderColor.
        </P>
        <P>
            Для настройки обводки можно использовать метод
            {' '}
            <strong>create()</strong>
            . Данный метод принимает объект со свойствами: size, color, side, style.
        </P>
        <Code>
            {
                `borders.create({
    size: 'small',
    color: 'black',
    side: 'top',
    style: 'dashed',
})`
            }
        </Code>
        <UL>
            <LI>size - размер</LI>
            <LI>color - цвет</LI>
            <LI>side - сторона</LI>
            <LI>style - стиль</LI>
        </UL>
    </Div>
);

const defaultArgTypes = {
    size: {
        description: 'Толщина обводки',
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
    },
    side: {
        description: 'Сторона',
        control: { type: 'select' },
        options: ['top', 'right', 'bottom', 'left', 'all'],
    },
    style: {
        description: 'Стиль',
        control: { type: 'select' },
        options: ['solid', 'dotted', 'dashed', 'double', 'ridge'],
    },
};

export default {
    title: STORY_PATHS.core.style('borders'),
    argTypes: defaultArgTypes,
    args: {
        size: 'medium',
        style: 'solid',
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

interface BordersStory {
    size?: BordersSize;
    side?: BordersSide;
    style?: BordersStyle;
}

const useStyles = makeStyles((
    { palette, borderRadii, borders },
    { size, style, side }: Required<BordersStory>,
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
        ...borders.create({
            size,
            style,
            side,
        }),
        borderColor: palette.colors.brand.border,
    },
}), { name: 'Sandbox' });

const Template: Story<BordersStory> = ({ size = 'medium', style = 'solid', side = 'all' }) => {
    const styles = useStyles({ size, style, side });

    return (
        <div css={styles.root}>
            <div css={styles.target} />
        </div>
    );
};

export const Sandbox: Story<BordersStory> = (props) => <Template {...props} />;

Sandbox.storyName = 'Обводка';

export const Sizes: Story<BordersStory> = (props) => DisplayVariantsMap<BordersStory>({
    variants: {
        size: ['small', 'medium', 'large'],
    },
    component: Template,
    componentProps: props,
    shownTitle: false,
});

export const Styles: Story<BordersStory> = (props) => DisplayVariantsMap<BordersStory>({
    component: Template,
    variants: {
        style: ['solid', 'dashed', 'dotted', 'double', 'ridge'],
    },
    componentProps: {
        ...props,
        size: 'large',
    },
    shownTitle: false,
});

export const Sides: Story<BordersStory> = (props) => DisplayVariantsMap<BordersStory>({
    variants: {
        side: ['top', 'right', 'bottom', 'left', 'all'],
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
Styles.storyName = 'Стили';

Sizes.parameters = {
    docs: {
        description: {
            story: 'Всего 3 варианта размера: `small`, `medium`, `large`.'
                + '<br />'
                + 'Для выбора размера необходимо указать их в формате: `borders.[size]`',
        },
        source: {
            code: `
small: borders.small
medium: borders.medium
large: borders.large
            `,
        },
    },
};

Sides.parameters = {
    docs: {
        description: {
            story: 'Выбор стороны состоит из 5-ти вариантов: `top`, `right`, `bottom`, `left`, `all`.',
        },
        source: {
            code: `
top: borders.create({ side: 'top' })
right: borders.create({ side: 'right' })
bottom: borders.create({ side: 'bottom' })
left: borders.create({ side: 'left' })
all: borders.create({ side: 'all' })
            `,
        },
    },
};

Styles.parameters = {
    docs: {
        description: {
            story: 'Принимает значения CSS-свойства border-style: `solid`, `dashed`, `dotted`, `double`, `ridge`.',
        },
        source: {
            code: `
solid: borders.create({ style: 'solid' })
dashed: borders.create({ style: 'dashed' })
dotted: borders.create({ style: 'dotted' })
double: borders.create({ style: 'double' })
ridge: borders.create({ style: 'ridge' })
            `,
        },
    },
};
