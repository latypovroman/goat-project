import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { ErrorComponent } from './ErrorComponent'

export default {
    title: 'widget/ErrorComponent',
    component: ErrorComponent,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ErrorComponent>

const Template: ComponentStory<typeof ErrorComponent> = (args) => <ErrorComponent {...args} />

export const Dark = Template.bind({})
Dark.args = {}

export const Light = Template.bind({})
Light.args = {}
Light.decorators = [ThemeDecorator(Theme.LIGHT)]
