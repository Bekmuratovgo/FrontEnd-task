import React, { FC, useState } from "react";
import { useAppDispatch } from "../../../interface";
import { addContact } from "../../../store/DataAction";
import './index.css'

interface ModalProps {
    visible?: boolean,
    handleCloseModal: (is: boolean) => void;
}

const CreateModal: FC<ModalProps> = ({visible, handleCloseModal}) => {
    const [contact, setContact] = useState<any>()
    const dispatch = useAppDispatch();
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let obj = {
            ...contact,
            [e.target.name]: e.target.value
        }        
        setContact(obj)
    }

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        addContact(contact)(dispatch);
        handleCloseModal(false);
    }

    return (
        <div className={`modal ${visible ? 'visible' : 'hidden'}`}>
            <div className="modal__wrapper">
            <span onClick={() => handleCloseModal(false)}>&#10799;</span>
                <h5>Создание Контакта</h5>
                <form className="modal_form" onSubmit={onSubmit}>
                    <input onChange={handleChange} name='url' placeholder="Введите URL" />
                    <input onChange={handleChange} name='name' placeholder="Введите Имя" />
                    <input onChange={handleChange} name='age' placeholder="Введите Возраст" />
                    <input onChange={handleChange} name='phone' placeholder="Введите Контакт" />
                    <br/>
                    <button>Создать</button>
                </form>
            </div>
        </div>
    )
}
export default CreateModal;