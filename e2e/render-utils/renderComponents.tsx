import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { COMPONENTS } from '@e2e/src';
import { withPropsContext } from './withPropsContext';

export const renderComponents = (components: typeof COMPONENTS) => Object
    .entries(components)
    .map(([path, ComponentWithoutURL]) => {
        const Component = withPropsContext(ComponentWithoutURL as FC);
        return (
            <React.Fragment key={path + themeType}>
                <Route path={`${themeType}/${path}`} element={<Component />} />
                <Route path={`${path}`} element={<Component />} />
                <Route path={`${themeType}/${path}--:urlProps`} element={<Component />} />
            </React.Fragment>
        );
    });
