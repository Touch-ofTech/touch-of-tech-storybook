import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GridItems } from './GridItems';

export default {
  title: 'Components/GridItems',
  component: GridItems,
} as ComponentMeta<typeof GridItems>;

const GridItemsData = [
  {
    title: 'Presents',
    description:
      'This link is suppossed to be my youtube channel. Check it out!',
    buttonLabel: 'Check it out!',
    linkUrl: 'https://www.youtube.com/channel/UCkBZPSJvLMIDzqVIs0Jpb-w',
  },
  {
    title: 'Presents 2',
    description:
      'Hey look! I alsol have a GitHub, where I post all my work from school and also Touch of tech. Check it out!',
    buttonLabel: 'Check it out!',
    linkUrl: 'https://github.com/thisisofficial',
  },
  {
    title: 'Presents 3',
    description:
      'Uhhh..I still need to fill everything here sooo... check it out! My itch.io page aswell.',
    buttonLabel: 'Check it out!',
    linkUrl: 'https://thisisofficial.itch.io/',
  },
];

const Template: ComponentStory<typeof GridItems> = () => {
  return <GridItems GridItemsValues={GridItemsData} />;
};

export const Default = Template.bind({});
