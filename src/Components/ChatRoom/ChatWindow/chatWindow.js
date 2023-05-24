import { row, column, Button, Avatar, Tooltip, Form, Input, Alert } from 'antd'
import React, { useContext, useMemo } from 'react'
import styles from './chatWindow.module.scss'
import { UserAddOutlined } from '@ant-design/icons'
import classNames from 'classnames/bind'
import Message from './Message/message'
import { AppContext } from '~/Context/AppProvider'

const cx = classNames.bind(styles)


export default function ChatWindow() {
  const { selectedRoom, members } = useContext(AppContext)
  
  console.log(members)
  return (
    <div className={cx('chatWindow_wrapper')}>

      {selectedRoom.id ? (
        <>
          <div className={cx('chatWindow_header')}>

            <div className={cx('chatWindow_header__info')}>
              <p className={cx('chatWindow_header__title')}>{selectedRoom.name}</p>
              <span className={cx('chatWindow_header__description')}>{selectedRoom.description}</span>
            </div>

            <div className={cx('chatWindow_header__group')}>
              <Button icon={<UserAddOutlined />} type='text'>Invite</Button>
              <Avatar.Group size="small" maxCount={2}>
                {members.map(member =>
                  <Tooltip title={member.displayName} key={member.id}>
                    <Avatar src={member.photoURL}>{member.photoURL}{member.photoURL ? '' : member.displayName?.charAt(0)?.toUpperCase()}</Avatar>
                  </Tooltip>
                )}
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
        </>) : (
        <Alert message={"Choose Room"} showIcon type='info' style={{ margin: 5 }} closable />
      )}
    </div>
  )
}
