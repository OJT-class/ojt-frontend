import React, {useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";

import {AuthContext} from '../../context/auth/Auth-context'

import { Form, Input, Button, Checkbox } from 'antd';
import {
  LoginOutlined,
  UserOutlined, 
  LockOutlined
}   from '@ant-design/icons';

import * as S from './styles';

interface User {
  uid: string, 
  token: string | null, 
  userName: string
}

const Auth = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    // authSubmitHandler()
    const config = {
      method: 'POST',
      headers: {
                  'Content-Type': 'application/json'
               },
        body: JSON.stringify(values)
    }

    if (isLoginMode) {
      // POST | login
      // const url = process.env.REACT_APP_BACKEND_URL
      try {
        // const responseData = await fetch('http://localhost:8080/auth/login', config);
        const responseData = await fetch('http://localhost:8080/auth/login', config);
        if (!responseData.ok) {
          const message = `An error has occured: ${responseData.status}`;
          throw new Error(message);
        }
        const data = await responseData.json();
        console.log("🚀 ~ file: Auth.tsx ~ line 54 ~ authSubmitHandler ~ data", data)
        // login:
        auth.login(data.user._id, data.token, data.username);
        
        navigate('/')
      } catch (error) {
      console.log("🚀 ~ file: Auth.tsx ~ line 47 ~ onFinish ~ error", error)
      }
    } else {
      // POST | register
      try {
        const responseData = await fetch('http://localhost:8080/auth/register', config);
        const data = await responseData.json();
        //register:
        auth.login(data.user._id, data.token, data.username);
        navigate('/');
      } catch (error) {
      console.log("🚀 ~ file: Auth.tsx ~ line 56 ~ onFinish ~ error", error)
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo, errorInfo.errorFields);
  };

  const switchModeHandler = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  //Change any to User!! 
  const authSubmitHandler = async (event: React.FormEvent, data: any) => {
    event.preventDefault();

    const config = {
      method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }

    if (isLoginMode) {
      // POST | login
      // const url = process.env.REACT_APP_BACKEND_URL
      try {
        const responseData = await fetch('http://localhost:8080/auth/login', config);
        console.log("🚀 ~ file: Auth.tsx ~ line 51 ~ authSubmitHandler ~ responseData", responseData)
        const data = await responseData.json();
        console.log("🚀 ~ file: Auth.tsx ~ line 54 ~ authSubmitHandler ~ data", data)
        // return data;
        // login()
        // history.push('/');
      } catch (error) {
        
      }
    } else {
      // POST | register
      try {
        const responseData = await fetch('http://localhost:8080/auth/register', config);
        console.log("🚀 ~ file: Auth.tsx ~ line 65 ~ authSubmitHandler ~ responseData", responseData)
      } catch (error) {
        
      }
    }

  }

  return (
    <S.Container>
      <S.Title>Login Required
        <div className='line'></div>
      </S.Title>
      <Form
      layout="vertical"
      form={form}
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