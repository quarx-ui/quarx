import { initTest } from '@e2e/test-utils';
import { QX_SIZE, BaseTypographyProps, BASE_TYPOGRAPHY_TYPES, PALETTE_TEXT_KEYS, TYPOGRAPHY_WEIGHT } from '@kit';

const { test } = initTest<BaseTypographyProps>('BaseTypography');

const sizes = Object.values(QX_SIZE);
const colors = [PALETTE_TEXT_KEYS.main, PALETTE_TEXT_KEYS.secondary, PALETTE_TEXT_KEYS.tertiary, 'crimson'];

test('BaseTypography', async ({ compareSnapshotsMap }) => {
    await compareSnapshotsMap({
        targetProps: {
            size: sizes,
            color: colors,
        },
        commonProps: {
            type: BASE_TYPOGRAPHY_TYPES.text,
            component: 'span',
            children: 'Базовая типографика: текст',
        },
        postfix: 'text',
    });
    await compareSnapshotsMap({
        targetProps: {
            size: sizes,
            color: colors,
        },
        commonProps: {
            type: BASE_TYPOGRAPHY_TYPES.headline,
            component: 'span',
            children: 'Базовая типографика: заголовок',
        },
        postfix: 'headline',
    });
});
