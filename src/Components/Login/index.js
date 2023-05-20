
import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import styles from './Login.module.scss'
import classNames from 'classnames'
import { serverTimestamp, query, auth, db, FacebookAuthProvider, signInWithPopup, getAdditionalUserInfo, collection, doc, getDoc, addDoc } from "~/Firebase/config.js"
import { addDocument } from '~/Firebase/service'

const cx = classNames.bind(styles)
const { Title } = Typography
var fbProvider = new FacebookAuthProvider(auth);

export default function Login() {
    const handleFbLogin = async () => {


        const userCheck = await signInWithPopup(auth, fbProvider)

        if (getAdditionalUserInfo(userCheck).isNewUser) {
            const { user, providerId } = userCheck

            // addDoc(collection(db, 'users'), {
            //     displayName: user.displayName,
            //     photoURL: user.photoURL,
            //     uid: user.uid,
            //     providerId: providerId,
            //     createdAt: serverTimestamp(),
            // })

            addDocument('users', {
                displayName: user.displayName,
                photoURL: user.photoURL,
                uid: user.uid,
                providerId: providerId
            })
        }

    }
    return (
        <div>
            <Row className={cx('justify-center')}>
                <Col span={8}>
                    <Title className={cx('text-center')} level={3}>
                        Interactive Chart By GiaBao
                    </Title>

                    <Button className={cx('w-full mb-2')} >
                        Login by Google
                    </Button >

                    <Button className={cx('w-full mb-2')} onClick={handleFbLogin}>
                        Login by Facebook
                    </Button>
                </Col>
            </Row>
        </div>
    )
}


