import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const ThrowErrorButton = () => {
    const { t } = useTranslation()
    const [error, setError] = useState(false)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    const toggle = () => {
        setError((error) => !error)
    }

    return (
        <Button
            onClick={toggle}
        >
            {t('throw')}
        </Button>
    )
}
