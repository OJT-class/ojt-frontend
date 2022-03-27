import React, {useState, useContext} from 'react'

import {AuthContext} from '../../context/auth/Auth-context'

import { Form, Input, Button, Checkbox, Space } from 'antd';
import {
  LoginOutlined,
  UserOutlined, 
  LockOutlined
}   from '@ant-design/icons';

import * as S from './styles';

type LayoutType = Parameters<typeof Form>[0]['layout'];

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>('horizontal');

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo, errorInfo.errorFields);
  };

  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  return (
    <S.Container>
      <S.Title>Login Required</S.Title>
      <Form
      // {...formItemLayout}
      // layout={formLayout}
      layout="vertical"
      form={form}
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
        {!isLoginMode && <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
        >
         <Input placeholder="input placeholder" />
        </Form.Item>}
        <Form.Item label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}>
           <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
        </Form.Item>
         <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
        <S.Row>
          <Form.Item
        >
          <Button type="primary" htmlType="submit"><LoginOutlined />{isLoginMode ? 'LOGIN' : 'SIGNUP'}</Button>
        </Form.Item>
        <Form.Item
        >
          <Button type="default"  onClick={switchModeHandler} style={{marginLeft: '0.5rem'}}>SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}</Button>
        </Form.Item>
        </S.Row>
      </Form>
      
    </S.Container>
  )
}

export default Auth