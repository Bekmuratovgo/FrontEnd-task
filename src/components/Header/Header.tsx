import React, { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../assets/img/Logo";
import { LogOut } from "../../assets/img/LogOut";
import { ISelectorState, useAppDispatch, useAppSelector } from "../../interface";
import { getName, searchContact } from "../../store/DataAction";
import './Header.css';

export const Header: FC = () => {
    const { name } = useAppSelector((state: ISelectorState) => state.dataSlice)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        if (name && name.length) {
            localStorage.removeItem('name')
            getName()(dispatch)
            navigate('/login');
        }
    }

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchContact(e.target.value)(dispatch);
    };

    const debounce = (func: (e: React.ChangeEvent<HTMLInputElement>) => void) => {
        let timer: null | ReturnType<typeof setTimeout>;
        
        return function (...args: [React.ChangeEvent<HTMLInputElement>]) {
            const context = ''
            if (timer) clearTimeout(timer);
                
                timer = setTimeout(() => {
                    timer = null;
                    func.apply(context, args);
                }, 500)
        }
    };
    const optimizedFn = useCallback(debounce(handleSearch), [])

    return (
        <header className="header">
            <Logo />
            <div className="header_search">
                { name && <input onChange={(e) => optimizedFn(e)} placeholder="Поиск" type="text" /> }
            </div>
            <div className="header__wrapper">
                <span>
                    { name }
                </span>
                <LogOut click={handleLogout} />
            </div>
        </header>
    )
}