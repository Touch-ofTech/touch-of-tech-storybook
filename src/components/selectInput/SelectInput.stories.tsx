import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectInput } from './SelectInput';

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
  args: {
    label: 'Select Input Story',
    values: [
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
    ],
  },
} as ComponentMeta<typeof SelectInput>;

const Template: ComponentStory<typeof SelectInput> = (args) => (
  <div style={{ width: '240px' }}>
    <SelectInput {...args} />
  </div>
);

export const Default = Template.bind({});
