import {Html5QrcodeScanner} from "html5-qrcode";
import React, {useEffect, useState} from "react";
import qr from "./Qr.module.scss"
import {useRouter} from "next/router";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import {Breadcrumb, BreadcrumbItem, useToast} from "@chakra-ui/react";
import p from "@/components/Profile/Profile.module.scss";
import Link from "next/link";



const Qr = () => {

    const toast = useToast()

    const router = useRouter()

    const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : null;

    const [success, setSuccess] = useState('')
    const [result, setResult] = useState('')

    const now = new Date();

    const dateOptions: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "long",
        year: "numeric"
    }

    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric"
    }

    const date = new Intl.DateTimeFormat('ru',dateOptions)

    const time = new Intl.DateTimeFormat('ru',timeOptions)

    useEffect(() => {
        const scanner = new Html5QrcodeScanner('reader', {
            fps: 20,
        });

        const success = (result) => {

            let object = {
                id: uuidv4(),
                userId: user.id,
                name: user.name,
                post: user.post,
                photo: user.photo,
                time: time.format(now),
                data: date.format(now),
                cause: "",
                sum: 0
            }

            setSuccess('Успешно отсканировано')
            setResult(result)

            scanner.clear();
            document.getElementById('reader').remove();

            axios.post('http://localhost:4080/come', {...object} )
                .then(() => {
                    setTimeout(() => {
                        router.push('/')
                    },4000)
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

        };

        scanner.render(success);
    }, []);

    return(
        <section className={qr.qr}>
            <div className={qr.qr__content}>
                <div id="reader" className={qr.qr__content_reader}></div>
                <div id="result" className={qr.qr__content_result}>
                    <h2 className={qr.qr__content_result_success}>
                        {success}
                    </h2>
                    {
                        result?
                            <p className={qr.qr__content_result_desc}>
                                Добрый день, <span className={qr.qr__content_result_name}>{user.name} !</span> <br/>
                                Вы пришли в  <span className={qr.qr__content_result_name}> {time.format(now)} </span> <br/>
                                <span className={qr.qr__content_result_name}> {date.format(now)} </span>
                            </p>: ''
                    }
                </div>
            </div>

            <div className={p.profile__links}>
                <Breadcrumb fontWeight='medium' fontSize='xl'>
                    <BreadcrumbItem>
                        <Link href='/' className={p.profile__links_link}>Home</Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <p>QR</p>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>
        </section>
    )
}

export default Qr