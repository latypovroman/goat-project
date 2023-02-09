import React from 'react';
import "./styles/index.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const { theme, switchTheme } = useTheme();

    return (
        <div className={classNames("app", {}, [theme])}>
            <Navbar />
            <AppRouter />
            <button onClick={switchTheme}>Поменять тему</button>
        </div>
    );
};

export default App;