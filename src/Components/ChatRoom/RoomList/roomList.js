import { Button, Collapse, Typography } from 'antd'
import React, { useContext, useMemo } from 'react'
import styles from './roomList.module.scss'
import classNames from 'classnames/bind'
import styled from 'styled-components'
import { PlusSquareOutlined } from '@ant-design/icons'
import useFirestore from '~/hook/useFirestore'
import { AppContext } from '~/Context/AppProvider'

const cx = classNames.bind(styles)
const { Panel } = Collapse

const PanelStyled = styled(Panel)`
  &&& {
    .ant-collapse-header, p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px; 
    }

    .add-room {
      color: white;
      padding: 0 ;
      
    }
  }
`;

const LinkStyled = styled(Typography.Link)`
  display: block;
  margin-bottom:5px;
  color: white;
`;

export default function RoomList() {

  const {rooms} = useContext(AppContext)
  console.log(rooms)
  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled  header="List of Room" key='1'>
        {rooms.map(room => {
          <LinkStyled key={room.uid}>{room}</LinkStyled>
        })}
        <Button type='text' icon={<PlusSquareOutlined/>} className={cx('add-room')}>Add Room</Button>
      </PanelStyled>
    </Collapse>
  )
}
