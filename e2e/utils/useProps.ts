import { PropValueType, SEPARATORS } from '@e2e/constants';
import { usePropsContext } from '@e2e/render-utils/usePropsContext';

const fromString = (value: string) => {
    if (value === 'true') {
        return true;
    }

    if (value === 'false') {
        return false;
    }

    if (!Number.isNaN(Number(value)) && value !== '') {
        return Number(value);
    }

    if (value === 'undefined') {
        return undefined;
    }
    return value;
};

export function useProps<Props = Record<string, PropValueType>>(): Props {
    const { props = '' } = usePropsContext() ?? {};
    const splitURL = props.split(SEPARATORS.PROP);

    return splitURL.reduce((acc, prop) => {
        const [name, value] = prop.split(SEPARATORS.VALUE);

        return { ...acc, [name]: fromString(value) };
    }, {}) as Props;
}
