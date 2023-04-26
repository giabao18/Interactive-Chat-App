import { Button, Typography, Avatar } from 'antd'
import React from 'react'
import styles from './userInfo.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)


export default function UserInfo() {
  return (
    <div className={cx('userInfo')}>
      <div>
        <Avatar>Bao</Avatar>
        <Typography.Text className={cx('userName')}></Typography.Text>
      </div>
      <Button ghost>Log Out</Button>
    </div>
  )
}
