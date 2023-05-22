import React, { createContext, useContext, useMemo } from 'react'
import { useNavigate, } from 'react-router';
import { auth, onAuthStateChanged } from "~/Firebase/config.js"
import { Spin } from 'antd'
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import useFireStore from '~/hook/useFirestore';

export const AppContext = createContext();

export default function AppProvider({ children }) {
    const [selectedRoomID, setSelectedRoomID] = useState('');
    const [isAddRoomVisible, setIsAddRoomVisible] = useState(false);

    const { user: { uid } } = useContext(AuthContext)

    //  Condition of getAll rooms of this user
    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-contains',
            compareValue: uid,
        }
    }, [uid])

    const rooms = useFireStore('rooms', roomsCondition)


    // user select room
    const selectedRoom = useMemo(() =>
        rooms.find((room) => room.id === selectedRoomID) || {}
        , [rooms, selectedRoomID])

    // Condition of getAll members in this room
    const userCondition = useMemo(() => {
        return {
            fieldName: 'uid',
            operator: 'in',
            compareValues: selectedRoom.members,
        }
    }, [selectedRoom.members, selectedRoom])


    const members = useFireStore('users', userCondition)
    console.log(members)

    return (
        <AppContext.Provider value={{ members, selectedRoom, rooms, isAddRoomVisible, setIsAddRoomVisible, selectedRoomID, setSelectedRoomID }}>
            {children}
        </AppContext.Provider>
    )
}
