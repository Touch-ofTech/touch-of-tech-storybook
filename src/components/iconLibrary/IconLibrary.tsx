import React from 'react';
import './iconLibrary.css';

type IconProps = {
  iconName: string;
  className?: string;
};

export const Icon: React.FunctionComponent<IconProps> = (props: IconProps) => {
  const { iconName = 'IE', className = 'iconComponent' } = props;
  return (
    <div>
      <i className={` ${className} ${iconName} `} />
    </div>
  );
};
