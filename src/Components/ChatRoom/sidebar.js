import React from 'react'
import { Row, Col } from 'antd'

export default function sidebar() {
  return <Row>
        <Col span={24}><userInfor/></Col>
        <Col span={24}><roomList/></Col>
  </Row>
}
