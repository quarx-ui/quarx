import React, { FC } from 'react';
import { Routes } from 'react-router-dom';
import { FRAME_ID } from '@e2e/constants';
import { CSSProperties } from '@kit/styles/engine/styles/types';
import { renderComponents } from '@e2e/render-utils/renderComponents';
import { COMPONENTS } from '@e2e/src';
import { borderRadii } from '@kit';

export const App: FC = () => {
    const rootStyle: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '4px solid #e7e7e7',
        flexGrow: 1,
        borderRadius: borderRadii.xLarge,
        padding: 30,
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}
        >
            <div style={rootStyle} id={FRAME_ID}>
                <Routes>
                    {renderComponents(COMPONENTS)}
                </Routes>
            </div>
        </div>
    );
};
