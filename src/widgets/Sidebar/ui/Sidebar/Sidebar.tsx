import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/home.svg'
import AboutUsIcon from 'shared/assets/icons/about-us.svg'

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className = '' } = props
    const { t } = useTranslation()

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => { setCollapsed(prev => !prev) }

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                variant={ButtonVariant.CLEAR_INVERTED}
                className={styles.collapseButton}
            >
                {collapsed ? '>' : `< ${t('Скрыть')}`}
            </Button>
            <div className={styles.navigation}>
                <AppLink
                    theme={AppLinkTheme.LIGHT}
                    to={RoutePath.main}
                >
                    {collapsed ? <div><HomeIcon className={styles.icon} /></div> : t('Главная') }
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.LIGHT}
                    to={RoutePath.about}
                >
                    {collapsed ? <div><AboutUsIcon className={styles.icon} /></div> : t('Описание') }
                </AppLink>
            </div>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher
                    className={styles.langSwitcher}
                    short={collapsed}
                />
            </div>
        </div>
    )
}
