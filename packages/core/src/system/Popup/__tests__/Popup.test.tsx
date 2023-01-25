import { testStyleParams } from '@core/test-utils';
import {
    OmittedPopupStyleParams,
    Popup,
    PopupProps,
    PopupStyleParams,
} from '@core';
import { cleanup, render } from '@testing-library/react';

class ResizeObserver {
    /* eslint-disable class-methods-use-this, @typescript-eslint/no-empty-function, lines-between-class-members */
    observe() {}
    unobserve() {}
    disconnect() {}
    /* eslint-enable class-methods-use-this, @typescript-eslint/no-empty-function, lines-between-class-members */
}

describe('Popup tests', () => {
    let root = null;
    window.ResizeObserver = ResizeObserver;

    beforeEach(() => {
        cleanup();
        root = document.createElement('div');
        document.body.append(root);
    });

    testStyleParams<Omit<PopupStyleParams, keyof OmittedPopupStyleParams>, PopupProps>(
        Popup,
        {
            disableBackdrop: false,
        },
        {
            open: true,
            anchor: { current: root },
            onClickAway: () => undefined,
            children: 'Статус',
            disablePortal: true,
        },
    )({
        disableBackdrop: [false, true],
    });

    const TestChildren = 'Popup content';
    it('default popup render', () => {
        const { getByText } = render((
            <Popup
                open
                anchor={{ x: 0, y: 0 }}
                onClickAway={() => undefined}
            >
                {TestChildren}
            </Popup>
        ));
        expect(getByText(TestChildren)).toBeInTheDocument();
    });

    it('hidden popup', () => {
        const { queryByText } = render((
            <Popup
                open={false}
                anchor={{ x: 0, y: 0 }}
                onClickAway={() => undefined}
            >
                {TestChildren}
            </Popup>
        ));
        expect(queryByText(TestChildren)).toBe(null);
    });

    it('disablePortal', () => {
        const { asFragment } = render((
            <div>
                <Popup
                    open
                    anchor={{ x: 0, y: 0 }}
                    onClickAway={() => undefined}
                    disablePortal
                >
                    {TestChildren}
                </Popup>
            </div>
        ));
        expect(asFragment()).toMatchSnapshot();
    });
});
