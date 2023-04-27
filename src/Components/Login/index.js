
import React from 'react'
import { Row, Col, Button, Typography } from 'antd'
import styles from './Login.module.scss'
import classNames from 'classnames'
import  {auth, db, FacebookAuthProvider, signInWithPopup} from "~/Firebase/config.js"

const cx = classNames.bind(styles)
const {Title} = Typography
var fbProvider = new FacebookAuthProvider(auth);

export default function Login() {
    const handleFbLogin = async () => {
        const { additionalUserInfo, user} = await signInWithPopup(auth, fbProvider)

        if(additionalUserInfo?.isNewUser) {
            db.collection('users').add({
                displayName: user.displayName,
                photoURL: user.photoURL,
                uid: user.displayName,
                providerID: additionalUserInfo.providerID
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

