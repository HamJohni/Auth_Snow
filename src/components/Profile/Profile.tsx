import p from './Profile.module.scss'
import {Avatar} from "@chakra-ui/react";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {useEffect} from "react";
import {getUser} from "@/store/reducers/user";

const Profile = () => {
    const dispatch = useAppDispatch()

    const id = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;

    useEffect(() => {
        dispatch(getUser(id.id))
    },[])

    const {user} = useAppSelector(state => state.user)

    const now = new Date();

    const dateOptions: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric"
    }

    const date = new Intl.DateTimeFormat('ru',dateOptions)

    const time = new Intl.DateTimeFormat('ru',timeOptions)


    return(
        <section className={p.profile}>
            <div className={p.profile__content}>

                <div className={p.profile__left}>
                    <Avatar size="2xl" name={"asd"}/>
                    <p className={p.profile__left_name}>{user?.name}</p>
                    <p className={p.profile__left_post}>{user?.post}</p>
                </div>

                <div className={p.profile__right}>
                    <ul className={p.profile__right_list}>
                        {
                            user?.fine?.map(item => (
                                <li key={item?.id} className={p.profile__right_item}>
                                    <div>
                                        <p className={p.profile__right_item_data}>{item?.data}</p>
                                        <p className={p.profile__right_item_cause}>{item?.cause}</p>
                                    </div>
                                    <div>
                                        <p className={p.profile__right_item_data}>{item?.time}</p>
                                        <p className={p.profile__right_item_cause}>{item?.money}</p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Profile