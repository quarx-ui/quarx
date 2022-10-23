export const testLayout = (componentName: string): string => `import React from 'react';
import { render, screen } from '@testing-library/react';
import { ${componentName}, ${componentName}Props, ${componentName}StyleParams } from '@core';
import { testStyleParams } from '@core/test-utils';

describe('${componentName}', () => {
    testStyleParams<${componentName}StyleParams, ${componentName}Props>(
        ${componentName},
        {},
        {},
    )({
    });
});

describe('${componentName} behavior', () => {
    it('text should be in the document', () => {
        render(<${componentName}>${componentName}</${componentName}>);

        expect(screen.queryByText('${componentName}')).toBeInTheDocument();
    });
});
`;

export const testPW = (componentName: string): string => `import { initTest } from '@e2e/test-utils/initTest';
import { ${componentName}Props } from '@kit';

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
