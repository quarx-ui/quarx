import React, { FC, ForwardedRef, forwardRef } from 'react';
import { usePropsOverwrites } from '@core/styles';
import { ChevronDownIcon } from '../../../assets';
import { HeaderDatePickerDropdownProps } from './types';
import { useStyles } from './styles';

export const HeaderDropdownDatePicker: FC<HeaderDatePickerDropdownProps> = forwardRef((
    initialProps: HeaderDatePickerDropdownProps, ref: ForwardedRef<HTMLDivElement>,
) => {
    const { styleProps, props, cn } = usePropsOverwrites('HeaderDropdownDatePicker', initialProps);
    const {
        innerStyles, isOpen, onOpenDropdown, currentDropdown, disable, size, borderRadius,
    } = props;

    const params = { isOpen, disable: !!disable, size, borderRadius };

    const styles = useStyles({
        ...params,
        ...styleProps,
        styles: { ...styleProps.styles, ...innerStyles?.dropdownHeaderButton },
    });

    return (
        <div
            ref={ref}
            css={styles.dropdownButton}
            onClick={!disable ? onOpenDropdown : undefined}
            className={cn('dropdownButton', params)}
        >
            {currentDropdown}
            {!disable && (
                <ChevronDownIcon
                    key="dropdownArrow"
                    className={cn('dropdownArrow', params)}
                    css={styles.dropdownArrow}
                />
            )}
        </div>
    );
});
