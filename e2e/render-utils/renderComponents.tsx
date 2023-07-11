import React, { Fragment, FC } from 'react';
import { Route } from 'react-router-dom';
import { COMPONENTS } from '@e2e/src';
import { PaletteType } from '@kit';
import { InputForProps } from '@e2e/render-utils/InputForProps';
import { FRAME_ID } from '@e2e/constants';
import { withPropsContext } from './withPropsContext';

export const renderComponents = (components: typeof COMPONENTS, themeType: PaletteType) => Object
    .entries(components)
    .map(([path, ComponentWithoutURL]) => {
        const Component = withPropsContext(ComponentWithoutURL as FC);
        const ComponentWithInput = () => (
            <React.Fragment>
                <InputForProps key="input" />
                <div id={FRAME_ID} key="componentFrame">
                    <Component key="component" />
                </div>
            </React.Fragment>
        );
        return (
            <Fragment key={path + themeType}>
                <Route path={`${themeType}/${path}`} element={<ComponentWithInput />} />
                <Route path={`${path}`} element={<ComponentWithInput />} />
                <Route path={`${themeType}/${path}--:urlProps`} element={<ComponentWithInput />} />
            </Fragment>
        );
    });
