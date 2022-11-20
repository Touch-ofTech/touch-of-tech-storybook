import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Skeleton } from './Skeleton';

export default {
  title: 'Components/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton {...args} />
);

export const Circle = Template.bind({});
Circle.args = {
  type: 'circle',
};

export const Square = Template.bind({});
Square.args = {
  type: 'container',
  width: '160px',
  height: '160px',
};

export const Rectangule = Template.bind({});
Rectangule.args = {
  type: 'container',
  width: '112px',
  height: '42px',
};

export const H1 = Template.bind({});
H1.args = {
  type: 'container',
  width: '162px',
  height: '32px',
};

export const H2 = Template.bind({});
H2.args = {
  type: 'container',
  width: '162px',
  height: '24px',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  type: 'container',
  width: '162px',
  height: '12px',
};

export const CompleteSkeleton = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      width: '1000px',
      height: '1000px',
    }}
  >
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Skeleton type="circle" width="40px" height="40px" />
      <div style={{ marginLeft: '8px' }}>
        <Skeleton type="container" width="110px" height="12px" />
      </div>
    </div>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Skeleton type="container" width="160px" height="160px" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'space-beetwen',
          marginLeft: '18px',
          gap: '8px',
        }}
      >
        <Skeleton type="container" width="162px" height="32px" />
        <Skeleton type="container" width="162px" height="21px" />
        <Skeleton type="container" width="162px" height="21px" />
        <Skeleton type="container" width="162px" height="21px" />
        <Skeleton type="container" width="82px" height="21px" />
      </div>
    </div>
  </div>
);
