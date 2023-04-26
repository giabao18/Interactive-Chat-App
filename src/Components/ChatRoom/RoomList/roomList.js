import { Collapse, Typography } from 'antd'
import React from 'react'
import styles from './roomList.module.scss'
import classNames from 'classnames/bind'
import styled from 'styled-component'

const cx = classNames.bind(styles)
const { Panel } = Collapse

const panelStyled = styled(Panel)`
  &&& {
    .ant-collapse-headr, p {
      color: white;
    }

    .ant-collapse-content-box {
      padding: 0 40px; 
    }
  }
`

export default function RoomList() {
  return (
    <Collapse ghost defaultActiveKey={['1']}>
      <Collapse className={cx('')} header="List of Room" key='1'>
        <Typography.Link>Room 1</Typography.Link>
        <Typography.Link>Room 2</Typography.Link>
        <Typography.Link>Room 3</Typography.Link>
      </Collapse>
    </Collapse>
  )
}
