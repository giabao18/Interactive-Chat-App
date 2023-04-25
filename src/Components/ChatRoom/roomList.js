import { Collapse, Typography } from 'antd'
import React from 'react'

export default function roomList() {
  return (
    <Collapse defaultActiveKey={['1']}>
        <Panel header="List of Room" key='1'>
            <Typography.Link>Room 1</Typography.Link>
            <Typography.Link>Room 2</Typography.Link>
            <Typography.Link>Room 3</Typography.Link>
        </Panel>
    </Collapse>
  )
}
