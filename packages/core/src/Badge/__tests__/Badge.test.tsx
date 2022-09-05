import React from 'react';
import { render, screen } from '@testing-library/react';
import {
    Badge,
    BadgeSize,
    BadgeBorderRadius,
    BadgeColor,
    BadgeType,
    BadgeStyleParams,
    BadgeProps,
} from '@core';
import { expectPropsMapInClasses, testStyleParams } from '@core/test-utils';

interface CheckPropsInClasses {
    size?: BadgeSize,
    borderRadius?: BadgeBorderRadius,
    color?: BadgeColor,
    type?: BadgeType,
    label?: string,
}

const checkPropsInClasses = (propsWithLabel?: CheckPropsInClasses) => {
    const {
        size = 'medium',
        borderRadius = 'max',
        color = 'brand',
        type = 'contained',
        label = 'Статус',
    } = propsWithLabel ?? {};
    const badgeElement = screen.getByText(label);
    const props = { size, borderRadius, color, type };

    expectPropsMapInClasses(badgeElement)(props);
};

describe('Badge', () => {
    testStyleParams<BadgeStyleParams, BadgeProps>(
        Badge,
        { children: 'Статус' },
    )({
        color: ['brand', 'secondary', 'info', 'success', 'warning', 'danger', 'text'],
        size: ['small', 'medium', 'large'],
        borderRadius: ['xSmall', 'small', 'medium', 'large', 'xLarge', 'max'],
        type: ['contained', 'outlined', 'ghosted'],
    });

    it('default with counter', () => {
        const { asFragment } = render(<Badge counter={55}>Статус</Badge>);

        expect(screen.queryByText('Статус')).toBeInTheDocument();
        expect(screen.queryByText('55')).toBeInTheDocument();
        checkPropsInClasses();
        expect(asFragment()).toMatchSnapshot();
    });
});
