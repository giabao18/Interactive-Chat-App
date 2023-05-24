import { Avatar, Typography } from 'antd'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './message.module.scss'

const cx = classNames.bind(styles)


export default function Message({photoURL, displayName, createdAt, text }) {
    return (
        <div className={cx('message')}>
            <div >
                <Avatar src={photoURL}>A</Avatar>
                <Typography.Text className={cx('message_author')}>{displayName}</Typography.Text>
                <Typography.Text className={cx('message_date')}>{createdAt}</Typography.Text>
            </div>
            <div>
                <Typography.Text className={cx('message_content')}>{text} </Typography.Text>
            </div>
        </div>
    )
}
