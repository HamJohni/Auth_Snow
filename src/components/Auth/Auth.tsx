import Form from "@/components/Form/Form";
import auth from "./auth.module.scss";

const Auth = () => {
    return(
        <section className={auth.auth}>
            <Form/>
        </section>
    )
}

export default Auth