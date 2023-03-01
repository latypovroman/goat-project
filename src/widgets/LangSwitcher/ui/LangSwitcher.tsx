import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import React from 'react'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
    className?: string
    short: boolean
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className = '', short } = props
    const { t, i18n } = useTranslation()

    const toggle = () => {
        void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            className={classNames('', {}, [className])}
            variant={ButtonVariant.CLEAR_INVERTED}
            onClick={toggle}
        >
            {short ? t('Язык сокращенно') : t('Язык')}
        </Button>
    )
}
