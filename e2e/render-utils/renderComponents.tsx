import { Fragment, FC } from 'react';
import { Route } from 'react-router-dom';
import { COMPONENTS } from '@e2e/src';
import { withPropsContext } from './withPropsContext';

export const renderComponents = (components: typeof COMPONENTS) => Object
    .entries(components)
    .map(([path, ComponentWithoutURL]) => {
        const Component = withPropsContext(ComponentWithoutURL as FC);
        return (
            <Fragment key={path}>
                <Route path={path} element={<Component />} />
            </Fragment>
        );
    });
