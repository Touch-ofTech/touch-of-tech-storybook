import React from 'react';
import './textInput.css';

interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  error?: boolean;
  theme?: string;
  valid?: boolean;
}

export const TextInput = ({ ...props }: TextInputProps) => {
  const { theme, error, label, id, valid } = props;

  return (
    <div className="input-container">
      {label && (
        /* eslint-disable-next-line */
        <label htmlFor={id} className="input-label">
          Label Test
        </label>
      )}
      <input
        id={id}
        className={`input-field ${theme} ${
          error && !valid ? 'input-error' : 'valid'
        }`}
        {...props}
      />
    </div>
  );
};
