import React, {ReactNode, useEffect} from 'react';
import {useAppDispatch} from "@/hooks/redux";
import {getUser} from "@/store/reducers/user";

const Layouts = ({children}: ReactNode) => {

    const dispatch = useAppDispatch()

    const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;

    useEffect(() => {
        dispatch(getUser(user?.id))
    },[])

    return (
        <>
            {children}
        </>
    );
};

export default Layouts;