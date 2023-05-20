import React, { createContext, useContext, useMemo } from 'react'
import { useNavigate, } from 'react-router';
import { auth, onAuthStateChanged } from "~/Firebase/config.js"
import { Spin } from 'antd'
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import useFireStore from '~/hook/useFirestore';

export const AppContext = createContext();

export default function AppProvider({ children }) {

    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);
    const [selectedRoomID, setSelectedRoomID] = useState('');

    const { user: { uid } } = useContext(AuthContext)

    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-condition',
            compareValue: uid,
        }
    }, [uid])



    const rooms = useFireStore('rooms', roomsCondition)

    // fix bug init selectedRoom which lead to the error
    const selectedRoom = useMemo(() =>
        rooms.find((room) => room.id === selectedRoomID)
        , [rooms, selectedRoomID])

    const userCondition = useMemo(() => {
        return {
            fieldName: 'uid',
            operator: 'in',
            compareValues: selectedRoom.members,
        }
    },[selectedRoom.members])

    const members = useFireStore('members', userCondition)

    return (
        <AppContext.Provider value={{ members, selectedRoom, rooms, isAddRoomVisible, setIsAddRoomVisible, selectedRoomID, setSelectedRoomID }}>
            {children}
        </AppContext.Provider>
    )
}
