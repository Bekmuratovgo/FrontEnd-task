import React, { FC, useEffect, useState } from "react";
import Card from "../components/Card/Card";
import './Main.css'
import { getContact, getName } from "../store/DataAction";
import { useNavigate } from "react-router-dom";
import { ISelectorState, MappedContactItem, useAppDispatch, useAppSelector } from "../interface";
import CreateModal from "../components/Modals/CreateModal";
import EditModal from "../components/Modals/EditModal";

const Main: FC = () => {
    const [isOpenCreate, setIsOpenCreate] = useState<boolean>(false);
    const [isOpenEdit, setIsOpenEdit] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { data } = useAppSelector((state: ISelectorState) => state.dataSlice);
    
    useEffect(() => {
        getName(navigate)(dispatch)
        getContact()(dispatch)
    }, []);

    const handleCloseModal = () => {
        setIsOpenCreate(false);
        setIsOpenEdit(false);
    }

    return (
        <div className="main">
            <div className="main__add">
                <button onClick={() => setIsOpenCreate(true)}>Создать Контакт</button>
            </div>

            <CreateModal visible={isOpenCreate} handleCloseModal={handleCloseModal} />
            <EditModal visible={isOpenEdit} handleCloseModal={handleCloseModal} />

            <div className="main__wrapper">
                {data.map((item: MappedContactItem, index: number) => (
                    <Card 
                        key={index} 
                        item={item}
                        setIsOpenEdit={setIsOpenEdit} 
                    />
                ))}
            </div>
        </div>
    )
}
export default Main