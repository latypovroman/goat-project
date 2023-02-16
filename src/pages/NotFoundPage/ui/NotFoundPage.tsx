import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = (props: NotFoundPageProps) => {
    const { className = '' } = props
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.notFoundPage, {}, [className])}>
            { t('Такая страница не существует') }
        </div>
    )
}
