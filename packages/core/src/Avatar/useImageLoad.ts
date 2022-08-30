import { useEffect, useState } from 'react';
import { AvatarImageProps } from './types';

export function useImgLoaded({
    src,
    srcSet,
    crossOrigin,
    referrerPolicy,
}: AvatarImageProps): { loaded: boolean, error: boolean } {
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!src && !srcSet) {
            return undefined;
        }

        setLoaded(false);
        setError(false);

        let active = true;
        const image = new Image();
        image.onload = () => {
            if (!active) {
                return;
            }
            setLoaded(true);
        };
        image.onerror = () => {
            if (!active) {
                return;
            }
            setLoaded(true);
        };
        if (crossOrigin) {
            image.crossOrigin = crossOrigin;
        }
        if (referrerPolicy) {
            image.referrerPolicy = referrerPolicy;
        }

        if (src) {
            image.src = src;
        } else {
            image.srcset = srcSet as string;
        }

        return () => {
            active = false;
        };
    }, [crossOrigin, referrerPolicy, src, srcSet]);

    return { loaded, error };
}
