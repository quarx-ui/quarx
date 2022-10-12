import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { COMPONENTS } from '@e2e/src';
import { ThemeTypes } from '@e2e/constants';
import { withURLProps } from './withURLProps';

export const renderComponents = (components: typeof COMPONENTS, themeType: ThemeTypes) => Object
    .entries(components)
    .map(([path, ComponentWithoutURL]) => {
        const Component = withURLProps(ComponentWithoutURL as FC);
        return (
            <React.Fragment key={path + themeType}>
                <Route path={`${themeType}/${path}`} element={<Component />} />
                <Route path={`${themeType}/${path}--:urlProps`} element={<Component />} />
            </React.Fragment>
        );
    });
