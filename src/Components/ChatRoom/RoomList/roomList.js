import { Button, Collapse, Typography } from 'antd'
import React, { useContext, useMemo } from 'react'
import styles from './roomList.module.scss'
import classNames from 'classnames/bind'
import styled from 'styled-components'
import { PlusSquareOutlined } from '@ant-design/icons'
import useFirestore from '~/hook/useFirestore'
import { AppContext } from '~/Context/AppProvider'
import AddRoomModal from '~/Components/Modals/addRoomModal'

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

  const { rooms, setIsAddRoomVisible, setSelectedRoomID } = useContext(AppContext)

  const handleAddRoom = () => {
    setIsAddRoomVisible(true);
  }

  

  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <PanelStyled header="List of Room" key='1'>
        {rooms.map((room) =>
          <LinkStyled key={room.id} onClick={() => setSelectedRoomID(room.id)}> {room.name} </LinkStyled>
        )}
        <Button type='text' icon={<PlusSquareOutlined />} onClick={handleAddRoom} className={cx('add-room')}>Add Room</Button>
      </PanelStyled>
    </Collapse >
  )
}
