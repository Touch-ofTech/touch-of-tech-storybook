import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Navigation } from './Navigation';

export default {
  title: 'Components/NavigationSection',
  component: Navigation,
  args: {
    labels: ['Home', 'Our Story', 'Venue', 'Itinierary', 'Registry', 'RSVP'],
    logo: 'https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png',
  },
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => {
  return <Navigation {...args} />;
};

export const Default = Template.bind({});
