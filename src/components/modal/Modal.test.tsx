import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal  test', () => {
  it('Renders without crashing', () => {
    render(
      <Modal isOpen title="Hola" type="" onClosed={undefined}>
        This is a modal
      </Modal>,
    );
    expect(screen.getByText('Hola')).toBeDefined();
    expect(screen.getByText('This is a modal')).toBeDefined();
  });
});
