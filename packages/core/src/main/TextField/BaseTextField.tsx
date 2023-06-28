import {
    ChangeEventHandler,
    ClipboardEventHandler,
    FC,
    forwardRef,
    Ref,
    useLayoutEffect,
    useState,
} from 'react';
import { BaseTextFieldProps, TextFieldRefType } from '@core/src/main/TextField/types';
import { mergeRefs } from '@core/utils/mergeRefs';

const listenRowsChanges = (ref: TextFieldRefType | null, maxRows?: number) => {
    if (!ref || !maxRows) { return; }

    const refStyles = window.getComputedStyle(ref);
    const lineHeight = parseInt(refStyles.lineHeight, 10);

    // eslint-disable-next-line no-param-reassign
    ref.style.height = 'unset';

    const { scrollHeight } = ref;
    const rowsLength = Math.round(scrollHeight / lineHeight);

    if (maxRows && rowsLength > maxRows) {
        const maxScrollHeight = Math.round(lineHeight * maxRows);

        // eslint-disable-next-line no-param-reassign
        ref.style.height = `${maxScrollHeight}px`;
        return;
    }
    // eslint-disable-next-line no-param-reassign
    ref.style.height = `${scrollHeight}px`;
};

const BaseTextField: FC<BaseTextFieldProps> = forwardRef<TextFieldRefType, BaseTextFieldProps>((
    props,
    ref,
) => {
    const {
        multiline,
        className,
        inputProps,
        maxRows: externalMaxRows,
        minRows: externalMinRows,
        rows: externalRows,
        ...restProps
    } = props;

    function isInputRef(refProp: Ref<TextFieldRefType>): refProp is Ref<HTMLInputElement> {
        return !multiline;
    }

    const minRows = externalMinRows ?? externalRows;
    const maxRows = externalMaxRows ?? externalRows;
    const rows = minRows;

    const [innerInputRef, setInnerInputRef] = useState<TextFieldRefType | null>(null);

    const onChangeTextArea: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        listenRowsChanges(innerInputRef, maxRows);

        props.onChange?.(e);
    };

    const onPasteTextArea: ClipboardEventHandler<HTMLTextAreaElement> = (e) => {
        listenRowsChanges(innerInputRef, maxRows);

        props.inputProps?.onPaste?.(e);
    };

    useLayoutEffect(() => {
        listenRowsChanges(innerInputRef, maxRows);
    }, [innerInputRef, maxRows]);

    if (multiline) {
        return (
            <textarea
                rows={rows}
                className={className}
                {...restProps}
                onChange={onChangeTextArea}
                onPaste={onPasteTextArea}
                {...inputProps}
                ref={mergeRefs(ref, setInnerInputRef)}
            />
        );
    }
    return (
        <input
            className={className}
            {...restProps}
            {...props.inputProps}
            ref={isInputRef(ref) ? ref : undefined}
        />
    );
});

export default BaseTextField;
