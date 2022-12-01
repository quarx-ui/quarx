import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import { DelayedMounter } from '@core';
import userEvent from '@testing-library/user-event';

describe('DelayedMounter behavior', () => {
    it('text should be in the document', () => {
        render(<DelayedMounter mounted>DelayedMounter</DelayedMounter>);

        expect(screen.queryByText('DelayedMounter')).toBeInTheDocument();
    });

    it('text should not be in the document', () => {
        render(<DelayedMounter mounted={false}>DelayedMounter</DelayedMounter>);

        expect(screen.queryByText('DelayedMounter')).not.toBeInTheDocument();
    });

    it('default layout', () => {
        const { asFragment } = render(
            <DelayedMounter mounted>
                <div>
                    DelayedMounter
                </div>
            </DelayedMounter>,
        );

        expect(asFragment()).toMatchSnapshot();
    });
});

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

describe('DelayedMounter timeout', () => {
    const BUTTON_TEXT = 'Mount Component';

    const Template = () => {
        const [mounted, setMounted] = useState(false);

        return (
            <div>
                <DelayedMounter mounted={mounted}>
                    <div>
                        DelayedMounter
                    </div>
                </DelayedMounter>
                <button
                    onClick={() => setMounted((prevState) => !prevState)}
                    type="button"
                >
                    {BUTTON_TEXT}
                </button>
            </div>
        );
    };

    it('layout', async () => {
        const { asFragment } = render(<Template />);
        const trigger = screen.getByText(BUTTON_TEXT);

        // Разметка до клика (компонент отсутствует)
        expect(asFragment()).toMatchSnapshot();

        // Разметка после клика (компонент присутствует)
        userEvent.click(trigger);
        expect(asFragment()).toMatchSnapshot();

        // Разметка после второго клика (компонент еще присутствует)
        userEvent.click(trigger);
        expect(asFragment()).toMatchSnapshot();

        jest.runAllTimers();

        // Разметка после отработки дефолтного таймера (компонент отсутствует)
        expect(asFragment()).toMatchSnapshot();
    });

    it('functions', () => {
        render(<Template />);

        expect(setTimeout).toHaveBeenCalledTimes(0);

        const trigger = screen.getByText(BUTTON_TEXT);

        userEvent.click(trigger);
        userEvent.click(trigger);

        jest.runAllTimers();

        expect(setTimeout).toHaveBeenCalledTimes(1);
        expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 250);
    });
});
