import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FC } from 'react';
import { ClickAwayListener } from '..';

describe('ClickAwayListener behavior', () => {
    beforeEach(cleanup);

    const text = 'ClickAwayTest';
    const Template: FC<{ onClickAway(): void }> = (
        ({ onClickAway }) => (
            <ClickAwayListener onClickAway={onClickAway}>
                <span>
                    {text}
                </span>
            </ClickAwayListener>
        )
    );

    it('text should be in the document', () => {
        render(<Template onClickAway={() => undefined} />);
        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it('clicked away', async () => {
        const test = 'Test';
        const clickAwayMock = jest.fn(() => console.log('mock'));
        jest.useFakeTimers();
        render((
            <div>
                <Template onClickAway={clickAwayMock} />
                <p>{test}</p>
            </div>
        ));
        jest.runAllTimers();
        userEvent.click(screen.getByText(test));
        userEvent.click(screen.getByText(test));
        expect(clickAwayMock).toHaveBeenCalledTimes(2);
    });
});
