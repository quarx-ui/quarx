import { FC, Fragment } from 'react';
import { WarningIcon } from '../assets';
import { BottomProps } from './types';

export const Bottom: FC<BottomProps> = ({
    helperText,
    counter,
    errorText,
    errorIcon = <WarningIcon />,
    maxLength,
    length,
    styles,
    cn,
}) => {
    const hasErrorText = errorText !== undefined && errorText !== '';

    return (
        <div
            css={styles.bottom}
            className={cn('bottom')}
        >
            <div
                css={styles.bottomText}
                className={cn('bottomText')}
            >
                {hasErrorText
                    ? (
                        <Fragment>
                            {errorIcon}
                            <div
                                css={styles.errorText}
                                className={cn('errorText')}
                            >
                                {errorText}
                            </div>
                        </Fragment>
                    )
                    : helperText || null}
            </div>
            {
                counter && (
                    <div
                        css={styles.counterText}
                        className={cn('counterText')}
                    >
                        <span
                            css={styles.length}
                            className={cn('length')}
                        >
                            {length}
                        </span>
                        {maxLength !== undefined
                            ? (
                                <Fragment>
                                    <span
                                        css={styles.counterSlash}
                                        className={cn('counterSlash')}
                                    >
                                        &nbsp;/&nbsp;
                                    </span>
                                    <span>{maxLength}</span>
                                </Fragment>
                            )
                            : ''}
                    </div>
                )
            }
        </div>
    );
};
