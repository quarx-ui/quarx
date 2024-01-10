import { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import { testStyleParams } from '@quarx-ui/core/test-utils';
import { ChipsProps, ChipsStyleParams, QX_SIZE, CHIPS_VARIANT } from '@core';
import { ClosingIcon } from '@core/components/main/Chips/assets';
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
            rotateRightIcon: false,
            onlyStateIcon: false,
        },
        { children: 'chips' },
    )({
        leftIconColor: ['green'],
        rotateRightIcon: bools,
        variant: Object.values(CHIPS_VARIANT),
        active: bools,
        disabled: bools,
        elevation: bools,
        disableFocus: bools,
        size: [QX_SIZE.small, QX_SIZE.medium],
        onlyStateIcon: [false],
    });

    const testIcons = (propName: string, styleParam: string, value: ReactElement | boolean) => (
        (): void => {
            const testId = `testStyleParams-${styleParam}-${value}`;

            const testProps = { [propName]: value };
            const { asFragment } = render(
                <Chips
                    {...defaultStylesProps}
                    {...testProps}
                    data-testid={testId}
                />,
            );

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
