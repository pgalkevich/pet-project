import { render, screen } from '@testing-library/react';
import { Button, EButtonTheme } from './Button';

describe('Button tests', () => {
    test('Default Button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Clear Button', () => {
        render(<Button theme={EButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});