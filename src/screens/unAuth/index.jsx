import React from 'react';
import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const UnAuth = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<button onClick={() => navigate('/')}>Back to Home</button>}
    />
  );
};

export default UnAuth;
