import React, {useContext} from 'react'
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../../../context/auth/Auth-context";
import "antd/dist/antd.css";
import { Avatar, Image, Dropdown, Menu } from 'antd';
import { UserOutlined, SolutionOutlined, LockOutlined, PoweroffOutlined } from '@ant-design/icons';

import * as S from './styles';

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const auth = useContext(AuthContext);

  const handelLogOut = () => {
    auth.logout()
    navigate('/auth')
  }

const widgetMenu = (
  <Menu>
    <Menu.Item>
      <SolutionOutlined style={{textAlign: 'center', paddingRight: '0.5rem'}} />
      <Link to="user-info/:id">profile</Link>
    </Menu.Item>
    <Menu.Item>
      <SolutionOutlined style={{textAlign: 'center', paddingRight: '0.5rem'}} />
      <Link to="/">Todos</Link>
    </Menu.Item>
    <Menu.Item onClick={handelLogOut}>
      <PoweroffOutlined style={{textAlign: 'center', paddingRight: '0.5rem'}} />
      sign out
    </Menu.Item>
  </Menu>
);

  return (
     <S.Nav>
      <S.NavBarTitle>ToDos Board Customized Title</S.NavBarTitle>
      <Dropdown overlay={widgetMenu} placement="bottomRight" arrow={{ pointAtCenter: true }}>
        <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} />
        {/* <Avatar size={42} icon={<UserOutlined />} style={{ color: '#87d068' }}/> */}
        </Dropdown>
     </S.Nav>
  )
}

export default Navbar