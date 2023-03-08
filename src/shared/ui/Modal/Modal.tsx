import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Modal.module.scss'
import { type ReactNode, useCallback, useEffect } from 'react'
import { Portal } from 'shared/ui/Portal/Portal'

interface ModalProps {
    className?: string
    children?: ReactNode
    isOpen?: boolean
    close?: () => void
}

export const Modal = (props: ModalProps) => {
    const {
        className = '',
        children,
        isOpen = false,
        close
    } = props

    const handleClose = useCallback(() => {
        if (close !== undefined) {
            close()
        }
    }, [close])

    const onEscKey = useCallback((evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
            handleClose()
        }
    }, [handleClose])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onEscKey)
        }

        return () => {
            window.removeEventListener('keydown', onEscKey)
        }
    }, [isOpen, onEscKey])

    const onContentClick = (evt: React.MouseEvent) => {
        evt.stopPropagation()
    }

    const mods: Record<string, boolean> = {
        [styles.opened]: isOpen
    }

    return (
        <Portal>
            <div className={classNames(styles.modal, mods, [className])}>
                <div className={styles.overlay} onClick={handleClose}>
                    <div className={styles.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    )
}
