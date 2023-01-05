import React from 'react';
import { Icon } from '../iconLibrary/IconLibrary';
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
   * What background color to use
   */
  borderColor?: string;
  /**
   * What custom color, if any, should the font be
   */
  fontColor?: string;
  /**
   * What custom font should be used
   */
  fontFamily?: string;
  /**
   * How ligth of weigthed the font should be
   */
  fontWeigth?: string;
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
   *  icon is a boolean valor
   */
  icon?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  disable = false,
  icon,
  size = 'medium',
  backgroundColor,
  borderColor,
  fontColor,
  fontFamily,
  fontWeigth,
  label,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : 'storybook-button--secondary';

  const buttonStyle = {
    backgroundColor,
    border: `1px solid ${borderColor}`,
    color: fontColor,
    fontFamily,
    fontWeigth,
  };

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
      style={buttonStyle}
      {...props}
    >
      {label}

      {icon && <Icon iconName={icon} />}
    </button>
  );
};
