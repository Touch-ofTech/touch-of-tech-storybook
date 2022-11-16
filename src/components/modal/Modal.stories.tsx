import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  const [isOpen, setisOpen] = useState(false);
  const handleClosed = () => {
    setisOpen(false);
  };
  return (
    <div style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => {
          setisOpen(true);
        }}
      >
        Open Modal
      </button>
      <Modal {...args} onClosed={handleClosed} isOpen={isOpen}>
        <span>This is a modal</span>
      </Modal>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Default',
};
export const FullWidth = Template.bind({});
FullWidth.args = {
  title: 'FullWidht',
  type: 'full-width',
};
