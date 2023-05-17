import React from 'react'
import { Row, Col } from 'antd'
import RoomList from '../RoomList/roomList'
import UserInfo from '../UserInfo/userInfo'
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


export default function SideBar() {
  return (
      <div className={cx('sideBar')}>
        <Row>
          <Col span={24}><UserInfo /></Col>
          <Col span={24}><RoomList /></Col>
        </Row>
      </div>
  )
}
