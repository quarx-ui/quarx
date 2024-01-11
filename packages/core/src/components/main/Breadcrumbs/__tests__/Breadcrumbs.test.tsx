import {
    Breadcrumbs,
    BreadcrumbsProps,
    BreadcrumbsStyleParams,
    BreadCrumbVisualProps,
    PALETTE_COLORS,
} from '@core';
import { testStyleParams } from '@quarx-ui/core/test-utils';
import { render } from '@testing-library/react';
import styled from '@emotion/styled';
import { FC } from 'react';

describe('Breadcrumbs', () => {
    const crumbs = [
        { value: 0, link: '#', text: 'Главная' },
        { value: 1, link: '#', text: 'Продукты' },
        { value: 2, link: '#', text: 'Самокат' },
        { value: 3, link: '#', text: 'Напитки' },
        { value: 4, link: '#', text: 'Энергетики' },
        { value: 5, link: '#', text: 'Энергетики от самоката' },
        { value: 6, link: '#', text: 'Скидка 300 ₽ на любой заказ от 1 500 ₽' },
    ];

    testStyleParams<BreadcrumbsStyleParams, BreadcrumbsProps>(
        Breadcrumbs,
        {
            size: 'medium',
            disableFocus: false,
            color: 'brand',
            type: 'link',
        },
        { crumbs },
    )({
        color: Object.values(PALETTE_COLORS),
        size: ['small', 'medium', 'large'],
        disableFocus: [false, true],
        type: ['contained', 'link'],
    });

    test('Кастомные компоненты', () => {
        const CustomComponent: FC<BreadCrumbVisualProps> = styled('span')({});
        const { asFragment } = render((
            <Breadcrumbs
                crumbs={crumbs}
                BreadcrumbComponent={CustomComponent}
                DroppedBreadcrumbComponent={CustomComponent}
                EllipsisBreadcrumbComponent={CustomComponent}
            />
        ));
        expect(asFragment()).toMatchSnapshot();
    });

    test('Divider', () => {
        const { asFragment } = render((
            <Breadcrumbs
                crumbs={crumbs}
                divider="-"
            />
        ));
        expect(asFragment()).toMatchSnapshot();
    });

    test('Ограничители', () => {
        const { asFragment } = render((
            <Breadcrumbs
                crumbs={crumbs}
                maxCrumbTextLength={3}
                maxCurrentCrumbTextLength={2}
            />
        ));
        expect(asFragment()).toMatchSnapshot();
    });

    describe('Collapse', () => {
        const Template = (props: Partial<BreadcrumbsProps>) => (
            <Breadcrumbs
                crumbs={crumbs}
                {...props}
            />
        );

        test('default', () => {
            const { asFragment } = render(<Template collapse />);
            expect(asFragment()).toMatchSnapshot();
        });

        test('default. less than 5 crumbs', () => {
            const { asFragment } = render(<Template collapse crumbs={crumbs.slice(0, 3)} />);
            expect(asFragment()).toMatchSnapshot();
        });

        test('custom. simple', () => {
            const { asFragment } = render(<Template collapse={{ start: 2, end: 5 }} />);
            expect(asFragment()).toMatchSnapshot();
        });

        test('custom. from start', () => {
            const { asFragment } = render(<Template collapse={{ start: 0, end: 2 }} />);
            expect(asFragment()).toMatchSnapshot();
        });

        test('custom. until the end', () => {
            const { asFragment } = render(<Template collapse={{ start: 2, end: 7 }} />);
            expect(asFragment()).toMatchSnapshot();
        });
    });
});
