import { render, screen } from '@testing-library/react';
import { Collapse } from '@core';

describe('Collapse', () => {
    it('text should be in the document', () => {
        render(<Collapse open>traffic jams</Collapse>);

        expect(screen.queryByText('traffic jams')).toBeInTheDocument();
    });

    it('default layout', () => {
        const { asFragment } = render(
            <Collapse open={false}>
                Traffic jams
            </Collapse>,
        );

        expect(asFragment()).toMatchSnapshot();
    });
});

describe('Collapse opened', () => {
    it('text should be in the document', () => {
        render(<Collapse open>traffic jams</Collapse>);

        expect(screen.queryByText('traffic jams')).toBeInTheDocument();
    });
});

describe('Collapse closed 10px vertical', () => {
    it('text should be in the document', () => {
        render(<Collapse open={false} collapsedSize={10}>traffic jams</Collapse>);

        expect(screen.queryByText('traffic jams')).toBeInTheDocument();
    });
});

describe('Collapse closed 10px horizontal', () => {
    it('text should be in the document', () => {
        render(
            <Collapse open={false} orientation="horizontal" collapsedSize={10}>
                traffic jams
            </Collapse>,
        );

        expect(screen.queryByText('traffic jams')).toBeInTheDocument();
    });
});
