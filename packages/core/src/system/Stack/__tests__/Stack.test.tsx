import { render, screen } from '@testing-library/react';
import { cssVar, Stack, StackProps, StackStyleParams } from '@core';
import { testStyleParams } from '@core/test-utils';
import { Fragment } from 'react';
import { STACK_DIRECTION, STACK_ORDER } from '../styles/constants';
import { STACK_CSS_VARS } from '../styles';

describe('Stack', () => {
    testStyleParams<StackStyleParams, StackProps>(
        Stack,
        {
            spacing: '8px',
            direction: 'column',
            order: 'forward',
            inline: false,
        },
        {
            children: ['1', '2'],
        },
    )({
        spacing: ['8px', '16px', '2em'],
        direction: ['column', 'row'],
        order: ['forward', 'reverse'],
        inline: [true, false],
    });
});

describe('Stack behavior', () => {
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

        [stackColumn, stackRow, stackColumnReverse, stackRowReverse].forEach((item) => {
            expect(item).toHaveStyle(`${STACK_CSS_VARS.cssSpacing}: ${spacing}`);
        });

        expect(stackColumn.children[0]).toHaveStyle(`margin-bottom: ${cssVar(STACK_CSS_VARS.cssSpacing)}`);
        expect(stackColumnReverse.children[0]).toHaveStyle(`margin-top: ${cssVar(STACK_CSS_VARS.cssSpacing)}`);
        expect(stackRow.children[0]).toHaveStyle(`margin-right: ${cssVar(STACK_CSS_VARS.cssSpacing)}`);
        expect(stackRowReverse.children[0]).toHaveStyle(`margin-left: ${cssVar(STACK_CSS_VARS.cssSpacing)}`);
    });
});
