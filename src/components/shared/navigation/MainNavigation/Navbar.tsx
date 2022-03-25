import React from 'react'

import { Avatar, Image } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import * as S from './styles';

const Navbar: React.FC = () => {
  return (
     <S.Nav>
    {/* <div> */}
        <S.NavBarTitle>ToDos Board Customized Title</S.NavBarTitle>
        <Avatar icon={<UserOutlined />} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}/>
        {/* <Avatar src={<Image src="https://joeschmoe.io/api/v1/random" style={{ width: 32 }} />} /> */}
        {/* </div> */}
     </S.Nav>
  )
}

export default Navbar