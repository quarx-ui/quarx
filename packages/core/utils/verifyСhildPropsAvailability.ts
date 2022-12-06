import { ReactElement } from 'react';
import { warning } from '@core/utils/exceptions';

interface ReactElementAdvanced {
    type: {
        displayName?: string;
    },
}

export const verifyChildPropsAvailability = (
    props: string[],
    child: ReactElement,
    componentPath?: string,
    helpMessage?: string,
): boolean => {
    const { props: childProps } = child;
    const childPropKeys: string[] = Object.keys(childProps);
    const notAvailableProps = childPropKeys.filter((key) => props.includes(key));
    const notAvailable = notAvailableProps.length > 0;
    if (notAvailable) {
        warning([
            'Использование свойств [',
            notAvailableProps.join(', '),
            '] в компоненте',
            `${componentPath ? `${componentPath} => ` : ''}${(child as ReactElementAdvanced).type?.displayName}`,
            'запрещено.',
            'Могут возникнуть непредвиденные ошибки',
            helpMessage,
        ].join(' '));
    }
    return !notAvailable;
};
