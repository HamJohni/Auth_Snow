import React, {ReactNode, useEffect} from 'react';
import {useAppDispatch} from "@/hooks/redux";
import {getUser} from "@/store/reducers/user";
import {getProfile} from "@/store/reducers/profile";
import {getDevelopers} from "@/store/reducers/developers";
import {getCome} from "@/store/reducers/come";

const Layouts = ({children}: ReactNode) => {

    const dispatch = useAppDispatch()

    const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;

    useEffect(() => {
        dispatch(getUser(user?.id))
        dispatch(getDevelopers())
        dispatch(getCome())
    },[])

    useEffect(() => {
        dispatch(getUser(user?.id))
    },[user])

    return (
        <>
            {children}
        </>
    );
};

export default Layouts;