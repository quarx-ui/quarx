import { FC } from 'react';
import { LabelProps } from './types';

export const Label: FC<LabelProps> = ({
    disableLabel,
    label,
    required,
    requiredSymbol,
    disableRequiredSymbol = false,
    onClick,
    styles,
    cn,
}) => {
    if (disableLabel) { return null; }

    return (
        <div
            css={styles.label}
            className={cn('label')}
            onClick={onClick}
        >
            {label}
            {required && !disableRequiredSymbol && (
                <span
                    css={styles.requiredSymbol}
                    className={cn('requiredSymbol')}
                >
                    {requiredSymbol}
                </span>
            )}
        </div>
    );
};
