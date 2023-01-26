import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TemplatePage } from './Template';

export default {
  title: 'Pages/Template',
  component: TemplatePage,
} as ComponentMeta<typeof TemplatePage>;

const Template: ComponentStory<typeof TemplatePage> = (args) => (
  <TemplatePage />
);

export const MainPage = Template.bind({});
