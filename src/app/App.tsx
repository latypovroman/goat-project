import React from 'react';
import { Link } from "react-router-dom";
import "./styles/index.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

const App = () => {
    const { theme, switchTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Link to="/">Главная</Link>
            <Link to="/about">О сайте</Link>
            <button onClick={switchTheme}>Поменять тему</button>
            <AppRouter />
        </div>
    );
};

export default App;