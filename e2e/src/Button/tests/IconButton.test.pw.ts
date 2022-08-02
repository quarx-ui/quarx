import { IconButtonProps } from '@kit';
import { initTest } from '@e2e/test-utils/initTest';

const { testProps } = initTest<IconButtonProps>('IconButton');

testProps('IconButton', {
    targetProps: {
        borderRadius: ['xSmall', 'small', 'medium', 'large', 'xLarge'],
        size: ['xSmall', 'small', 'medium', 'large'],
        color: ['secondary', 'success', 'info', 'warning', 'danger'],
        disabled: [true],
    },
});
