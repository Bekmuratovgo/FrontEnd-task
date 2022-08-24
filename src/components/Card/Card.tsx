import React, { FC } from "react";
import { CardProps, useAppDispatch } from "../../interface";
import { removeContact } from "../../store/DataAction";
import { dataSlice } from "../../store/DataSlice";
import './Card.css'

const Card: FC<CardProps> = ({ item, setIsOpenEdit }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="card">
            <div className="card__wrapper">
                <div className="card__wrapper_blockFirst">
                    <img src={item.url} alt="img" />
                    <div className="card__wrapper_data">
                        <div className="card__wrapper_author">
                            <h5>Имя:</h5>
                            <h5>{item.name}</h5>
                        </div>
                        <div className="card__wrapper_company">
                            <h5>Возраст:</h5>
                            <h5>{item.age}</h5>
                        </div>
                    </div>
                </div>
                <div className="card__wrapper_blockSecond">
                    <p className="card__wrapper_title">Контакт: {item.phone}</p>
                    <p className="card__wrapper_desc">ID: {item.id}</p>
                </div>
                <div className="card__wrapper_blockThird">
                    <button
                        className="card__wrapper_edit"
                        onClick={() => {
                            setIsOpenEdit(true);
                            dispatch(dataSlice.actions.currentContactFetch(item))
                        }}
                    >Редактировать</button>
                    <button
                        className="card__wrapper_delete"
                        onClick={() => removeContact(item.id!)(dispatch)
                        }
                    >Удалить</button>
                </div>
            </div>
        </div>
    )
}
export default Card