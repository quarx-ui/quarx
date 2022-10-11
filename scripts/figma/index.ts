import { errorHandler } from './src/utils';
import { exportIcons } from './src/icons';

const main = async () => {
    Promise.all([
        exportIcons(),
    ])
        .catch(errorHandler);
};

main().finally();
