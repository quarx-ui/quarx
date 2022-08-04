import React, { FC } from 'react';
import { Title, Primary, Subtitle, Stories, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { typography } from '@core';

export const withDocsPage = (Documentation: FC) => () => (
    <>
        <Title />
        <Primary />
        <Subtitle>Описание пропсов</Subtitle>
        <ArgsTable story={PRIMARY_STORY} />
        <div style={typography.Text.M.Regular}><Documentation /></div>
        <Stories title="Примеры использования" />
    </>
);
