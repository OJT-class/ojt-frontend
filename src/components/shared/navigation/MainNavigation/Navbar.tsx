import React from 'react'

import "antd/dist/antd.css";
import { Avatar, Image, Dropdown, Menu } from 'antd';
import { UserOutlined, SolutionOutlined, LockOutlined, PoweroffOutlined } from '@ant-design/icons';

import * as S from './styles';

const Navbar: React.FC = () => {

const widgetMenu = (
  <Menu>
    <Menu.Item>
      <SolutionOutlined style={{textAlign: 'center', paddingRight: '0.5rem'}} />
      profile
    </Menu.Item>
    <Menu.Item>
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