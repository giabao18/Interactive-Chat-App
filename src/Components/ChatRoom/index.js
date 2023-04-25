import React from 'react'
import { Row,Col } from 'antd'

export default function ChatRoom() {
    return (
        <div>
            this is ChatRoom
            <Row>
                <Col span={6} ><sideBar/></Col>
                <Col span={18} ><chatWindow/></Col>
            </Row>
        </div>
    )
}
