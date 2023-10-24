import {
    FC,
    FocusEvent,
    forwardRef,
    useCallback,
    useLayoutEffect, useMemo,
    useRef,
    useState,
} from 'react';
import { Loader, QX_SIZE, usePropsOverwrites } from '@core';
import BaseTextField from '@core/src/main/TextField/BaseTextField';
import { Bottom, Label, RightItem } from '@core/src/main/TextField/elements';
import clsx from 'clsx';
import { mergeRefs } from '@core/utils/mergeRefs';
import { TextFieldProps } from './types';
import { useStyles, TEXT_FIELD_CSS_VARS } from './styles';

export const TextField: FC<TextFieldProps> = forwardRef<HTMLDivElement, TextFieldProps>((
    initialProps,
    ref,
) => {
    const { props, cn, styleProps } = usePropsOverwrites('TextField', initialProps, TEXT_FIELD_CSS_VARS);
    const {
        size = QX_SIZE.medium,
        counter = false,
        error: externalError,
        errorText: externalErrorText,
        errorIcon,
        internalErrors,
        helperText,
        maxLength,
        onChange,
        borderRadius = 'medium',
        value: externalValue,
        defaultValue,
        loading = false,
        label = '',
        disabled = false,
        hidden = false,
        readOnly = false,
        disableLabel: externalDisableLabel,
        disableRequiredSymbol = false,
        requiredSymbol = '*',
        leftItem,
        rightItem,
        placeholder,
        required = false,
        colorBase = 'main',
        onBlur: externalOnBlur,
        onFocus: externalOnFocus,
        onClear,
        focused: externalFocused,
        filled: externalFilled,
        multiline = false,
        autoFocus,
        name,
        overflow = false,
        disableInternalErrorText = false,
        disableHoverStyles = false,
        clearIconVisibleOn = multiline ? 'none' : 'interact',
        counterVisibleOn = 'focus',
        maxRows,
        rows,
        minRows,
        inputProps,
        inputRef,
        bottomIsAbsolute = false,
        ...restProps
    } = props;

    const value = externalValue !== undefined ? String(externalValue) : undefined;

    const localInputRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null);
    const [innerErrorText, setErrorText] = useState(externalErrorText);
    const [innerFocused, setFocused] = useState(externalFocused ?? false);
    const [innerFilled, setFilled] = useState(externalFocused);
    const [innerLength, setLength] = useState(value?.length ?? defaultValue?.length ?? 0);
    const [touched, setTouched] = useState(false);

    const length = value !== undefined ? value?.length : innerLength;

    const ERRORS = {
        required: 'Обязательное поле',
        maxLength: `Максимум - ${maxLength} символов`,
        ...internalErrors,
    };

    const disableLabel = externalDisableLabel || label === '';
    const focused = !disabled ? (externalFocused ?? innerFocused) : false;
    const filled = externalFilled
        ?? (length
            ? innerFilled
            : (externalFocused ?? innerFilled));
    const errorText = externalError !== false
        ? externalErrorText || (disableInternalErrorText ? undefined : innerErrorText)
        : undefined;
    const hasError = externalError ?? !!errorText;
    const hasValue = !!(filled && length);

    const bottomIsVisible = Boolean(
        !!helperText
        || !!errorText
        || (counter && counterVisibleOn === 'always')
        || (counter && counterVisibleOn === 'focus' && filled),
    );

    const params = useMemo(() => ({
        filled: !!filled,
        error: hasError,
        borderRadius,
        size,
        loading,
        focused,
        colorBase,
        multiline,
        disableLabel,
        overflowed: !!(maxLength && length > maxLength),
        disabled,
        readOnly,
        disableHoverStyles,
        clearIconVisibleOn,
        hasValue,
        rightItemIsExist: !!rightItem,
        counterVisibleOn,
        bottomIsVisible,
        bottomIsAbsolute,
    }), [
        counterVisibleOn,
        bottomIsAbsolute,
        rightItem,
        borderRadius,
        clearIconVisibleOn,
        colorBase,
        disableHoverStyles,
        disabled,
        hasValue,
        focused,
        filled,
        length,
        hasError,
        disableLabel,
        loading,
        maxLength,
        multiline,
        readOnly,
        size,
        bottomIsVisible,
    ]);

    const styles = useStyles({ params, ...styleProps });

    const setValue = useCallback((localValue: string) => {
        if (readOnly) { return; }
        const prototype = Object.getPrototypeOf(localInputRef.current);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(
            prototype,
            'value',
        )?.set;
        prototypeValueSetter?.call(localInputRef.current, localValue);
        localInputRef.current?.dispatchEvent(
            new InputEvent('change', { bubbles: true }),
        );
    }, [readOnly]);

    const onInputChange: TextFieldProps['onChange'] = useCallback((event) => {
        if (disabled && readOnly) { return; }
        setLength(event.target.value.length);
        setTouched(true);
        if (maxLength && event.target.value.length > maxLength) {
            setErrorText(ERRORS.maxLength);
        } else {
            setErrorText(undefined);
        }
        onChange?.(event);
    }, [ERRORS.maxLength, disabled, maxLength, onChange, readOnly]);

    const onClickToFocus = useCallback(() => {
        if (disabled || readOnly) { return; }
        setFocused(true);
        setFilled(true);
        if (externalFocused === undefined) {
            localInputRef.current?.focus();
        }
    }, [disabled, externalFocused, readOnly]);

    const onFocus = useCallback((event: FocusEvent<HTMLDivElement>) => {
        onClickToFocus();
        externalOnFocus?.(event);
    }, [externalOnFocus, onClickToFocus]);

    const resetValue = useCallback(() => {
        if (disabled || readOnly || !hasValue) { return; }
        const currentValue = localInputRef.current?.value ?? '';

        setValue('');

        localInputRef.current?.focus();
        onClear?.(currentValue);
    }, [disabled, hasValue, onClear, readOnly, setValue]);

    const onBlur = useCallback((event: FocusEvent<HTMLDivElement>) => {
        if (disabled) { return; }
        setFocused(false);
        if (!localInputRef.current?.value.length) {
            setFilled(false);
            if (required && touched) {
                setErrorText(ERRORS.required);
            }
        }
        externalOnBlur?.(event);
    }, [ERRORS.required, disabled, externalOnBlur, required, touched]);

    useLayoutEffect(() => {
        if (value === undefined) { return; }

        if (maxLength !== undefined && !overflow && length > maxLength) {
            setValue(value.slice(0, maxLength));
            setErrorText(ERRORS.maxLength);
        }
    }, [ERRORS.maxLength, length, maxLength, overflow, setValue, value]);

    useLayoutEffect(() => {
        if (!required) { return; }

        if (length && errorText === ERRORS.required) {
            setErrorText(undefined);
        } else if (length === 0 && touched) {
            setErrorText(ERRORS.required);
        }
    }, [ERRORS.required, errorText, length, required, touched]);

    useLayoutEffect(() => {
        if (length) {
            setFilled(true);
        } else if (!focused) {
            setFilled(false);
        }
    }, [focused, length]);

    useLayoutEffect(() => {
        if (maxLength && length > maxLength && overflow && errorText !== ERRORS.maxLength) {
            setErrorText(ERRORS.maxLength);
            return;
        }
        if (maxLength && length <= maxLength && errorText === ERRORS.maxLength) {
            setErrorText(undefined);
        }
    }, [ERRORS.maxLength, errorText, overflow, length, maxLength]);

    useLayoutEffect(() => {
        if (autoFocus) {
            localInputRef.current?.focus();
        }
    }, [autoFocus]);

    const labelProps = useMemo(() => ({
        label,
        disableLabel,
        styles,
        cn,
        required,
        requiredSymbol,
        disableRequiredSymbol,
        onClick: onClickToFocus,
    }), [cn, onClickToFocus, disableRequiredSymbol, disableLabel, label, required, requiredSymbol, styles]);

    if (hidden) {
        return null;
    }

    return (
        <div
            css={styles.root}
            className={cn('root', params)}
            ref={ref}
            onFocus={onFocus}
            {...restProps}
        >
            {size === 'small' && <Label {...labelProps} />}
            <div
                css={styles.field}
                className={cn('field')}
            >
                {leftItem && (
                    <div
                        css={[styles.leftItem, styles.sideItem]}
                        className={clsx(cn('leftItem'), cn('sideItem'))}
                    >
                        {leftItem}
                    </div>
                )}
                <div
                    css={styles.content}
                    className={cn('content')}
                    onClick={onClickToFocus}
                    onBlur={onBlur}
                >
                    {size !== 'small' && <Label {...labelProps} />}
                    <BaseTextField
                        css={styles.input}
                        className={cn('input')}
                        multiline={multiline}
                        rows={rows}
                        minRows={minRows}
                        maxRows={maxRows}
                        maxLength={overflow ? undefined : maxLength}
                        disabled={disabled || loading}
                        required={required}
                        placeholder={placeholder}
                        value={value}
                        defaultValue={defaultValue}
                        readOnly={readOnly}
                        name={name}
                        inputProps={inputProps}
                        onChange={onInputChange}
                        ref={mergeRefs(inputRef, localInputRef)}
                    />
                </div>
                <RightItem
                    item={rightItem}
                    cn={cn}
                    styles={styles}
                    resetValue={resetValue}
                    disableClearIcon={clearIconVisibleOn === 'none'}
                />
                {loading && (
                    <Loader
                        css={styles.loader}
                        className={cn('loader')}
                    />
                )}
            </div>
            <Bottom
                styles={styles}
                cn={cn}
                errorText={errorText}
                errorIcon={errorIcon}
                length={length}
                maxLength={maxLength}
                helperText={helperText}
                counter={counter}
            />
        </div>
    );
});
