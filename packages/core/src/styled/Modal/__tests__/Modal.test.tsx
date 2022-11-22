import React, { FC, useState } from 'react';
import { render, screen } from '@testing-library/react';
import { testStyleParams } from '@core/test-utils';
import { Button, Modal, ModalProps, ModalStyleParams } from '@core';
import userEvent from '@testing-library/user-event';

const buttonTestId = 'buttonTestId';

const Template: FC<ModalProps> = (props) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div>
            <Button
                onClick={() => setIsOpened(true)}
                data-testid={buttonTestId}
            />
            <Modal
                open={isOpened}
                {...props}
            />
        </div>
    );
};

describe('Modal', () => {
    testStyleParams<Partial<ModalStyleParams>, ModalProps>(
        Modal,
        {
            size: 'medium',
            scrollBehaviour: 'window',
        },
        { open: true },
        { capture: 'body', qxClassname: 'QxModal' },
    )({
        size: ['small', 'medium'],
        scrollBehaviour: ['body', 'window'],
    });

    it('modal in the document', async () => {
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

    it('keepMounted modal always in the document', async () => {
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
