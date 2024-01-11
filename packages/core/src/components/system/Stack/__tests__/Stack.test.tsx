import { render, screen } from '@testing-library/react';
import { Stack, StackProps, StackStyleParams } from '@core';
import { testStyleParams } from '@quarx-ui/core/test-utils';
import { Fragment } from 'react';
import { STACK_DIRECTION, STACK_ORDER } from '../styles/constants';

describe('Stack', () => {
    testStyleParams<StackStyleParams, StackProps>(
        Stack,
        {
            spacing: '8px',
            direction: 'column',
            order: 'default',
            inline: false,
        },
        {
            children: ['1', '2'],
        },
    )({
        spacing: ['8px', '16px', '2em'],
        direction: ['column', 'row'],
        order: ['default', 'reverse'],
        inline: [true, false],
    });

    describe('behavior', () => {
        const spacing = '20px';

        const stackColumnId = 'stack-column';
        const stackColumnReverseId = 'stack-column-reverse';
        const stackRowId = 'stack-row';
        const stackRowReverseId = 'stack-row-reverse';

        it(`spacing should be ${spacing}`, () => {
            const variants: Partial<StackProps & Record<'data-testid', string>>[] = [
                {
                    'data-testid': stackColumnId,
                },
                {
                    'data-testid': stackColumnReverseId,
                    order: STACK_ORDER.reverse,
                },
                {
                    'data-testid': stackRowId,
                    direction: STACK_DIRECTION.row,
                },
                {
                    'data-testid': stackRowReverseId,
                    direction: STACK_DIRECTION.row,
                    order: STACK_ORDER.reverse,
                },
            ];

            render(
                <Fragment>
                    {variants.map((props, i) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <Stack {...props} spacing={spacing} key={i}>
                            <div />
                            <div />
                        </Stack>
                    ))}
                </Fragment>,
            );

            const stackColumn = screen.getByTestId(stackColumnId);
            const stackRow = screen.getByTestId(stackRowId);
            const stackColumnReverse = screen.getByTestId(stackColumnReverseId);
            const stackRowReverse = screen.getByTestId(stackRowReverseId);

            expect(stackColumn.children[0]).toHaveStyle(`margin-bottom: ${spacing}`);
            expect(stackColumnReverse.children[0]).toHaveStyle(`margin-top: ${spacing}`);
            expect(stackRow.children[0]).toHaveStyle(`margin-right: ${spacing}`);
            expect(stackRowReverse.children[0]).toHaveStyle(`margin-left: ${spacing}`);
        });

        it('divider should be rendered', () => {
            const dividerTestId = 'stack-divider';

            render(
                <Stack divider={<div data-testid={dividerTestId}>•</div>}>
                    <div />
                    <div />
                </Stack>,
            );

            expect(screen.getByTestId(dividerTestId)).toBeInTheDocument();
        });

        it('root tag should be custom', () => {
            const stackTestId = 'stack';
            const customTagName = 'ul';

            render(
                <Stack
                    data-testid={stackTestId}
                    component={customTagName}
                >
                    <div />
                    <div />
                </Stack>,
            );

            const stack = screen.getByTestId(stackTestId);

            expect(stack.tagName).toBe(customTagName.toUpperCase());
        });
    });
});
