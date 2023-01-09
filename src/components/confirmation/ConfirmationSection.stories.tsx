import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ConfirmationSection } from './ConfirmationSection';

export default {
  title: 'Components/ConfirmationSection',
  component: ConfirmationSection,
  argTypes: {
    title: { control: 'text' },
    text: { control: 'text' },
    label: { control: 'text' },
  },
} as ComponentMeta<typeof ConfirmationSection>;

const Template: ComponentStory<typeof ConfirmationSection> = (args) => (
  <ConfirmationSection {...args} />
);

export const Default = Template.bind({});
