import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import { withDocsPage } from '@core/storybook/docsPage';
import { typography } from '@core';
import styled from '@emotion/styled';

const Documentation = () => (
    <div>
        <h2>Описание</h2>
        <p>
            <strong>typography</strong>
            &nbsp;- объект, содержащий набор свойств для стилизации текста на странице.
            Содержит в себе варианты размеров шрифта и его начертаний.
            Для выбора размера и начертания необходимо указать их в формате:
        </p>
        <pre>typography.Text.[size].[weight]</pre>
        <p>
            [size] - размер,
            <br />
            [weight] - начертание.
        </p>
        <h2>Размеры</h2>
        <p>Всего 4 варианта размера текста:</p>
        <p>
            <strong>S</strong>
            &nbsp;- наименьший размер
        </p>
        <p>
            <strong>M</strong>
            &nbsp;- средний размер
        </p>
        <p>
            <strong>L</strong>
            &nbsp;- большой размер
        </p>
        <p>
            <strong>XL</strong>
            &nbsp;- наибольший размер
        </p>
        <h2>Начертания</h2>
        <p>Всего 3 варианта начертания текста:</p>
        <p>
            <strong>Regular</strong>
            &nbsp;- стандартное начертание (400)
        </p>
        <p>
            <strong>Medium</strong>
            &nbsp;- начертание чуть жирнее стандартного (500)
        </p>
        <p>
            <strong>Semibold</strong>
            &nbsp;- полужирное начертание, жирнее Medium (600)
        </p>
    </div>
);

const defaultArgTypes = {
    size: {
        description: 'Размер текста\n\n `typography.Text.[size]`',
        control: { type: 'select' },
        options: ['S', 'M', 'L', 'XL'],
    },
    weight: {
        description: 'Вес текста\n\n `typography.Text.[size].[weight]`',
        control: { type: 'select' },
        options: ['Regular', 'Medium', 'Semibold'],
    },
    text: {
        description: 'Демонстрационный текст',
    },
};

export default {
    title: 'style/typography',
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
};

interface TypographySandbox {
    size: 'S' | 'M' | 'L' | 'XL',
    weight: 'Regular' | 'Semibold' | 'Medium',
    text: string,
}

export const Sandbox: Story<TypographySandbox> = ({
    size,
    weight,
    text,
}) => (
    <div style={typography.Text[size][weight]}>
        {text}
    </div>
);

Sandbox.args = {
    size: 'M',
    weight: 'Regular',
    text: 'Пример текста',
};

Sandbox.storyName = 'Типографика';

const Row = styled('tr')({
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
});

const RowTitle = styled('td')({
    padding: '10px 20px',
    width: 250,
    ...typography.Text.L.Semibold,
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
                <RowTitle>emotion (template string):</RowTitle>
                <RowContent>
                    <pre>
                        {` 
styled.h1(\` 
\${typography.Text.L.Regular} 
\`) 
                                `}
                    </pre>
                </RowContent>
            </Row>
            <Row>
                <RowTitle>emotion (object styles):</RowTitle>
                <RowContent>
                    <pre>
                        {` 
styled.h1({ 
...typography.Text.L.Regular, 
}) 
                                `}
                    </pre>
                </RowContent>
            </Row>
            <Row>
                <RowTitle>material-ui:</RowTitle>
                <RowContent>
                    <pre>
                        {` 
styled('h1')({ 
    ...typography.Text.M.Semibold, 
}) 
                                `}
                    </pre>
                </RowContent>
            </Row>
            <Row>
                <RowTitle>QuarX (makeStylesKit):</RowTitle>
                <RowContent>
                    <pre>
                        {` 
makeStyles({ 
    someCssClass: { 
        ...typography.Text.S.Regular, 
    } 
})
                                `}
                    </pre>
                </RowContent>
            </Row>
        </tbody>
    </table>
);

Examples.parameters = {
    docs: {
        description: {
            story: 'Применение объекта typography внутри другого объекта '
                + '(передаваемого в styled, makeStyles, и так далее) '
                + 'осуществляется с помощью spread-оператора, '
                + 'например, `...typography.Text.XL.Medium`.\n\n'
                + 'При необходимости можно использовать отдельные свойства из объекта, например, '
                + '`fontSize: typography.Text.XL.Semibold.fontSize`.\n\n'
                + 'Далее приведены примеры использования объекта типографики с библиотеками: '
                + '`emotion`, `material-ui` и `QuarX`:',
        },
    },
};

Examples.storyName = 'Применение';
