import { ComponentMeta, ComponentStory } from '@storybook/react';
import { LinealProgressBar } from './LinearProgressBar';

export default {
  title: 'Components/linealProgressBar',
  component: LinealProgressBar,
  argTypes: { color: { control: 'color' } },
} as ComponentMeta<typeof LinealProgressBar>;

const Template: ComponentStory<typeof LinealProgressBar> = (args) => (
  <LinealProgressBar {...args} />
);

export const withLabel = Template.bind({});
withLabel.args = {
  label: 'With label',
  value: 30,
};

export const withoutLabel = Template.bind({});

export const customColor = Template.bind({});
customColor.args = {
  label: 'Custom Progress Bar',
  value: 50,
  color: '#7B61FF',
};
