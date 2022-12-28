import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SideBySide } from './SideBySide';

export default {
  title: 'Components/SideBySide',
  component: SideBySide,
} as ComponentMeta<typeof SideBySide>;

const Template: ComponentStory<typeof SideBySide> = (args) => (
  <SideBySide {...args} />
);

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Sarah Miller',
  anotherTitle: 'William Boyd',
  description:
    'Sure, she’s two years older than the bride, but she might \n as well have been a twin.',
  anotherDescription:
    'Lax teammate in high school through college. You could \n say it’s a bromance, but it might be more than that.',
};

export const WithoutImage = Template.bind({});
WithoutImage.args = {
  title: 'How we meet?',
  description:
    'We met at a classmates party and didnt think much \n of it. Then a bunch of us went to karaoke after a long \n day of back-to-back classes and we both picked, "I’d \n Do Anything for Love." And it just clicked. He went \n low, I went high. There were fist pumps.',
  date: '4.23.19',
  image: false,
};
