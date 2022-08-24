import React, { FC, useState } from "react";
import { ISelectorState, useAppDispatch, useAppSelector } from "../../../interface";
import { editContact } from "../../../store/DataAction";
import '../CreateModal/index.css'

interface ModalProps {
    visible?: boolean,
    handleCloseModal: (is: boolean) => void;
}

const EditModal: FC<ModalProps> = ({ visible, handleCloseModal }) => {
    const item = useAppSelector((state: ISelectorState) => state.dataSlice.currentContact);
    const [contact, setContact] = useState<any>(item)
    const dispatch = useAppDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {        
        let obj = {
            ...contact,
            ...item,
            [e.target.name]: e.target.value
        }
        setContact(obj)
    }

    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        
        editContact(contact)(dispatch)
        handleCloseModal(false);
    }

    return (
        <div className={`modal ${visible ? 'visible' : 'hidden'}`}>
            <div className="modal__wrapper">
                <span onClick={() => handleCloseModal(false)}>&#10799;</span>
                <h5> Редактирование Контакта </h5>

                <form className="modal_form" onSubmit={onSubmit}>
                    <input
                        onChange={handleChange} value={contact && contact.url || item && item.url || ''}
                        name='url' placeholder="Введите URL"
                    />
                    <input
                        onChange={handleChange}
                        value={contact && contact.name || item && item.name || ''}
                        name='name' placeholder="Введите Имя"
                    />
                    <input
                        onChange={handleChange}
                        value={contact && contact.age || item && item.age || ''}
                        name='age' placeholder="Введите Возраст"
                    />
                    <input
                        onChange={handleChange}
                        value={contact && contact.phone || item && item.phone || ''}
                        name='phone' placeholder="Введите Контакт"
                    />
                    <br />
                    <button>Сохранить</button>
                </form>
            </div>
        </div>
    )
}
export default EditModal;