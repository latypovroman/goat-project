import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { AppLink, AppLinkTheme } from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' }
    },
    args: {
        children: 'Text',
        to: '/'
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const OnDark = Template.bind({})
OnDark.args = {
    theme: AppLinkTheme.DARK
}

export const OnLight = Template.bind({})
OnLight.args = {
    theme: AppLinkTheme.LIGHT
}
OnLight.decorators = [ThemeDecorator(Theme.LIGHT)]
