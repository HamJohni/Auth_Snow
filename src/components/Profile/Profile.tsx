import p from './profile.module.scss'
import {Avatar} from "@chakra-ui/react";

const Profile = () => {
    return(
        <section className={p.profile}>
            <div className={p.profile__content}>
                <div className={p.profile__left}>
                    <Avatar size="2xl" name={"asd"}/>
                    <p className={p.profile__left_name}>Zhanybek Adilov</p>
                    <p className={p.profile__left_post}>Frontend developer</p>
                </div>

                <div className={p.profile__right}>
                    <ul className={p.profile__right_list}>
                        <li className={p.profile__right_item}>
                            <p className={p.profile__right_data}>20 сентября /
                                <span className={p.profile__right_data}> опоздание</span>
                            </p>
                            <p className={p.profile__right_sum}>-100 сом</p>
                        </li>

                        <li className={p.profile__right_item}>
                            <p className={p.profile__right_data}>20 сентября /
                                <span className={p.profile__right_data}> опоздание</span>
                            </p>
                            <p className={p.profile__right_sum}>-100 сом</p>
                        </li>

                        <li className={p.profile__right_item}>
                            <p className={p.profile__right_data}>20 сентября /
                                <span className={p.profile__right_data}> опоздание</span>
                            </p>
                            <p className={p.profile__right_sum}>-100 сом</p>
                        </li>

                        <li className={p.profile__right_item}>
                            <p className={p.profile__right_data}>20 сентября /
                                <span className={p.profile__right_data}> опоздание</span>
                            </p>
                            <p className={p.profile__right_sum}>-100 сом</p>
                        </li>

                        <li className={p.profile__right_item}>
                            <p className={p.profile__right_data}>20 сентября /
                                <span className={p.profile__right_data}> опоздание</span>
                            </p>
                            <p className={p.profile__right_sum}>-100 сом</p>
                        </li>

                        <li className={p.profile__right_item}>
                            <p className={p.profile__right_data}>20 сентября /
                                <span className={p.profile__right_data}> опоздание</span>
                            </p>
                            <p className={p.profile__right_sum}>-100 сом</p>
                        </li>

                        <li className={p.profile__right_item}>
                            <p className={p.profile__right_data}>20 сентября /
                                <span className={p.profile__right_data}> опоздание</span>
                            </p>
                            <p className={p.profile__right_sum}>-100 сом</p>
                        </li>

                        <li className={p.profile__right_item}>
                            <p className={p.profile__right_data}>20 сентября /
                                <span className={p.profile__right_data}> опоздание</span>
                            </p>
                            <p className={p.profile__right_sum}>-100 сом</p>
                        </li>

                        <li className={p.profile__right_item}>
                            <p className={p.profile__right_data}>20 сентября /
                                <span className={p.profile__right_data}> опоздание</span>
                            </p>
                            <p className={p.profile__right_sum}>-100 сом</p>
                        </li>

                        <li className={p.profile__right_item}>
                            <p className={p.profile__right_data}>20 сентября /
                                <span className={p.profile__right_data}> опоздание</span>
                            </p>
                            <p className={p.profile__right_sum}>-100 сом</p>
                        </li>

                        <li className={p.profile__right_item}>
                            <p className={p.profile__right_data}>20 сентября /
                                <span className={p.profile__right_data}> опоздание</span>
                            </p>
                            <p className={p.profile__right_sum}>-100 сом</p>
                        </li>

                        <li className={p.profile__right_item}>
                            <p className={p.profile__right_data}>20 сентября /
                                <span className={p.profile__right_data}> опоздание</span>
                            </p>
                            <p className={p.profile__right_sum}>-100 сом</p>
                        </li>




                        <li className={p.profile__right_item}>
                            <p className={p.profile__right_data}>20 сентября /
                                <span className={p.profile__right_data}> дедлайн</span>
                            </p>

                            <p className={p.profile__right_sum}>-100 сом</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Profile