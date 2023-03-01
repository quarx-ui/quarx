import { useMemo } from 'react';
import { createID } from '@core/utils';

export const useId = () => useMemo(() => createID(), []);
