import { Story } from '@storybook/react/types-6-0';
import { withDocsPage } from '@core/storybook/docsPage';
import styled from '@emotion/styled';
import { Div, H2, P, Code } from '@storybook/components';
import { STORY_PATHS } from '@quarx-ui/storybook/utils';
import { Meta } from '@storybook/react';
import { setStoryParams } from '@core/storybook/setStoryParams';
import { BaseTypographySize, BaseTypographyType } from '@core';
import { CSSProperties } from 'react';
import { typography } from '../../styles/engine/theme/typography/typography';

const Documentation = () => (
    <Div>
        <H2>Описание</H2>
        <P>
            <strong>typography</strong>
            &nbsp;- объект, содержащий набор свойств для стилизации текста на странице.
            На данный момент содержит в себе только базовые варианты шрифтов для текста и заголовков.
            Для выбора размера и начертания необходимо указать их в формате:
        </P>
        <Code>typography.base[тип][размер]</Code>
        <P>
            <strong>тип</strong>
            &nbsp;- текст или заголовок ( text | headline ),
            <br />
            <strong>размер</strong>
            &nbsp;- один из базовых размеров дизайн-системы
        </P>
        <H2>Размеры</H2>
        <P>Доступны все базовые размеры дизайн-системы:</P>
        <P>
            <strong>xSmall</strong>
            &nbsp;- наименьший размер шрифта
        </P>
        <P>
            <strong>small</strong>
            &nbsp;- маленький размер шрифта
        </P>
        <P>
            <strong>medium</strong>
            &nbsp;- средний размер шрифта
        </P>
        <P>
            <strong>large</strong>
            &nbsp;- большой размер шрифта
        </P>
        <P>
            <strong>xLarge</strong>
            &nbsp;- наибольший размер шрифта
        </P>
    </Div>
);

const defaultArgTypes = {
    type: {
        description: 'Текст или заголовок\n\n `typography.base[type]`',
        control: 'select',
        options: ['headline', 'text'],
    },
    size: {
        description: 'Размер текста\n\n `typography.base[type][size]`',
        control: { type: 'select' },
        options: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
    },
    weight: {
        description: 'Вес шрифта',
        control: { type: 'select' },
        options: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    text: {
        description: 'Демонстрационный текст',
    },
};

export default {
    title: STORY_PATHS.core.style('typography'),
    argTypes: defaultArgTypes,
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

interface TypographySandbox {
    type: BaseTypographyType;
    size: BaseTypographySize;
    weight: number;
    text: string;
}

export const Sandbox: Story<TypographySandbox> = ({
    type,
    size,
    weight,
    text,
}) => (
    <div
        style={{
            ...typography.base[type][size] as CSSProperties,
            fontWeight: weight,
        }}
    >
        {text}
    </div>
);

const Row = styled('tr')({
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
});

const RowTitle = styled('td')({
    padding: '10px 20px',
    width: 250,
    ...typography.base.headline.xSmall,
    fontWeight: 600,
});

const RowContent = styled('td')({
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    flexBasis: 350,
    flexGrow: 1,
    padding: '0 20px',
    borderRadius: 5,
});

export const Examples: Story = () => (
    <table style={{ width: '100%' }}>
        <tbody>
            <Row>
                <RowTitle>
                    emotion
                    <br />
                    (template string)
                </RowTitle>
                <RowContent>
                    <pre>
                        {`
styled.h1(\`
\${typography.base.headline.xLarge}
\`)
                                `}
                    </pre>
                </RowContent>
            </Row>
            <Row>
                <RowTitle>
                    emotion
                    <br />
                    (object styles)
                </RowTitle>
                <RowContent>
                    <pre>
                        {`
styled.h1({
...typography.base.text.xLarge,
})
                                `}
                    </pre>
                </RowContent>
            </Row>
            <Row>
                <RowTitle>material-ui</RowTitle>
                <RowContent>
                    <pre>
                        {`
styled('h1')({
    ...typography.base.medium,
    fontWeight: 600,
})
                                `}
                    </pre>
                </RowContent>
            </Row>
            <Row>
                <RowTitle>
                    QuarX
                    <br />
                    (makeStyles)
                </RowTitle>
                <RowContent>
                    <pre>
                        {`
makeStyles({
    someCssClass: {
        ...typography.base.text.small,
    }
})
                                `}
                    </pre>
                </RowContent>
            </Row>
        </tbody>
    </table>
);

setStoryParams(Sandbox, {
    title: 'Типографика',
    args: {
        type: 'headline',
        size: 'medium',
        weight: 400,
        text: 'Пример текста',
    },
});
setStoryParams(Examples, {
    title: 'Применение',
    description: 'Применение объекта typography внутри другого объекта '
        + '(передаваемого в styled, makeStyles, и так далее) '
        + 'осуществляется с помощью spread-оператора, '
        + 'например, `...typography.base.text.xLarge`.\n\n'
        + 'При необходимости можно использовать отдельные свойства из объекта, например, '
        + '`fontSize: typography.base.text.xLarge.fontSize`.\n\n'
        + 'Вес шрифта задается в стилях отдельным свойством.\n\n'
        + 'Далее приведены примеры использования объекта типографики с библиотеками: '
        + '`emotion`, `material-ui` и `QuarX`:',
});
