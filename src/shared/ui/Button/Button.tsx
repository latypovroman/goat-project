import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonVariant {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clear-inverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outline-inverted'
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: ButtonVariant
    size?: ButtonSize
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className = '',
        children,
        variant = ButtonVariant.CLEAR,
        size = ButtonSize.M,
        ...otherProps
    } = props

    const additional = [className, styles[variant], styles[size]]

    return (
        <button
            {...otherProps}
            className={classNames(styles.button, { size }, additional)}
        >
            { children }
        </button>
    )
}
