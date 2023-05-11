import Form from "@/components/Form/Form";
import auth from '../Register/Auth.module.scss'

const Login = () => {
    return(
        <section className={auth.auth}>
            <Form/>
        </section>
    )
}

export default Login