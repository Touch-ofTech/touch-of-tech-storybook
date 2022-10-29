import React from 'react';
import { render, screen } from '@testing-library/react';
import { TextInput } from './TextInput';

test('renders text input component', () => {
  render(
    <TextInput
      data-testid="input-test"
      label="Testing"
      placeholder="This is a test"
    />,
  );
  const labelElement = screen.getByText(/Label Test/i);
  const inputBox = screen.getByTestId(/input-test/i);
  expect(labelElement).toBeInTheDocument();
  expect(inputBox).toBeInTheDocument();
});
