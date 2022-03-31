import {useState, useContext} from 'react';
import { useNavigate, useLocation, Link } from "react-router-dom";

import {AuthContext} from '../../context/auth/Auth-context'

import { Form, Input, Button, Checkbox } from 'antd';
import {
  LoginOutlined,
  UserOutlined, 
  LockOutlined
}   from '@ant-design/icons';

import * as S from './styles';

// interface User {
//   uid: string, 
//   token: string | null, 
//   userName: string
// }

const Auth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const from = location.state?.from?.pathname || '/';

  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    console.log('Success:', values);
    // authSubmitHandler(event: React.FormEvent, data) ??
    const config = {
      method: 'POST',
      headers: {
                  'Content-Type': 'application/json'
               },
        body: JSON.stringify(values)
    }
    
    const url: string | undefined = (process.env.REACT_APP_BACKEND_URL as string)

    if (isLoginMode) {
      // POST | login
      try {
        const responseData = await fetch(`${url}/auth/login`, config);
        if (!responseData.ok) {
          const message = `An error has occured: ${responseData.status}`;
          throw new Error(message);
        }
        const data = await responseData.json();
        auth.login(data.user._id, data.token, data.username);
        
        navigate('/', {replace: true})
      } catch (error) {
      console.log("🚀 ~ file: Auth.tsx ~ line 47 ~ onFinish ~ error", error)
      }
    } else {
      // POST | register
      try {
        const responseData = await fetch(`${url}/auth/register`, config);
        const data = await responseData.json();
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

 
  return (
    <S.Container>
      <S.Title>{isLoginMode ? 'Login' : 'Registration'} Required 
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