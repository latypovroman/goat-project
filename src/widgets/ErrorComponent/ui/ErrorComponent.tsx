import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ErrorComponent.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonVariant } from 'shared/ui/Button/Button'

interface ErrorComponentProps {
    className?: string
}

export const ErrorComponent = (props: ErrorComponentProps) => {
    const { className = '' } = props
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(styles.errorComponent, {}, [className])}>
            <p>{t('Что-то пошло не так')}</p>
            <Button
                variant={ButtonVariant.OUTLINE}
                onClick={reloadPage}
            >{t('Обновить страницу')}</Button>
        </div>
    )
}
