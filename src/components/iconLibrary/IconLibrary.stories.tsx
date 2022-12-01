import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from './IconLibrary';
import { iconsType } from '../../utils';
import './iconStory.css';

export default {
  title: 'Components/Icons',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const SingleIcon = Template.bind({});

export const IconLibrary = () => (
  <div className="container">
    {iconsType.map((iconsVal) => (
      <div className="iconWrapper" key={iconsVal.name}>
        <Icon iconName={iconsVal.name} />
        <span>{iconsVal.name}</span>
      </div>
    ))}
  </div>
);
