import Form from "@/components/Form/Form";
import auth from '../Register/auth.module.scss'

const Login = () => {
    return(
        <section className={auth.auth}>
            <Form/>
        </section>
    )
}

export default Login