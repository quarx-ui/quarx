import { FC, Fragment } from 'react';
import { Controls, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs/blocks';
import { typography } from '@core';
import { Div } from 'storybook/internal/components';

export const withDocsPage = (Documentation: FC) => () => (
    <Fragment>
        <Title />
        <Primary />
        <Subtitle>Описание пропсов</Subtitle>
        <Controls />
        <Div style={typography.Text.M.Regular}>
            <Documentation />
        </Div>
        <Stories title="Примеры использования" />
    </Fragment>
);
