import React, { Fragment, FC } from 'react';
import { Route } from 'react-router-dom';
import { COMPONENTS } from '@e2e/src';
import { withPropsContext } from './withPropsContext';
import { ThemeTypes } from '@e2e/constants';

export const renderComponents = (components: typeof COMPONENTS, themeType: ThemeTypes) => Object
    .entries(components)
    .map(([path, ComponentWithoutURL]) => {
        const Component = withPropsContext(ComponentWithoutURL as FC);
        return (
            <Fragment key={path + themeType}>
                <Route path={`${themeType}/${path}`} element={<Component />} />
                <Route path={`${path}`} element={<Component />} />
                <Route path={`${themeType}/${path}--:urlProps`} element={<Component />} />
            </Fragment>
        );
    });
