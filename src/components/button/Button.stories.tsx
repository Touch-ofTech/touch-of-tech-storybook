import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  args: {
    label: 'Button',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    fontColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  disable: false,
};

export const Secondary = Template.bind({});

export const Success = Template.bind({});
Success.args = {
  size: 'small',
  className: 'success',
  primary: true,
};

export const Danger = Template.bind({});
Danger.args = {
  className: 'danger',
  primary: true,
  size: 'small',
};

export const Info = Template.bind({});
Info.args = {
  className: 'info',
  primary: true,
  size: 'small',
  label: 'Link',
};

export const Custom = Template.bind({});
Custom.args = {
  size: 'small',
  label: 'Custom',
  backgroundColor: '#7B61FF',
  primary: true,
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Disable = Template.bind({});
Disable.args = {
  disable: true,
};

export const Outline = Template.bind({});
Outline.args = {
  size: 'medium',
  className: 'outline',
  primary: true,
};
