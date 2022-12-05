import React from 'react';
import { render, screen } from '@testing-library/react';
import { If } from '..';

describe('If behavior', () => {
    it('condition true (expect to be)', () => {
        render(<If condition>If</If>);

        expect(screen.queryByText('If')).toBeInTheDocument();
    });

    it('condition false (expect not to be)', () => {
        render(<If condition={false}>If</If>);
        expect(screen.queryByText('If')).not.toBeInTheDocument();
    });
});
