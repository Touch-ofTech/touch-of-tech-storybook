import { render, screen } from '@testing-library/react';
import { LinealProgressBar } from './LinearProgressBar';

describe('linear progress bar testing', () => {
  it('Render correctly', () => {
    render(<LinealProgressBar value={50} color="red" label="Test the power" />);
    expect(screen.getByTestId('progress-bar-test')).toBeDefined();
  });
});
