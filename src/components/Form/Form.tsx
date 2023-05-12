import auth from '../Register/Auth.module.scss'

import {AiOutlineUserAdd} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";

import axios from "axios";
import {useToast} from "@chakra-ui/react";

import { v4 as uuidv4 } from 'uuid';
import {useRouter} from "next/router";
import {useForm} from "react-hook-form";

import Link from "next/link";

interface dataForm {
    email: string,
    password: string
}

interface infoData {
    email: string,
    password: string,
    id: string,
    fine: any
}

const Form = () => {

    const toast = useToast()

    const router = useRouter()

    const {pathname} = useRouter()

    const {
        register,
        reset,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm(
        {mode: "onBlur"}
    )

    const registerUser = (data: any) => {

        let userInfo = {
            ...data,
            password: "1231231",
            id: uuidv4(),
            fine: []
        }

        axios.post('http://localhost:4080/register', {...userInfo})
            .then((res) => {

                toast({
                    title: 'Account created',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })

                localStorage.setItem('user', JSON.stringify({
                    token: res.data.accessToken,
                    ...res.data.user
                }))

                reset()

                router.push('/')
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

    const loginUser = (data: any) => {

        let userInfo: infoData = {
            ...data,
            password: "1231231",
            id: uuidv4(),
            fine: []
        }

        axios.post('http://localhost:4080/login', {...userInfo})
            .then((res) => {

                toast({
                    title: 'Account sign in',
                    description: "Success",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })

                localStorage.setItem('user', JSON.stringify({
                    token: res.data.accessToken,
                    ...res.data.user
                }))

                reset()

                router.push('/')
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

    const submit = (data: any) => {
        pathname === '/register' ? registerUser(data) : loginUser(data)
    }

    return(
        <>
            <form className={auth.form} noValidate onSubmit={handleSubmit(submit)}>

            <div className={auth.form__left}>
                <span className={auth.form__left_circle}>
                    {
                        pathname === '/register'? <AiOutlineUserAdd className={auth.form__left_user}/>
                            :
                            <AiOutlineUser className={auth.form__left_user}/>
                    }
                </span>
                <p className={auth.form__left_subtitle}>
                    {
                        pathname === '/register' ? "Sign up" : "Sign in"
                    }
                </p>
            </div>

            <div className={auth.form__right}>
                <div className={auth.form__right_content}>
                    {
                        pathname === '/register' ?
                            <label className={auth.form__right_label}
                                   style={{border:errors.name? "1px solid red" : "1px solid #6d95fc"}}>
                                <input type="text"
                                       {...register('name', {
                                           required: {
                                               message: "required field",
                                               value: true
                                           }
                                       })}
                                       className={auth.form__right_input} placeholder="Name"/>
                            </label>
                            :  ''
                    }
                    <label className={auth.form__right_label}
                           style={{border:errors.email? "1px solid red" : "1px solid #6d95fc"}}>

                        <input type="email"
                               {...register('email', {
                                   required: {
                                       message: "required field",
                                       value: true
                                   }
                               })}
                               className={auth.form__right_input} placeholder="Email"/>
                    </label>

                    {
                        pathname === '/register' ?
                            <label className={auth.form__right_label}>
                                <select
                                    {...register('post', {
                                        required: {
                                            message: "required field",
                                            value: true
                                        }
                                    })}
                                    className={auth.form__right_input} >
                                    <option value="frontend" className={auth.form__right_option}>Frontend</option>
                                    <option value="backend" className={auth.form__right_option}>Backend</option>
                                    <option value="ui/ux" className={auth.form__right_option}>UI/UX</option>
                                </select>
                            </label>
                            :
                            ''
                    }



                    <div className={auth.form__box}>
                        <button className={auth.form__box_btn} type="submit">Sign up</button>
                    </div>
                </div>
            </div>

        </form>

            <div className={auth.auth__link}>
                <Link href={'/register'} style={pathname === '/register' ? {border: "3px solid #6d95fc"}: undefined} className={auth.auth__link_btn}>Register</Link>
                <Link href={'/login'} style={pathname === '/login' ? {border: "3px solid #6d95fc"}: undefined} className={auth.auth__link_btn}>Login</Link>
            </div>
        </>
    )
}

export default Form