export const jest = (componentName: string): string => `\
import { render, screen } from '@testing-library/react';
import { QX_SIZE, ${componentName}, ${componentName}Props, ${componentName}StyleParams } from '@core';
import { testStyleParams } from '@quarx-ui/core/test-utils';

describe('${componentName}', () => {
    testStyleParams<${componentName}StyleParams, ${componentName}Props>(
        ${componentName},
        {
            size: QX_SIZE.medium,
        },
        {},
    )({
        size: [QX_SIZE.small, QX_SIZE.medium, QX_SIZE.large],
    });
});

describe('${componentName} behavior', () => {
    it('text should be in the document', () => {
        render(<${componentName}>${componentName}</${componentName}>);

        expect(screen.queryByText('${componentName}')).toBeInTheDocument();
    });
});
`;
