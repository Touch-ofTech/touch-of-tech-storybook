import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Counter } from './Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
  args: {
    date: '2023/06/24 00:00:00',
    image:
      'https://picsv3.pxsol.com/1565/company/library/user/4924453050c368ad007e4dfc0f43bca90235c6c8b6.jpg?ixlib=js-2.3.2&s=92042c258ba34b477c42b2c0e646b0a7',
    place: 'I want this to show, help',
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Default = Template.bind({});
