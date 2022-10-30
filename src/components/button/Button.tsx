import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Custom Classname
   */
  className?: string;
  /**
   * boolean valor
   */
  disable?: boolean;
  /**
   *  the data-testid  is neccesary to do the test
   */
  dataTestId?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  disable = false,
  size = 'medium',
  backgroundColor,
  label,
  className,
  dataTestId,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  // const state = disable ? disabled : "null";
  return (
    <button
      type="button"
      className={[
        'storybook-button',
        `storybook-button--${size} ${className}`,
        mode,
      ].join(' ')}
      data-testid="storybook-button-test_id"
      disabled={disable}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
