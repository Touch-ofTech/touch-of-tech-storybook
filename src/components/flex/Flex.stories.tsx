import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'Components/FlexContainer',
  component: Flex,
  args: {
    justify: 'center',
    align: 'center',
    direction: 'row',
    gap: '10px',
  },
} as ComponentMeta<typeof Flex>;

const heigths = [
  { height: '60px', color: 'red' },
  { height: '80px', color: 'orange' },
  { height: '30px', color: 'yellow' },
  { height: '100px', color: 'green' },
  { height: '70px', color: 'blue' },
];

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    {heigths.map((heigthVal) => (
      <div
        key={heigthVal.color}
        style={{
          width: '50px',
          backgroundColor: heigthVal.color,
          border: 'solid 3px black',
          borderRadius: '10px',
          height: heigthVal.height,
        }}
      />
    ))}
  </Flex>
);

export const Default = Template.bind({});
