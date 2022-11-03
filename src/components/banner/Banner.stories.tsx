import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner } from './Banner';

export default {
  title: 'Components/Banner',
  component: Banner,
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Success = Template.bind({});
Success.args = {
  label: 'Congratulations! You’ve done something great!',
  theme: 'success',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Beware you should be careful with this',
  theme: 'danger',
};

export const Warning = Template.bind({});
Warning.args = {
  label: 'Holy component library, Batman! It’s gone wrong',
  theme: 'warning',
};

export const Info = Template.bind({});
Info.args = {
  label: 'Oh, hey there, this is just a friendly reminder',
  theme: 'info',
};
