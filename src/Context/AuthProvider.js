import React, { createContext } from 'react'
import { useNavigate } from 'react-router';
import { auth, onAuthStateChanged } from "~/Firebase/config.js"
import { Spin } from 'antd'
import { useEffect, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const history = useNavigate();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unSubscibed = onAuthStateChanged(auth, (user) => {

            if (user) {
                const { displayName, Uid, email, photoURL } = user;
                setUser({
                    displayName, Uid, email, photoURL,
                })

                setIsLoading(false)

                history('/')
            }
            else {
                setIsLoading(false)
                history('/Login')
            }
        })
        return () => {
            unSubscibed();
        }
    }, [history])

    return (
        <AuthContext.Provider value={{ user }}>
            {isLoading ? <Spin /> : children}
        </AuthContext.Provider>
    )
}
