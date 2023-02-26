import { type Story } from '@storybook/react'
import { type Theme } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: Theme) => function storyFunction (StoryComponent: Story) {
    return (
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    )
}
