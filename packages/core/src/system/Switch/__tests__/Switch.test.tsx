import { cleanup, render, screen } from '@testing-library/react';
import { Fragment, useState } from 'react';
import userEvent from '@testing-library/user-event';
import { Case, Switch } from '..';

describe('Switch behavior', () => {
    beforeEach(cleanup);

    it('text should be in the document', () => {
        render((
            <Switch value="1">
                <Case value="1">1</Case>
                <Case value="2">2</Case>
            </Switch>
        ));

        expect(screen.queryByText('1')).toBeInTheDocument();
        expect(screen.queryByText('2')).not.toBeInTheDocument();
    });

    it('switching', () => {
        const Template = () => {
            const [state, setState] = useState<string>('1');

            return (
                <Fragment>
                    <button
                        type="button"
                        onClick={() => setState('2')}
                    >
                        change
                    </button>
                    <Switch value={state}>
                        <Case value="1">1</Case>
                        <Case value="2">2</Case>
                    </Switch>
                </Fragment>
            );
        };
        render(<Template />);

        expect(screen.queryByText('1')).toBeInTheDocument();
        expect(screen.queryByText('2')).not.toBeInTheDocument();
        userEvent.click(screen.getByText('change'));
        expect(screen.queryByText('2')).toBeInTheDocument();
        expect(screen.queryByText('1')).not.toBeInTheDocument();
    });
});
