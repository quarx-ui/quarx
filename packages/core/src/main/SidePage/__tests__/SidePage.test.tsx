import React, { FC, useState } from 'react';
import { render, screen } from '@testing-library/react';
import { testStyleParams } from '@core/test-utils';
import { Button, SidePageProps, SidePage } from '@core';
import userEvent from '@testing-library/user-event';
import { SidePageStyleParams } from '@core/src/main/SidePage/styles';

const buttonTestId = 'buttonTestId';

const Template: FC<SidePageProps> = (props) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setIsOpened(true)}
                data-testid={buttonTestId}
            />
            <SidePage
                open={isOpened}
                {...props}
            />
        </div>
    );
};

describe('SidePage', () => {
    testStyleParams<Partial<SidePageStyleParams>, SidePageProps>(
        SidePage,
        {
            size: 'medium',
        },
        { open: true },
        { capture: 'body', qxClassname: 'QxModal' },
    )({
        size: ['small', 'medium'],
    });

    it('sidePage in the document', async () => {
        const { asFragment } = render(
            <Template
                title="Title"
                subTitle="SubTitle"
                body="Body"
                footerButtons={{
                    success: {
                        children: 'Success',
                    },
                    secondary: {
                        children: 'Secondary',
                    },
                    danger: {
                        children: 'Danger',
                    },
                }}
            />,
        );

        const button = screen.getByTestId(buttonTestId);

        expect(asFragment().ownerDocument.body).toMatchSnapshot();
        userEvent.click(button);
        expect(asFragment().ownerDocument.body).toMatchSnapshot();
    });

    it('keepMounted sidePage always in the document', async () => {
        const { asFragment } = render(<Template
            title="Title"
            subTitle="SubTitle"
            body="Body"
            OverScreenProps={{
                keepMounted: true,
            }}
        />);

        const button = screen.getByTestId(buttonTestId);

        expect(asFragment().ownerDocument.body).toMatchSnapshot();
        userEvent.click(button);
        expect(asFragment().ownerDocument.body).toMatchSnapshot();
    });
});
