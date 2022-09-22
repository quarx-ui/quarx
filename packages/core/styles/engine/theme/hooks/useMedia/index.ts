import { isQxDevice } from '@core/enums';
import { useLayoutEffect, useState } from 'react';
import { useTheme } from '../useTheme';
import { UseMediaArg } from './types';
import { deviceToBreakpoint, removeMediaPrefix } from './helpers';

export const useMedia = (media: UseMediaArg): boolean => {
    const { breakpoints } = useTheme();

    const getQueryFromString = (query: string) => (
        isQxDevice(query)
            ? breakpoints.only(deviceToBreakpoint[query])
            : query
    );

    const mediaString = typeof media === 'function'
        ? media(breakpoints)
        : getQueryFromString(media);

    const query = removeMediaPrefix(mediaString);

    const [match, setMatch] = useState(matchMedia(query).matches);

    useLayoutEffect(() => {
        const queryList = matchMedia(query);
        const updateMatch = ({ matches }: MediaQueryListEvent) => setMatch(matches);
        queryList.addEventListener('change', updateMatch);

        return () => {
            queryList.removeEventListener('change', updateMatch);
        };
    }, [query]);

    return match;
};
