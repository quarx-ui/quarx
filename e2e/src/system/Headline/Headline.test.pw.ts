import { initTest } from '@e2e/test-utils';
import { HeadlineProps, PALETTE_TEXT_KEYS, QX_SIZE } from '@kit';

const { test } = initTest<HeadlineProps>('Headline');

const sizes = Object.values(QX_SIZE);
const colors = [PALETTE_TEXT_KEYS.main, PALETTE_TEXT_KEYS.secondary, PALETTE_TEXT_KEYS.tertiary, 'crimson'];

test('Headline', async ({ compareSnapshotsMap }) => {
    await compareSnapshotsMap({
        targetProps: {
            size: sizes,
            color: colors,
        },
        commonProps: {
            component: 'span',
            children: 'Базовая типографика: заголовок',
        },
    });
});
