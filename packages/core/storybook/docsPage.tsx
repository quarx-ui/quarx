import React, { FC } from 'react';
import { Title, Primary, Subtitle, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { typography } from '@core';
import { Div } from '@storybook/components';

export const withDocsPage = (Documentation: FC) => () => (
    <>
        <Title />
        <Primary />
        <Subtitle>Описание пропсов</Subtitle>
        <ArgsTable story={PRIMARY_STORY} />
        <Div style={typography.Text.M.Regular}>
            <Documentation />
        </Div>
        <Stories title="Примеры использования" />
    </>
);
