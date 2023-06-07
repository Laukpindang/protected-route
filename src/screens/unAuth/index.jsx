import React from 'react';
import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CustomButton } from '../../components/shared';

const UnAuth = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <CustomButton type="primary" onClick={() => navigate('/')}>
          Back to Home
        </CustomButton>
      }
    />
  );
};

export default UnAuth;
