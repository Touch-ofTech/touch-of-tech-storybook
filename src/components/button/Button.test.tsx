import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Basic button component test', () => {
  it('Render correctly', () => {
    render(<Button size="small" label="Test Button" disable={false} />);
    expect(screen.getByTestId('storybook-button-test_id')).toBeDefined();
  });
  it('Button have the text content', () => {
    render(<Button size="large" label="Click Me" disable={false} />);
    expect(screen.getByRole('button')).toHaveTextContent('Click Me');
  });
});
