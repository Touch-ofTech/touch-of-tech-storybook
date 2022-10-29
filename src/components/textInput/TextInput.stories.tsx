import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextInput } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {},
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => (
  <TextInput {...args} />
);

export const Default = Template.bind({});
Default.args = {
  /* the args you need here will depend on your component */
  error: false,
  placeholder: 'Default...',
};

export const InputLabel = Template.bind({});
InputLabel.args = {
  /* the args you need here will depend on your component */
  label: 'Default Input',
  error: false,
  placeholder: 'Label...',
};

export const Error = Template.bind({});
Error.args = {
  /* the args you need here will depend on your component */
  label: 'Default Input',
  error: true,
  placeholder: 'Error...',
};

export const Valid = Template.bind({});
Valid.args = {
  /* the args you need here will depend on your component */
  label: 'Default Input',
  error: false,
  valid: true,
  placeholder: 'Valid...',
};

export const InputFormWithLabels = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      gap: '1rem',
    }}
  >
    <TextInput label="Email" placeholder="carlos@email.com" />
    <TextInput label="Password" placeholder="********" type="password" />
  </div>
);
