import { render, screen } from '@testing-library/react';
import {
    AlertProps,
    AlertStyleParams,
    Alert,
    ALERT_SIZE,
    ALERT_COLORS,
    ALERT_TYPE,
    ELEVATION_SIZE,
    ELEVATION_TYPE,
} from '@core';
import { testStyleParams } from '@quarx-ui/core/test-utils';
import userEvent from '@testing-library/user-event';

describe('Alert', () => {
    testStyleParams<AlertStyleParams, AlertProps>(
        Alert,
        {
            size: ALERT_SIZE.large,
            color: ALERT_COLORS.default,
            background: 'main',
            elevation: 'medium',
            type: ALERT_TYPE.vertical,
            isMinimalView: false,
        },
    )({
        color: Object.values(ALERT_COLORS),
        size: Object.values(ALERT_SIZE),
        type: Object.values(ALERT_TYPE),
        elevation: Object.values(ELEVATION_SIZE),
        isMinimalView: [false, true],
        background: Object.values(ELEVATION_TYPE),
    });

    it('elements', () => {
        const mockedOnClose = jest.fn();
        const mockedOnPrimaryClick = jest.fn();
        const { asFragment } = render(
            <Alert
                title="Title"
                description="Description"
                PrimaryButtonProps={{ children: 'Primary', onClick: mockedOnPrimaryClick }}
                SecondaryButtonProps={{ children: 'Secondary' }}
                CloseButtonProps={{
                    IconButtonProps: {
                        'data-testid': 'alert-close-button',
                    },
                }}
                onClose={mockedOnClose}
            />,
        );
        const primaryButton = screen.getByText('Primary');
        const closeButton = screen.getByTestId('alert-close-button');

        userEvent.click(primaryButton);
        userEvent.click(closeButton);

        expect(asFragment()).toMatchSnapshot();
        expect(mockedOnPrimaryClick).toBeCalledTimes(1);
        expect(mockedOnClose).toBeCalledTimes(1);
    });
});
