import s from "@/components/AdminUsers/Admin.module.scss";
import {Avatar, Breadcrumb, BreadcrumbItem, Button, Input, Select, useDisclosure, useToast} from "@chakra-ui/react";
import p from "@/components/Profile/Profile.module.scss";
import Link from "next/link";
import {useAppSelector} from "@/hooks/redux";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react'

import {useState,useRef} from "react";
import axios from "axios";


const Index = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = useRef(null)
    const toast = useToast()

    const [fine,setFine] = useState([])
    const [comment,setComment] = useState(false)
    const [sum,setSum] = useState(false)

    const [sumText, setSumText] = useState('')
    const [commentText, setCommentText] = useState('')

    let fineJoin = fine.join(',')

    const {come} = useAppSelector(state => state.come)

    const handleSubmitFine = () => {
        setFine([])
        onClose()

        fine.map(item => {
            axios.patch(`http://localhost:4080/come/${item}`,
                {
                    cause: commentText,
                    sum: sumText
                })
                .then(() => {
                    toast({
                        title: 'Успешно',
                        status: 'success',
                        duration: 3000,
                        isClosable: true,
                        position: 'top-left',
                    })
                }).catch((err) => {
                toast({
                    title: 'Провал',
                    description: err.message,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top-left',
                })
            })
        })
    }

    return (
        <section className={s.panel}>
            <ul className={s.list}>
                {
                    come?.map(item => (
                        <li onClick={() =>{
                            !item.sum ?
                                setFine([...fine,item.id]) : ''
                        }}
                            style={fineJoin.includes(item.id) || item.sum ? {border: "1px solid red", transform: "scale(1.03)"} : null}
                            key={item.id} className={s.list__item}>
                            <div className={s.list__item_left}>
                                <Avatar size="lg" name={item?.name} src={item?.photo}/>

                                <div className={s.list__item_left_box}>
                                    <p className={s.list__item_left_name}>{item?.name}</p>

                                    <p className={s.list__item_left_post}>{item?.post}</p>
                                </div>
                            </div>

                            <div className={s.list__item_right}>
                                <div className="">
                                <p className={s.list__item_left_name}>{item?.time}</p>
                                </div>

                                <p className={s.list__item_left_post}>{item?.data}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>

            <div className={p.profile__links}>
                <Breadcrumb fontWeight='medium' fontSize='xl'>
                    <BreadcrumbItem>
                        <Link href='/' className={p.profile__links_link}>Домой</Link>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <p>Приходы</p>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div>

            {
                fine.length !== 0 ?
                    <div className={p.profile__footer}>
                        <button className={p.profile__footer_btn} onClick={() => setFine([])}>Отменить</button>
                        <button className={p.profile__footer_btn} onClick={onOpen} >Штраф</button>
                    </div> : ''
            }

            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader color="black">Штрафы</ModalHeader>
                    <ModalCloseButton bg="black"/>

                    <ModalBody color="black" className={p.profile__body}>

                        <div className={p.profile__fine}>
                            {
                                !comment ?
                                    <select onChange={(e) => setCommentText(e.target.value)} placeholder="gjhdbtn" className={p.profile__fine_select}>
                                        <option className={p.profile__fine_option} value="Не пришел">Не пришел</option>
                                        <option className={p.profile__fine_option} value="Опоздал">Опоздал</option>
                                        <option className={p.profile__fine_option} value="Дедлайн">Дедлайн</option>
                                    </select>
                                    :
                                    <input onChange={(e) => setCommentText(e.target.value)} className={p.profile__fine_input} type="text" placeholder='Комментарий' />
                            }
                            <Button colorScheme='blue' onClick={() =>{
                                setComment((prev) => !prev)
                                setCommentText('')
                            }
                            } >Другое</Button>
                        </div>

                        <div className={p.profile__fine}>

                            {
                                !sum?
                                    <select onChange={(e) => setSumText(e.target.value)} className={p.profile__fine_select}>
                                        <option className={p.profile__fine_option} value="100">100</option>
                                        <option className={p.profile__fine_option} value="200">200</option>
                                        <option className={p.profile__fine_option} value="300">300</option>
                                    </select>
                                    :
                                    <input onChange={(e) => setSumText(e.target.value)} className={p.profile__fine_input} type="number" placeholder='Сумма' />
                            }

                            <Button colorScheme='blue' onClick={() =>{
                                setSum((prev) => !prev)
                                setSumText('')
                            }
                            } >Другое</Button>
                        </div>

                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Отмена
                        </Button>
                        <Button variant='ghost' color="black" onClick={() => handleSubmitFine()}>Подтверждаю</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </section>
    );
};

export default Index;