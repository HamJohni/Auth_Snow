import a from './adminMain.module.scss'
import p from "@/components/Profile/Profile.module.scss";
import {Avatar, Breadcrumb, BreadcrumbItem} from "@chakra-ui/react";
import Link from "next/link";
import main from "@/components/Main/Main.module.scss";


const Index = () => {

    const user = {
        name: "Ilgiz",
        post: "Admin",
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
                    <button className={main.qr__content_bottom_btn}>Разработчики</button>
                    <button className={main.qr__content_bottom_btn}>Приходы</button>
                </div>
            </div>

            <button className={main.qr__btn}>
                Log out
            </button>
        </section>
    );
};

export default Index;