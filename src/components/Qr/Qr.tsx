import qr from './qr.module.scss'
import {Avatar} from "@chakra-ui/react";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {getUser, userSlice} from "@/store/reducers/user";
import {useRouter} from "next/router";
import {useEffect} from "react";

const Qr = () => {

    const router = useRouter()

    const dispatch = useAppDispatch()

    const id = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;

    useEffect(() => {
        dispatch(getUser(id.id))
    },[])

    const {user} = useAppSelector(state => state.user)

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
