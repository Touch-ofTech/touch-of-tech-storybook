import { render, screen } from '@testing-library/react';
import { Banner } from './Banner';

describe('Basic test of banner component', () => {
  it('Banner render correctly', () => {
    render(<Banner label="Hello this is a Message" theme="success" />);
    expect(screen.getByTestId('banner-container')).toBeDefined();
  });
});
