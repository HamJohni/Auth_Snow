import s from "@/components/AdminUsers/Admin.module.scss";
import {Avatar, Breadcrumb, BreadcrumbItem} from "@chakra-ui/react";
import p from "@/components/Profile/Profile.module.scss";
import Link from "next/link";
import {useAppSelector} from "@/hooks/redux";
import {useState} from "react";

const Index = () => {

    const [fine,setFine] = useState([])

    let fineJoin = fine.join(',')

    const {come} = useAppSelector(state => state.come)

    // const sub = () => {
    //     come.map(item => {
    //         axios.patch(`http://localhost:4080/come/${item.id}`, {sum : 1})
    //             .then(() => {
    //                 console.log("Успех")
    //             }).catch(() => {
    //             console.log("ошибка")
    //         })
    //     })
    // }


    const filterFine = (id: string) => {

        setFine([...fine,id])

        fine.filter((item) => {
            console.log(item)
        })
    }

    return (
        <section className={s.panel}>
            <ul className={s.list}>
                {
                    come?.map(item => (
                        <li onClick={() => filterFine(item.id) }
                            style={fineJoin.includes(item.id) ? {border: "1px solid red", transform: "scale(1.03)"} : null}
                            key={item.id} className={s.list__item}>
                            <div className={s.list__item_left}>
                                <Avatar size="lg" name={item?.name} src={item?.photo}/>

                                <div className={s.list__item_left_box}>
                                    <p className={s.list__item_left_name}>{item?.name}</p>

                                    <p className={s.list__item_left_post}>{item?.post}</p>
                                </div>
                            </div>

                            <div className={s.list__item_right}>
                                <p className={s.list__item_left_name}>{item?.time}</p>

                                <p className={s.list__item_left_post}>{item?.data}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <div className={p.profile__links}>
                <Breadcrumb fontWeight='medium' fontSize='xl'>
                    <BreadcrumbItem>
                        <Link href='/' className={p.profile__links_link}>Домой</Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <p>Приходы</p>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            {
                fine.length !== 0 ?
                    <div className={p.profile__footer}>
                        <button className={p.profile__footer_btn} onClick={() => setFine([])}>Отменить</button>
                        <button className={p.profile__footer_btn} onClick={() => setFine([])}>Штраф</button>
                    </div> : ''
            }

        </section>
    );
};

export default Index;