import React from 'react';
import { render, screen } from '@testing-library/react';
import { Badge, BadgeSize, BadgeBorderRadius, BadgeColor, BadgeType } from '@core';
import { expectPropsMapInClasses } from '@core/test-utils';

interface CheckPropsInClasses {
    size?: BadgeSize,
    borderRadius?: BadgeBorderRadius,
    color?: BadgeColor,
    type?: BadgeType,
    label?: string,
}

type CheckProps = Omit<CheckPropsInClasses, 'label'>;

const checkPropsInClasses = (propsWithLabel: CheckPropsInClasses) => {
    const {
        size = 'small',
        borderRadius = 'rounded',
        color = 'brand',
        type = 'filled',
        label = 'Статус',
    } = propsWithLabel;
    const badgeElement = screen.getByText(label);
    const props = { size, borderRadius, color, type };

    // Проверяем наличие в классах каждого пропса с нужным значением
    expectPropsMapInClasses(badgeElement)(props);
};

const checkProps = (props: CheckProps) => () => {
    const { asFragment } = render(<Badge {...props}>Статус</Badge>);

    // Проверка, что на каждый пропс есть свой класс
    // При отсутствии иного используется дефолтный пропс
    checkPropsInClasses(props);
    expect(asFragment()).toMatchSnapshot();
};

describe('Badge', () => {
    it('default', checkProps({}));
    // it('color2', checkProps({ color: 'color2' }));
    it('warning', checkProps({ color: 'warning' }));
    // it('critical', checkProps({ color: 'critical' }));
    it('outline', checkProps({ type: 'outline' }));
    it('large', checkProps({ size: 'large' }));
    it('square', checkProps({ borderRadius: 'square' }));
    it('smooth', checkProps({ borderRadius: 'smooth' }));

    it('default with counter', () => {
        const { asFragment } = render(<Badge counter={55}>Статус</Badge>);

        expect(screen.queryByText('Статус')).toBeInTheDocument();
        expect(screen.queryByText('55')).toBeInTheDocument();
        checkPropsInClasses({});
        expect(asFragment()).toMatchSnapshot();
    });
});
