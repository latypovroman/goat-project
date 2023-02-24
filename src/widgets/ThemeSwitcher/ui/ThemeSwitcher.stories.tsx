import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeSwitcher } from './ThemeSwitcher'

export default {
    title: 'widget/ThemeSwitcher',
    component: ThemeSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const OnDark = Template.bind({})
OnDark.args = {}

export const OnLight = Template.bind({})
OnLight.args = {}
OnLight.decorators = [ThemeDecorator(Theme.LIGHT)]
