import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className = '' } = props

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => { setCollapsed(prev => !prev) }

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                toggle
            </Button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.langSwitcher}/>
            </div>
        </div>
    )
}
