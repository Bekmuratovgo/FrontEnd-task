import React, { FC, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogInModal from '../components/Authorize/LogIn/LogInModal';
import { Header } from '../components/Header/Header';
import Main from '../pages/Main';
import { useNavigate } from 'react-router';

const Index: FC = () => {
    const navigate = useNavigate();
    const name: string = JSON.parse(localStorage.getItem('name') || '[]');

    useEffect(() => {
        navigate(name.length ? `/` : `/login`)
    }, [name.length])

    return (
        <>
            <Header />
            <Routes>
                <Route path={'/'} element={<Main />}>
                </Route>
                <Route path={'login'} element={<LogInModal />} />
            </Routes>
        </>
    );
};

export default Index;