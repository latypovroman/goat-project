import React from 'react'
import { useTranslation } from 'react-i18next'
import { ThrowErrorButton } from 'app/providers/ErrorBoundary'

const MainPage = () => {
    const { t } = useTranslation()

    return (
        <div>
            <ThrowErrorButton />
            { t('Главная-контент') }
        </div>
    )
}

export default MainPage
