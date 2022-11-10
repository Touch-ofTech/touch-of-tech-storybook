import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography } from './Typography';

test('renders text input component', () => {
  render(<Typography type="h1" label="This is a header" />);
  expect(screen).toBeDefined();
});
