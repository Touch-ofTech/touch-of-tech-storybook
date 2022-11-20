import { render, screen } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('Skeleton component test', () => {
  it('Skeleton render', () => {
    render(<Skeleton type="circle" width="50px" height="50px" />);
    expect(screen.getByTestId('container-test')).toBeDefined();
  });
});
