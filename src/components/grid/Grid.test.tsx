import { render, screen } from '@testing-library/react';
import { Grid } from './Grid';

describe('Grid container test', () => {
  it('Renders without crashing', () => {
    render(
      <Grid
        template_columns="10px 10px"
        template_rows="10px 10px"
        gap="10px"
      />,
    );
    expect(screen.getByTestId('grid-component')).toBeDefined();
  });
  it('Renders children with content', () => {
    render(
      <Grid template_columns="10px 10px" template_rows="10px 10px" gap="10px">
        <div>HelloWorldTest</div>
      </Grid>,
    );
    expect(screen.getByTestId('grid-component')).toHaveTextContent(
      'HelloWorldTest',
    );
  });
});
