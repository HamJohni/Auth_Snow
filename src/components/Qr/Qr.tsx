import qr from './qr.module.scss'
import {Avatar} from "@chakra-ui/react";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {useEffect} from "react";
import {userSlice} from "@/store/reducers/user";
import {useRouter} from "next/router";

const Qr = () => {

    const router = useRouter()

    const {increment} = userSlice.actions

    const dispatch = useAppDispatch()

    const {user} = useAppSelector(state => state.user)

    useEffect(() => {
        dispatch(increment(JSON.parse(localStorage.getItem('user'))))
    }, [])

    return (
        <section className={qr.qr}>
            <div className={qr.qr__content}>
                <div className={qr.qr__content_top}>
                    <Avatar size="2xl" name={user?.name}/>
                    <p className={qr.qr__content_name}>{user?.name}</p>
                    <p className={qr.qr__content_post}>{user?.post?.toUpperCase()}</p>
                </div>

                <div className={qr.qr__content_bottom}>
                    <button onClick={() => router.push('/profile') } className={qr.qr__content_bottom_btn}>Профиль</button>
                    <button className={qr.qr__content_bottom_btn}>Сканировать</button>
                </div>
            </div>
        </section>
    )
};

export default Qr;
