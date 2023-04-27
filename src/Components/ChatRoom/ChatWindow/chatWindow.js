import { row, column, Button, Avatar, Tooltip, Form, Input } from 'antd'
import React from 'react'
import styles from './chatWindow.module.scss'
import { UserAddOutlined } from '@ant-design/icons'
import classNames from 'classnames/bind'
import Message from './Message/message'

const cx = classNames.bind(styles)


export default function ChatWindow() {
  return (
    <div className={cx('chatWindow_wrapper')}>

      <div className={cx('chatWindow_header')}>

        <div className={cx('chatWindow_header__info')}>
          <p className={cx('chatWindow_header__title')}>Room 1</p>
          <span className={cx('chatWindow_header__description')}>It is Room 1</span>
        </div>

        <div className={cx('chatWindow_header__group')}>
          <Button icon={<UserAddOutlined />} type='text'>Invite</Button>
          <Avatar.Group size="small" maxCount={2}>
            <Tooltip title="A">
              <Avatar>A</Avatar>
            </Tooltip>

            <Tooltip title="B">
              <Avatar>A</Avatar>
            </Tooltip>

            <Tooltip title="C">
              <Avatar>A</Avatar>
            </Tooltip>

            <Tooltip title="D">
              <Avatar>A</Avatar>
            </Tooltip>
          </Avatar.Group>
        </div>

      </div>


      <div className={cx('chatWindow_content')}>

        <div className={cx('chatWindow_content__messageList')}>
          <Message text='test' photoURL={null} displayName="Gia Bao" createdAt={123} />
          <Message text='test' photoURL={null} displayName="Gia Bao" createdAt={123} />
          <Message text='test' photoURL={null} displayName="Gia Bao" createdAt={123} />
          <Message text='test' photoURL={null} displayName="Gia Bao" createdAt={123} />
        </div>

        <Form className='chatWindow_content__form'>
          <Form.Item className='chatWindow_content__form__item'>
            <Input placeholder='Input text' bordered={false} autoComplete='off' />
            <Button type='primary'>add</Button>
          </Form.Item>
        </Form>

      </div>

    </div>
  )
}
