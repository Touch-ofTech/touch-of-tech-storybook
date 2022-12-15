import { ComponentMeta, ComponentStory } from '@storybook/react';
import { HeroSection } from './HeroSection';

export default {
  title: 'Components/Hero Section',
  component: HeroSection,
} as ComponentMeta<typeof HeroSection>;

const Template: ComponentStory<typeof HeroSection> = (args) => (
  <HeroSection {...args} />
);

export const Hero = Template.bind({});
Hero.args = {
  names: 'Caleb & Amaya',
  date: 'July 15,2022',
  location: 'Boise, Idaho',
};
