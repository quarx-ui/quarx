import { render } from '@testing-library/react';
import {
    Dropdown,
    DropdownProps,
    QX_SIZE,
} from '@core';

describe('Dropdown', () => {
    beforeEach(() => {
        class ResizeObserver {
            // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
            observe() {}

            // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
            unobserve() {}

            // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
            disconnect() {}
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.ResizeObserver = ResizeObserver;
    });

    const Template = (props: Partial<DropdownProps>) => (
        <Dropdown
            anchor={{ x: 0, y: 0 }}
            onClickAway={() => undefined}
            PopupProps={{ disablePortal: true }}
            open
            {...props}
        >
            Title
        </Dropdown>
    );

    [
        QX_SIZE.small,
        QX_SIZE.medium,
        QX_SIZE.large,
    ].forEach((size) => {
        it(size, () => {
            const { asFragment } = render(<Template size={size} />);
            expect(asFragment()).toMatchSnapshot();
        });
    });

    [false, true].forEach((state) => {
        it(`searchable ${state}`, () => {
            const { asFragment } = render(<Template searchable={state} />);
            expect(asFragment()).toMatchSnapshot();
        });
    });

    it('enabled all snapshot', () => {
        const { asFragment } = render((
            <Dropdown
                open
                anchor={{ x: 0, y: 0 }}
                onClickAway={() => undefined}
                title="Title"
                searchable
                searchPlaceHolder="Test placeholder"
                PopupProps={{ disablePortal: true }}
                buttonManagement
            >
                Test
            </Dropdown>
        ));
        expect(asFragment()).toMatchSnapshot();
    });
});
