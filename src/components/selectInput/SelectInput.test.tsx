import { render, screen } from '@testing-library/react';
import { SelectInput } from './SelectInput';

const values = [
  'tomato',
  'sandybrown',
  'yellow',
  'olivedrab',
  'steelblue',
  'sunflower',
  'salmon',
  'teal',
  'lightgrey',
  'royalblue',
  'coralreef',
  'mediumorchid',
];

describe('Basic select input component test', () => {
  it('Render correctly', () => {
    render(<SelectInput label="Test Select" values={values} />);
    expect(screen.getByTestId('storybook-select-input-test_id')).toBeDefined();
  });

  it('Input´s label have the text content', () => {
    render(<SelectInput label="Test Select" values={values} />);
    expect(
      screen.getByTestId('storybook-select-input-test_id'),
    ).toHaveTextContent('Test Select');
  });
});
