import { classNames } from 'shared/lib/classNames/classNames'
import React from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import DarkIcon from 'shared/assets/icons/dark.svg'
import LightIcon from 'shared/assets/icons/light.svg'
import { Button, VariantButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className = '' } = props
    const { theme, switchTheme } = useTheme()

    return (
        <Button className={classNames('', {}, [className])}
            onClick={switchTheme}
            variant={VariantButton.CLEAR}
        >
            { theme === Theme.DARK ? <DarkIcon /> : <LightIcon /> }
        </Button>
    )
}
