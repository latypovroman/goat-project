import React, {Suspense} from 'react';
import { Route, Routes, Link } from "react-router-dom";
import "../styles/index.scss";
import {AboutPageAsync} from "../pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {useTheme} from "../theme/useTheme";
import {classNames} from "../helpers/classNames/classNames";

const App = () => {
    const { theme, switchTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <button onClick={switchTheme}>Поменять тему</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                    <Route path="/" element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;