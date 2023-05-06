import auth from '../Auth/auth.module.scss'
import {AiOutlineUserAdd} from "react-icons/ai";
import axios from "axios";
import {useToast} from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';

const Form = () => {

    const toast = useToast()

    const registerUser = (e) => {
        e.preventDefault()

        let userInfo = {
            id: uuidv4(),
            name: e.target[0].value,
            post: e.target[1].value
        }

        axios.post('http://localhost:4080/developers', {...userInfo})
            .then(({data}) => {

                localStorage.setItem('user', JSON.stringify({
                    token: data.accessToken,
                    ...data
                }))

                toast({
                    title: 'Account created',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })

                e.target[0].value =''

            })
            .catch((err) => {
                toast({
                    title: "Something went to bad",
                    description: err.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })
            })
    }

    return(
        <form className={auth.form} onSubmit={(e) => registerUser(e)}>

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
                        <input type="text" className={auth.form__right_input} placeholder="Name"/>
                    </label>

                    <label className={auth.form__right_label}>
                        <select className={auth.form__right_input} >
                            <option value="frontend" className={auth.form__right_option}>Frontend</option>
                            <option value="backend" className={auth.form__right_option}>Backend</option>
                            <option value="ui/ux" className={auth.form__right_option}>UI/UX</option>
                        </select>
                    </label>

                    <div className={auth.form__box}>
                        <button className={auth.form__box_btn} type="submit">Sign up</button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Form