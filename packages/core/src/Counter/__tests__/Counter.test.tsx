import { render } from '@testing-library/react';
import React from 'react';
import { Counter } from '@core';
import { testRootCn } from '../../../../../test-utils/jest';

describe('Counter', () => {
    it('Snapshot', () => {
        const { asFragment } = render(
            <Counter>
                99
            </Counter>,
        );
        expect(asFragment())
            .toMatchSnapshot();
    });

    it('className', () => {
        testRootCn(Counter, 'SxCounter');
    });
});
