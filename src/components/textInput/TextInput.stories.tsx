import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextInput } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput />;

export const Default = Template.bind({});
