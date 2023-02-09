import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Navabar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.LIGHT} to="/">Главная</AppLink>
                <AppLink theme={AppLinkTheme.LIGHT} to="/about">О сайте</AppLink>
            </div>
        </div>
    );
};