export const pw = (componentName: string): string => `\
import { initTest } from '@e2e/test-utils';
import { ${componentName}Props } from '@kit';

// TODO: Тестируемый компонент необходимо добавить в e2e/src/index.ts
const { test } = initTest<${componentName}Props>('${componentName}');

test('${componentName}', async ({ compareSnapshotsMap, compareSnapshots }) => {
    await compareSnapshotsMap({
        targetProps: {
        },
        commonProps: {
        },
    });
});
`;
