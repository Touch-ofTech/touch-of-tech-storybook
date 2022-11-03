import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Grid } from './Grid';

export default {
  title: 'Components/GridContainer',
  component: Grid,
  args: {
    template_rows: 'repeat(10,50px 20px 40px)',
    template_columns: '500px 60px',
    gap: '10px',
  },
} as ComponentMeta<typeof Grid>;

const colors = [
  'tomato',
  'sandybrown',
  'yellow',
  'olivedrab',
  'steelblue',
  'mediumorchid',
];

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    {colors.map((color) => (
      <div
        key={color}
        style={{
          backgroundColor: color,
          border: 'solid 3px black',
          borderRadius: '10px',
          height: '100%',
        }}
      />
    ))}
  </Grid>
);

export const Default = Template.bind({});
