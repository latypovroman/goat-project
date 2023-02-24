import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Button, VariantButton } from './Button'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ClearDark = Template.bind({})
ClearDark.args = {
    children: 'Text',
    variant: VariantButton.CLEAR
}

export const ClearLight = Template.bind({})
ClearLight.args = {
    children: 'Text',
    variant: VariantButton.CLEAR
}
ClearLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'Text',
    variant: VariantButton.OUTLINE
}

export const OutlineLight = Template.bind({})
OutlineLight.args = {
    children: 'Text',
    variant: VariantButton.OUTLINE
}
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)]
