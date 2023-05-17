import React, { createContext, useContext, useMemo } from 'react'
import { useNavigate,} from 'react-router';
import { auth, onAuthStateChanged } from "~/Firebase/config.js"
import { Spin } from 'antd'
import { useEffect, useState } from 'react';
import { AuthContext } from './AuthProvider';
import useFireStore from '~/hook/useFirestore';

export const AppContext = createContext();

export default function AppProvider({ children }) {

    const { user: { uid } } = useContext(AuthContext)

    const roomsCondition = useMemo(() => {
        return {
            fieldName: 'members',
            operator: 'array-condition',
            compareValue: uid,
        }
    }
        , [uid])

    const rooms = useFireStore('rooms',roomsCondition)  

    return (
        <AppContext.Provider value={{ rooms }}>
            {children}
        </AppContext.Provider>
    )
}
