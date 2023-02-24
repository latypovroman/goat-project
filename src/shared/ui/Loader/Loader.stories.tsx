import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Loader } from './Loader'

export default {
    title: 'shared/Loader',
    component: Loader,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const OnDark = Template.bind({})
OnDark.args = {}

export const OnLight = Template.bind({})
OnLight.args = {}
OnLight.decorators = [ThemeDecorator(Theme.LIGHT)]
