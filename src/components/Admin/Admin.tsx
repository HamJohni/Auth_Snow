import s from "./Admin.module.scss";
import {useAppSelector} from "@/hooks/redux";
import {Avatar} from "@chakra-ui/react";

const Admin = () => {

    const {developers} = useAppSelector(state => state.developers)

    console.log(developers)

    return (
      <section className={s.panel}>
          <ul className={s.list}>
              {
                  developers?.map(item => (
                      <li className={s.list__item}>
                          <div className={s.list__item_left}>
                              <Avatar size="lg" name={item?.name} src={item?.photo}/>

                              <div className={s.list__item_left_box}>
                                  <p className={s.list__item_left_name}>{item?.name}</p>

                                  <p className={s.list__item_left_post}>{item?.post}</p>
                              </div>
                          </div>
                      </li>
                  ))
              }
          </ul>
      </section>
    );
};

export default Admin;
