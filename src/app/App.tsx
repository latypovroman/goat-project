import React, {Suspense} from 'react';
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

const App = () => {
    const { theme, switchTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <button onClick={switchTheme}>Поменять тему</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPage/>}/>
                    <Route path="/" element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;