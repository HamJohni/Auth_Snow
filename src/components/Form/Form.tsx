import auth from '../../pages/auth/auth.module.scss'
import {AiOutlineUserAdd} from "react-icons/ai";
import {HiOutlineMail} from "react-icons/hi";
import {BsBriefcase} from "react-icons/bs";


const Form = () => {
    return(
        <form className={auth.form}>

            <div className={auth.form__left}>
                <span className={auth.form__left_circle}>
                    <AiOutlineUserAdd className={auth.form__left_user}/>
                </span>
                <p className={auth.form__left_subtitle}>
                    Sign up
                </p>
            </div>

            <div className={auth.form__right}>
                <div className={auth.form__right_content}>
                    <label className={auth.form__right_label}>
                        {/*<span className={auth.form__right_icon}>*/}
                        {/*    <HiOutlineMail/>*/}
                        {/*</span>*/}
                        <input type="text" className={auth.form__right_input} placeholder="Name"/>
                    </label>

                    <label className={auth.form__right_label}>
                        {/*<span className={auth.form__right_icon}>*/}
                        {/*    <BsBriefcase/>*/}
                        {/*</span>*/}
                        <select className={auth.form__right_input}>
                            <option className={auth.form__right_option}>Выберите должность:</option>
                            <option value="frontend" className={auth.form__right_option}>Frontend</option>
                            <option value="backend" className={auth.form__right_option}>Backend</option>
                            <option value="ui/ux" className={auth.form__right_option}>UI/UX</option>
                        </select>
                    </label>

                    <div className={auth.form__box}>
                        <button className={auth.form__box_btn}>Sign up</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form