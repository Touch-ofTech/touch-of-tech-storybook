import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Typography } from './Typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {},
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Main = Template.bind({});
Main.args = {
  type: 'h1',
  label: 'Main heading (Poppins 30px bold)',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'h2',
  label: 'Secondary heading (Roboto 24px bold)',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  type: 'h3',
  label: 'Tertiary heading (Roboto 24px light)',
};

export const Fourth = Template.bind({});
Fourth.args = {
  type: 'h4',
  label: 'Fourth heading (Roboto 18px bold)',
};

export const FourthSubtitles = Template.bind({});
FourthSubtitles.args = {
  type: 'h5',
  label: 'Fourth heading (Roboto 16px bold)',
};

export const Labels = Template.bind({});
Labels.args = {
  type: 'span',
  label: 'UI labels / General text (Roboto 14px normal)',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  type: 'paragraph',
  label: 'Paragraph text (Roboto 16px normal)',
};

export const Link = Template.bind({});
Link.args = {
  type: 'link',
  label: 'Link text (Roboto 14px normal)',
};
