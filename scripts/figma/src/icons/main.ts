import { exportIcons } from './index';
import { errorHandler } from '../utils';

exportIcons()
    .catch(errorHandler);
