import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Small = Template.bind({});

export const Large = Template.bind({});
Large.args = {
  widthSize: '490px',
  heightSize: '195px',
};

export const Children = Template.bind({});
Children.args = {
  widthSize: '511px',
  heightSize: '745px',
};
