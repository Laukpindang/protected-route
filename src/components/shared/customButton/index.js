import React from 'react';
import { Button } from 'antd';

const CustomButton = ({
  id,
  children,
  disabled = false,
  className = '',
  type = 'primary' | 'secondary' | 'link',
  height = '48px',
  htmlType = 'button',
  style,
  onClick,
}) => {
  const randomId = Math.floor(Math.random() * 1000 + 1);
  return (
    <Button
      id={`button-${id || randomId}`}
      onClick={onClick}
      type={type}
      htmlType={htmlType}
      className={`custom-button custom-button-${disabled ? 'disabled' : type} ${className} `}
      style={{ height: height, ...style }}>
      {children}
    </Button>
  );
};

export default React.memo(CustomButton);
