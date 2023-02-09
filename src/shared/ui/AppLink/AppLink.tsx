import {classNames} from "shared/lib/classNames/classNames";
import styles from "./AppLink.module.scss"
import {Link, LinkProps} from "react-router-dom";
import React from "react";

export enum AppLinkTheme {
    DARK = 'dark',
    LIGHT = 'light',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.DARK,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.appLink, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};