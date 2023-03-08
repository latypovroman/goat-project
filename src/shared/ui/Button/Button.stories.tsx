import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { Button, ButtonSize, ButtonVariant } from './Button'
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

export const ClearDarkM = Template.bind({})
ClearDarkM.args = {
    children: 'Text',
    size: ButtonSize.M,
    variant: ButtonVariant.CLEAR
}

export const ClearLightM = Template.bind({})
ClearLightM.args = {
    children: 'Text',
    size: ButtonSize.M,
    variant: ButtonVariant.CLEAR
}
ClearLightM.decorators = [ThemeDecorator(Theme.LIGHT)]

export const ClearDarkS = Template.bind({})
ClearDarkS.args = {
    children: 'Text',
    size: ButtonSize.S,
    variant: ButtonVariant.CLEAR
}

export const ClearLightS = Template.bind({})
ClearLightS.args = {
    children: 'Text',
    size: ButtonSize.S,
    variant: ButtonVariant.CLEAR
}
ClearLightS.decorators = [ThemeDecorator(Theme.LIGHT)]

export const ClearDarkL = Template.bind({})
ClearDarkL.args = {
    children: 'Text',
    size: ButtonSize.L,
    variant: ButtonVariant.CLEAR
}

export const ClearLightL = Template.bind({})
ClearLightL.args = {
    children: 'Text',
    size: ButtonSize.L,
    variant: ButtonVariant.CLEAR
}
ClearLightL.decorators = [ThemeDecorator(Theme.LIGHT)]

export const ClearInvertedDarkS = Template.bind({})
ClearInvertedDarkS.args = {
    children: 'Text',
    size: ButtonSize.S,
    variant: ButtonVariant.CLEAR_INVERTED
}

export const ClearInvertedLightS = Template.bind({})
ClearInvertedLightS.args = {
    children: 'Text',
    size: ButtonSize.S,
    variant: ButtonVariant.CLEAR_INVERTED
}
ClearInvertedLightS.decorators = [ThemeDecorator(Theme.LIGHT)]

export const ClearInvertedDarkM = Template.bind({})
ClearInvertedDarkM.args = {
    children: 'Text',
    size: ButtonSize.M,
    variant: ButtonVariant.CLEAR_INVERTED
}

export const ClearInvertedLightM = Template.bind({})
ClearInvertedLightM.args = {
    children: 'Text',
    size: ButtonSize.M,
    variant: ButtonVariant.CLEAR_INVERTED
}
ClearInvertedLightM.decorators = [ThemeDecorator(Theme.LIGHT)]

export const ClearInvertedDarkL = Template.bind({})
ClearInvertedDarkL.args = {
    children: 'Text',
    size: ButtonSize.L,
    variant: ButtonVariant.CLEAR_INVERTED
}

export const ClearInvertedLightL = Template.bind({})
ClearInvertedLightL.args = {
    children: 'Text',
    size: ButtonSize.L,
    variant: ButtonVariant.CLEAR_INVERTED
}
ClearInvertedLightL.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OutlineDark = Template.bind({})
OutlineDark.args = {
    children: 'Text',
    variant: ButtonVariant.OUTLINE
}

export const OutlineLight = Template.bind({})
OutlineLight.args = {
    children: 'Text',
    variant: ButtonVariant.OUTLINE
}
OutlineLight.decorators = [ThemeDecorator(Theme.LIGHT)]

export const OutlineInvertedDark = Template.bind({})
OutlineInvertedDark.args = {
    children: 'Text',
    variant: ButtonVariant.OUTLINE_INVERTED
}

export const OutlineInvertedLight = Template.bind({})
OutlineInvertedLight.args = {
    children: 'Text',
    variant: ButtonVariant.OUTLINE_INVERTED
}
OutlineInvertedLight.decorators = [ThemeDecorator(Theme.LIGHT)]
