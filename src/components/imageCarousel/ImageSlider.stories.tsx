import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ImageSlider } from './ImageSlider';

export default {
  title: 'Components/ImageSlider',
  component: ImageSlider,
  args: {
    data: [
      {
        title: 'Hello world',
        subtitle: 'Thank you',
        img: 'https://s3-us-east-2.amazonaws.com/maryville/wp-content/uploads/2020/12/16162130/computer-programmer.jpg',
      },
      {
        title: 'Amazing!',
        subtitle: 'All of our savings are gone',
        img: 'https://www.beedigital.es/wp-content/uploads/2020/09/342c4d9715440a942a78e4417fbcbad2155746109-1.jpg',
      },
      {
        title: 'Erik (19)',
        subtitle: 'Programming is fun and not stressful',
        img: 'https://mandiner.hu/attachment/0708/707649_703079_hide_the_pain.jpg',
      },
    ],
  },
} as ComponentMeta<typeof ImageSlider>;

const Template: ComponentStory<typeof ImageSlider> = (args) => (
  <div>
    <ImageSlider {...args} />
  </div>
);

export const Default = Template.bind({});
