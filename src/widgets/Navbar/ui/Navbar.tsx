import React, { useCallback, useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Navabar.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className = '' } = props
    const { t } = useTranslation()
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

    const onToggleAuthModal = useCallback(() => {
        setIsAuthModalOpen(prev => !prev)
    }, [])

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <Button
                    variant={ButtonVariant.OUTLINE_INVERTED}
                    onClick={onToggleAuthModal}
                >
                    {t('Регистрация')}
                </Button>
            </div>
            <Modal
                isOpen={isAuthModalOpen}
                close={onToggleAuthModal}
            >
            </Modal>
        </div>
    )
}
