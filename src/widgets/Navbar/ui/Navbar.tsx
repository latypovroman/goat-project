import React from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Navabar.module.scss"
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
    className?: string;
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink theme={AppLinkTheme.LIGHT} to="/">{ t("Главная") }</AppLink>
                <AppLink theme={AppLinkTheme.LIGHT} to="/about">{ t("Описание") }</AppLink>
            </div>
        </div>
    );
};