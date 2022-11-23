import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from './IconLibrary';
import './iconStory.css';

export default {
  title: 'Components/Icons',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const SingleIcon = Template.bind({});
SingleIcon.args = {
  iconName: 'spades',
};

export const IconLibrary = () => (
  <div className="container">
    <div className="iconWrapper">
      <Icon iconName="home" />
      <span>home</span>
    </div>
    <div className="iconWrapper">
      <Icon iconName="home2" />
      <span>home2</span>
    </div>
    <div className="iconWrapper">
      <Icon iconName="office" />
      <span>office</span>
    </div>
    <div className="iconWrapper">
      <Icon iconName="newspaper" />
      <span>newspaper</span>
    </div>
    <div className="iconWrapper">
      <Icon iconName="IE" />
      <span>IE</span>
    </div>
    <div className="iconWrapper">
      <Icon iconName="opera" />
      <span>opera</span>
    </div>
    <div className="iconWrapper">
      <Icon iconName="eyedropper" />
      <span>eyedropper</span>
    </div>
    <div className="iconWrapper">
      <Icon iconName="blog" />
      <span>blog</span>
    </div>
    <div className="iconWrapper">
      <Icon iconName="chrome" />
      <span>chrome</span>
    </div>
  </div>
);
