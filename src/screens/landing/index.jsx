import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import { CustomButton, CustomInput } from '../../components/shared';
import { User } from '../../service';

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const initialValue = [
    {
      name: '',
      email: '',
    },
  ];

  const onSubmit = (e) => {
    const payload = {
      name: e.name,
      email: e.email,
    };
    dispatch(User.sendUser({ payload: payload }))
      .unwrap()
      .then(() => {
        localStorage.setItem('user', { token: 'token' });
        navigate('/profile');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Welcome</h1>
      <Form
        id="myForm"
        layout="vertical"
        requiredMark={false}
        initialValues={initialValue}
        onFinish={onSubmit}
        form={form}>
        <Form.Item
          name="name"
          label="Your Name"
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}>
          <CustomInput placeholder="Enter Your Name" type="text" />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: 'This field is required',
            },
          ]}>
          <CustomInput placeholder="Enter Your Email" type="mail" />
        </Form.Item>
        <CustomButton type="primary" htmlType="submit">
          Simpan
        </CustomButton>
      </Form>
    </div>
  );
};

export default Landing;
