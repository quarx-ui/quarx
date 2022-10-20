import { useParams } from 'react-router-dom';
import { PropValueType, SEPARATORS } from '@e2e/constants';

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

export function usePropsFromURL<Props = Record<string, PropValueType>>(): Props {
    const { urlProps = '' } = useParams();
    const splitURL = urlProps.split(SEPARATORS.PROP);

    return splitURL.reduce((acc, prop) => {
        const [name, value] = prop.split(SEPARATORS.VALUE);

        return { ...acc, [name]: fromString(value) };
    }, {}) as Props;
}
