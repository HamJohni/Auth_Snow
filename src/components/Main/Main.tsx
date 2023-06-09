import main from './Main.module.scss'
import {Avatar, useToast} from "@chakra-ui/react";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {logout} from "@/store/reducers/user";
import {useRouter} from "next/router";

const Main = () => {

    const toast = useToast()

    const router = useRouter()

    const dispatch = useAppDispatch()

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

                {
                    user?.name === "Ilgiz" || user?.name === "Artur" ?
                        <div className={main.qr__content_bottom}>
                            <button onClick={() => router.push('/developers')} className={main.qr__content_bottom_btn}>Разработчики</button>
                            <button onClick={() => router.push('/come')} className={main.qr__content_bottom_btn}>Приходы</button>
                        </div> :
                        <div className={main.qr__content_bottom}>
                            <button onClick={() => router.push(`/profile/${user?.id}`) } className={main.qr__content_bottom_btn}>Профиль</button>
                            <button onClick={() => router.push('/qr') } className={main.qr__content_bottom_btn}>Сканировать</button>
                        </div>
                }
            </div>

            <button className={main.qr__btn} onClick={exit}>
                Log out
            </button>
        </section>
    )
};

export default Main;
