import React, { createContext } from 'react'
import { useNavigate } from 'react-router';
import { auth, onAuthStateChanged } from "~/Firebase/config.js"
import { Spin } from 'antd'
import { useEffect, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const history = useNavigate();
    const [user, setUser] = useState({});
    const [isloading, setIsloading] = useState(true)

    useEffect(() => {
        const unSubscibed = onAuthStateChanged(auth, (user) => {

            if (user) {
                console.log('check-1')
                const { displayName, Uid, email, photoURL } = user;
                setUser({
                    displayName, Uid, email, photoURL,
                })

                setIsloading(false)
                
                history('/ChatRoom')
                console.log('check-2')
            } else {
                history('/Logout')
            }

        })
        return () => {
            unSubscibed();
        }
    }, [history])

    return (
        <AuthContext.Provider value={{ user }}>
            {isloading ? <Spin/> : children}
        </AuthContext.Provider>
    )
}
