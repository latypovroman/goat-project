import React from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navabar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className = '' } = props

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>

            </div>
        </div>
    )
}
