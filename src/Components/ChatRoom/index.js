import React from 'react'
import { Row, Col } from 'antd'
import SideBar from './SideBar/sideBar'
import ChatWindow from './ChatWindow/chatWindow'

export default function ChatRoom() {
    return (
        <div>
            this is ChatRoom
            <Row>
                <Col span={6} ><SideBar /></Col>
                <Col span={18} ><ChatWindow /></Col>
            </Row>
        </div>
    )
}
