import {classNames} from "shared/lib/classNames/classNames";
import styles from "./Sidebar.module.scss"
import React, {useState} from "react";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string;
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed(prev => !prev);

    return (
        <div className={classNames(styles.sidebar, {[styles.collapsed]: collapsed}, [className])}>

            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};