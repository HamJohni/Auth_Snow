import s from "./Admin.module.scss";
import {useAppSelector} from "@/hooks/redux";
import {Avatar, Breadcrumb, BreadcrumbItem} from "@chakra-ui/react";
import p from "@/components/Profile/Profile.module.scss";
import Link from "next/link";
import {useRouter} from "next/router";

const AdminUsers = () => {
    const router = useRouter()

    const {developers} = useAppSelector(state => state.developers)

    return (
      <section className={s.panel}>
          <ul className={s.list}>
              {
                  developers?.map(item => (
                      <li className={s.list__item} onClick={() =>router.push(`/profile/${item.id}`) }>
                          <div className={s.list__item_left}>
                              <Avatar size="lg" name={item?.name}/>

                              <div className={s.list__item_left_box}>
                                  <p className={s.list__item_left_name}>{item?.name}</p>

                                  <p className={s.list__item_left_post}>{item?.post}</p>
                              </div>
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
                      <p>Разработчики</p>
                  </BreadcrumbItem>
              </Breadcrumb>
          </div>

      </section>
    );
};

export default AdminUsers;
