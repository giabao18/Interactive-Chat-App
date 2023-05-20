import React, { useContext } from 'react'
import { Modal, Form, Input } from 'antd'
import { AppContext } from '~/Context/AppProvider'
import { addDocument } from '~/Firebase/service'
import { AuthContext } from '~/Context/AuthProvider'
import { db, addDoc, collection } from '~/Firebase/config'

export default function AddRoomModal() {
    const { isAddRoomVisible, setIsAddRoomVisible } = useContext(AppContext)
    const { user: { uid } } = useContext(AuthContext)
    const [form] = Form.useForm()

    // Add room Ok
    const handleOk = () => {
        addDocument('rooms', { ...form.getFieldValue(), members: ['currentUid'] })
        form.resetFields()
        setIsAddRoomVisible(false)
    }

    //Add room cancel
    const handleCancel = () => {
        form.resetFields()
        setIsAddRoomVisible(false)
    }

    return (
        <div>
            <Modal
                title={"Create Room"}
                open={isAddRoomVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout='vertical'>
                    <Form.Item label="Room Name" name="name">
                        <Input placeholder="Enter Room Name" />
                    </Form.Item>

                    <Form.Item label="Description" name="description">
                        <Input placeholder="Enter Description" />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
