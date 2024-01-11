import { render, screen } from '@testing-library/react';
import { Badge, BadgeProps, BadgeStyleParams } from '@core';
import { testStyleParams } from '@quarx-ui/core/test-utils';

describe('Badge', () => {
    testStyleParams<BadgeStyleParams, BadgeProps>(
        Badge,
        {
            size: 'medium',
            borderRadius: 'max',
            color: 'brand',
            type: 'contained',
        },
        { children: 'Статус' },
    )({
        color: ['brand', 'secondary', 'info', 'success', 'warning', 'danger', 'text'],
        size: ['small', 'medium', 'large'],
        borderRadius: ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'],
        type: ['contained', 'outlined', 'ghosted'],
    });

    it('with counter', () => {
        const { asFragment } = render(<Badge counter={55}>Статус</Badge>);

        expect(screen.queryByText('Статус')).toBeInTheDocument();
        expect(screen.queryByText('55')).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
});
