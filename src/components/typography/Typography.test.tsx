import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

test('renders text input component as h1 type', () => {
  render(<Typography type="h1" label="This is a header" />);
  const typo = screen.getByTestId(/typography/i);
  const labelText = screen.getByText('This is a header');

  expect(screen).toBeDefined();
  expect(typo).toHaveAttribute('class', 'h1');
  expect(labelText).toBeInTheDocument();
});
