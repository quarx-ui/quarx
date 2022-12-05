import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { expectPropsMapInClasses, testStyleParams } from '@core/test-utils';
import { ChipsProps, ChipsStyleParams, QX_SIZE, CHIPS_VARIANT } from '@core';
import { ClosingIcon } from '@core/src/main/Chips/assets';
import { Chips } from '..';

describe('Chips snapshots', () => {
    Chips.displayName = 'Chips';

    const bools = [false, true];
    const defaultStylesProps = {
        size: QX_SIZE.medium,
        active: false,
        disableFocus: false,
        variant: CHIPS_VARIANT.input,
        disabled: false,
        elevation: false,
        leftIconExists: false,
        rightIconExists: false,
        rotateRightIcon: false,
    };
    testStyleParams<ChipsStyleParams, ChipsProps>(
        Chips,
        {
            size: QX_SIZE.medium,
            active: false,
            disableFocus: false,
            variant: CHIPS_VARIANT.input,
            disabled: false,
            elevation: false,
            leftIconExists: false,
            rightIconExists: false,
            rotateRightIcon: false,
        },
        { children: 'chips' },
    )({
        leftIconExists: [false],
        leftIconColor: ['green'],
        rightIconExists: [false],
        rotateRightIcon: bools,
        variant: Object.values(CHIPS_VARIANT),
        active: bools,
        disabled: bools,
        elevation: bools,
        disableFocus: bools,
        size: [QX_SIZE.small, QX_SIZE.medium],
    });

    const testIcons = (propName: string, styleParam: string, value: ReactElement | boolean) => (
        (): void => {
            const testId = `testStyleParams-${styleParam}-${value}`;

            const testProps = { [propName]: value };
            const testStyleProps = { [styleParam]: Boolean(value) };
            const { asFragment } = render(
                <Chips
                    {...defaultStylesProps}
                    {...testProps}
                    data-testid={testId}
                />,
            );

            const element = screen.getByTestId(testId);
            expectPropsMapInClasses(element)(testStyleProps);
            expect(asFragment()).toMatchSnapshot();
        }
    );

    const Icon = ClosingIcon.small;
    it('style params exists left icon', testIcons(
        'leftIcon',
        'leftIconExists',
        <Icon />,
    ));
    it('style params exists right icon', testIcons(
        'rightIcon',
        'rightIconExists',
        <Icon />,
    ));
});

describe('Chips behavior', () => {
    it('text should be in the document', () => {
        render(<Chips>Chips</Chips>);

        expect(screen.queryByText('Chips')).toBeInTheDocument();
    });
});
