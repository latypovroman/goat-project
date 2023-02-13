import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum VariantButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    variant?: VariantButton
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className = '',
        children,
        variant = VariantButton.CLEAR,
        ...otherProps
    } = props

    return (
        <button
            {...otherProps}
            className={classNames(styles.button, {}, [className, styles[variant]])}
        >
            { children }
        </button>
    )
}
