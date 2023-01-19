export const jest = (componentName: string): string => `\
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
