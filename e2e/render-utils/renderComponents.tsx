import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import { COMPONENTS } from '@e2e/src';
import { withURLProps } from './withURLProps';

export const renderComponents = (components: typeof COMPONENTS) => Object
    .entries(components)
    .map(([path, ComponentWithoutURL]) => {
        const Component = withURLProps(ComponentWithoutURL as FC);
        return (
            <React.Fragment key={path}>
                <Route path={path} element={<Component />} />
                <Route path={`${path}--:urlProps`} element={<Component />} />
            </React.Fragment>
        );
    });
