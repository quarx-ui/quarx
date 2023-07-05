import { DEMONSTRATION_ALERT } from '@core/storybook/constants';

export const createDemoDescription = (description: string) => ({
    description: `${description}${DEMONSTRATION_ALERT}`,
});
