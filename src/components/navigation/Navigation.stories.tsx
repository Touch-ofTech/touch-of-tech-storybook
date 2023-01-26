import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navigation } from './Navigation';

export default {
  title: 'Components/NavigationSection',
  component: Navigation,
  args: {
    labels: ['Home', 'Our Story', 'Venue', 'Itinierary', 'Registry', 'RSVP'],
    innitial1: 'C',
    innitial2: 'M',
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => {
  return <Navigation {...args} />;
};

export const Default = Template.bind({});
