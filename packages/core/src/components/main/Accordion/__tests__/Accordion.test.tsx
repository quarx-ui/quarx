import { render, screen } from '@testing-library/react';
import { QX_SIZE, Accordion, AccordionProps, AccordionStyleParams } from '@core';
import { testStyleParams } from '@quarx-ui/core/test-utils';

describe('Accordion', () => {
    testStyleParams<AccordionStyleParams, AccordionProps>(
        Accordion,
        {
            open: false,
            size: QX_SIZE.medium,
            showDivider: false,
            inheritTextStyles: false,
        },
        {},
    )({
        open: [true, false],
        showDivider: [true, false],
        inheritTextStyles: [true, false],
        size: [QX_SIZE.xSmall, QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large],
    });
});

describe('Accordion behavior', () => {
    const title = 'Accordion';
    const content = 'content';

    it('default', () => {
        render(<Accordion title={title}>{content}</Accordion>);

        expect(screen.queryByText(title)).toBeInTheDocument();
    });

    it('initial open', () => {
        render(<Accordion title={title} initialOpen>{content}</Accordion>);

        expect(screen.queryByText(title)).toBeInTheDocument();
        expect(screen.queryByText(content)).toBeInTheDocument();
    });

    it('custom icons & divider', () => {
        const statusIconText = 'status';
        const collapseIconText = 'collapse';

        const { container } = render(
            <Accordion
                title={title}
                statusIcon={<div>{statusIconText}</div>}
                collapseIcon={<div>{collapseIconText}</div>}
                showDivider
            >
                {content}
            </Accordion>,
        );

        expect(screen.queryByText(statusIconText)).toBeInTheDocument();
        expect(screen.queryByText(collapseIconText)).toBeInTheDocument();

        const [divider] = container.getElementsByClassName('QxDivider');

        expect(divider).toBeInTheDocument();
    });
});
