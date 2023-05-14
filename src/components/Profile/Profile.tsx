import p from './Profile.module.scss'
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {useEffect} from "react";
import {getUser} from "@/store/reducers/user";
import {Avatar, Breadcrumb, BreadcrumbItem, BreadcrumbLink} from "@chakra-ui/react";
import Link from "next/link";

const Profile = () => {
    const dispatch = useAppDispatch()

    const id = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;

    useEffect(() => {
        dispatch(getUser(id.id))
    },[])

    const {user} = useAppSelector(state => state.user)

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

            <div className={p.profile__links}>
                <Breadcrumb fontWeight='medium' fontSize='xl'>
                    <BreadcrumbItem>
                        <Link href='/' className={p.profile__links_link}>Home</Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <p>Profile</p>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </section>
    )
}

export default Profile