import { TextField, TextFieldProps, useBooleanState, usePropsOverwrites } from '@core';
import { NumericFormat, PatternFormatProps, usePatternFormat } from 'react-number-format';
import { ChangeEventHandler, FC, MouseEventHandler, useRef, useState } from 'react';
import { FormatInputValueFunction } from 'react-number-format/types/types';
import { useStyles } from './styles';

export const DateFormatter: FC<Partial<PatternFormatProps<TextFieldProps>>> = (initialProps) => {
    const { props, cn, styleProps } = usePropsOverwrites('DateFormatter', initialProps);
    const { onClick: onClickExternal, onChange: onChangeExternal } = props;
    const inputRef = useRef<HTMLInputElement>();

    const { state: isShowLabel, setTrue: showLabel, setFalse: hideLabel } = useBooleanState(true);

    // const [caretBoundary, setCaretBoundary] = useState<boolean[]>(Array.from({ length: (value?.length || 0) + 1 }, () => false));

    const styleParams = { };

    const styles = useStyles(styleParams); // todo добавить нормальные params

    // const { format, ...rest } = usePatternFormat({
    //     allowEmptyFormatting: true,
    //     ...props,
    //     value,
    //     format: '##.##.####',
    //     customInput: TextField,
    //     inputRef,
    // }); // хуй там плавал

    const onClick: MouseEventHandler<HTMLDivElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // console.log(e, 'click');
        onClickExternal?.(e);
    };

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        // console.log(e, 'change');
        onChangeExternal?.(e);
    };

    // const formatValidator: FormatInputValueFunction = (val) => format(val);

    return (
        <div
            className={cn('input', styleParams)}
            css={styles.root}
            onClick={onClick}
        >
            <NumericFormat
                className={cn('input', styleParams)}
                css={styles.input}
                maxLength={2}
            />
            .
            <NumericFormat
                className={cn('input', styleParams)}
                css={styles.input}
                maxLength={2}
            />
            .
            <NumericFormat
                className={cn('input', styleParams)}
                css={styles.input}
                maxLength={2}
            />
            .
            <NumericFormat
                className={cn('input', styleParams)}
                css={styles.input}
                maxLength={2}
            />

        </div>
    );
};
