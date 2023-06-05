import p from './Profile.module.scss'
import {useAppSelector} from "@/hooks/redux";
import {Avatar, Breadcrumb, BreadcrumbItem} from "@chakra-ui/react";
import Link from "next/link";

const Profile = () => {

    const {user} = useAppSelector(state => state.user)

    const {profile} = useAppSelector(state => state.profile)

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
                            profile?.map(item => (
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