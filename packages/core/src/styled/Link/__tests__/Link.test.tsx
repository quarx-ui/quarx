/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { testStyleParams, expectPropsMapInClasses, expectRootCn } from '@core/test-utils';
import { render, screen } from '@testing-library/react';
import { Link, LinkProps } from '@core';
import { LinkStyleParams } from '../styles';
import { ChevronRight16, Gear16 } from '../stories/assets';

const linkTestId = 'Link';

describe('Link', () => {
    it('className', () => {
        expectRootCn(Link, 'QxLink');
    });

    testStyleParams<LinkStyleParams, LinkProps>(
        Link,
        { children: 'Настройки' },
    )({
        color: ['brand', 'secondary', 'info', 'success', 'warning', 'danger'],
        size: ['inherit', 'S', 'M', 'L', 'XL'],
        disabled: [true, false],
        underline: ['always', 'hover', 'none'],
    });

    it('default style props', () => {
        const { asFragment } = render(<Link data-testid={linkTestId}>Перейти</Link>);

        const defaultProps: LinkStyleParams = {
            underline: 'always',
            color: 'info',
            size: 'inherit',
            disabled: false,
        };

        const element = screen.getByTestId(linkTestId);

        expectPropsMapInClasses(element)(defaultProps as unknown as Record<string, string | boolean>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('text should be in document', () => {
        const text = 'Перейти куда-то';
        render(<Link>{text}</Link>);

        expect(screen.queryByText(text)).toBeInTheDocument();
    });

    it('icons should be in document', () => {
        const gearTestId = 'gear-icon';
        const chevronRightTestId = 'chevron-right-icon';

        const { asFragment } = render(
            <Link
                leftItem={<Gear16 data-testid={gearTestId} />}
                rightItem={<ChevronRight16 data-testid={chevronRightTestId} />}
            >
                Настройки
            </Link>,
        );

        expect(screen.getByTestId(gearTestId)).toBeInTheDocument();
        expect(screen.getByTestId(chevronRightTestId)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });

    it('should work with custom tag', () => {
        const { asFragment } = render(<Link component="div" data-testid={linkTestId}>Перейти</Link>);

        expect(screen.getByTestId(linkTestId).nodeName).toBe('DIV');
        expect(asFragment()).toMatchSnapshot();
    });

    it('should work with custom Component', async () => {
        const customComponentId = 'custom-component';

        const CustomComponent = (props: any) => <div data-testid={customComponentId} {...props} />;
        const { asFragment } = render(<Link component={CustomComponent}>Перейти</Link>);

        expect(screen.getByTestId(customComponentId)).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
});
