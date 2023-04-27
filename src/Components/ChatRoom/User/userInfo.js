import { Button, Typography, Avatar } from 'antd'
import React from 'react'
import styles from './userInfo.module.scss'
import classNames from 'classnames/bind'
import { auth } from '~/Firebase/config'

const cx = classNames.bind(styles)


export default function UserInfo() {
  return (
    <div 
    className={cx('user_Info')}
    >
      <div>
        <Avatar>Bao</Avatar>
        <Typography.Text className={cx('user_Name')}></Typography.Text>
      </div>
      <Button onClick={() => auth.signOut} ghost>Log Out</Button>
    </div>
  )
}
