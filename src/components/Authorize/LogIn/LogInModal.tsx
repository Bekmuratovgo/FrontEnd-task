import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../interface";
import { getName } from "../../../store/DataAction";
import './LogInModal.css'

const LogInModal: FC = () => {
    const [login, setLogin] = useState<String>('');
    const [password, setPassword] = useState<String>('');
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const handleClick = () => {
        if (login && password) {
            localStorage.setItem('name', JSON.stringify(login));
            getName(navigate)(dispatch);
        }
    }

    const validate = () => {
        if (!password.split(' ').join('')) {
            return true;
        }
        if (!login.split(' ').join('')) {
            return true;
        }
    }
    
    return (
        <div className="login">
            <div className="login__wrapper">
                <h3>Authorize</h3>
                <div className="login__wrapper_login">
                    <h5>login</h5>
                    <input 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)} 
                        type="text" 
                    />
                </div>
                <div className="login__wrapper_pass">
                    <h5>password</h5>
                    <input 
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} 
                        type="text" 
                    />
                </div>
                <button
                    className={`btnSubmit ${validate() ? 'disabled' : null}`}                        
                    disabled={validate()}
                    onClick={handleClick}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}
export default LogInModal