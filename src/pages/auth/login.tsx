import auth from "./auth.module.scss"
import Form from "@/components/Form/Form";

const Login = () => {
    return(
        <section className={auth.auth}>
            <Form/>
        </section>
    )
}

export default Login