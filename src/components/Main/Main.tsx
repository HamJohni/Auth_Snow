import main from './Main.module.scss'
import {Avatar, useToast} from "@chakra-ui/react";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {getUser, logout} from "@/store/reducers/user";
import {useRouter} from "next/router";
import {useEffect} from "react";

const Main = () => {

    const toast = useToast()

    const router = useRouter()

    const dispatch = useAppDispatch()

    const id = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;

    useEffect(() => {
        if(id === null){
            router.push('/login')
        }else{
            dispatch(getUser(id?.id))
        }
    },[])

    const {user} = useAppSelector(state => state.user)

    const exit = () => {
        dispatch(logout(null))
        localStorage.removeItem('user')
        toast({
            title: 'Success',
            description: "You left acc",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top-left',
        })

        router.push('/login')
    }

    return (
        <section className={main.qr}>
            <div className={main.qr__content}>
                <div className={main.qr__content_top}>
                    <Avatar size="2xl" name={user?.name}/>
                    <p className={main.qr__content_name}>{user?.name}</p>
                    <p className={main.qr__content_post}>{user?.post?.toUpperCase()}</p>
                </div>

                <div className={main.qr__content_bottom}>
                    <button onClick={() => router.push('/profile') } className={main.qr__content_bottom_btn}>Профиль</button>
                    <button onClick={() => router.push('/qr') } className={main.qr__content_bottom_btn}>Сканировать</button>
                </div>
            </div>

            <button className={main.qr__btn} onClick={exit}>
                Log out
            </button>
        </section>
    )
};

export default Main;
