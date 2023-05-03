import { Input } from 'antd';
import React from 'react';

const CustomInput = ({ value, placeholder, className, type, prefix, ...props }) => {
  return (
    <Input
      placeholder={placeholder}
      type={type}
      value={value}
      prefix={prefix}
      className={`custom-input rounded ${className} `}
      {...props}
    />
  );
};

export default CustomInput;
