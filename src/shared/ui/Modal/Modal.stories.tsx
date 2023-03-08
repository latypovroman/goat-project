import React from 'react'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { Modal } from 'shared/ui/Modal/Modal'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const ModalDark = Template.bind({})
ModalDark.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '                Ab aliquam at aut, commodi dolor dolorum eligendi,\n' +
        '                et modi qui quo reprehenderit ullam unde veritatis.\n' +
        '                Autem cumque libero maiores perferendis tempore!',
    isOpen: true
}

export const ModalLight = Template.bind({})
ModalLight.args = {
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
        '                Ab aliquam at aut, commodi dolor dolorum eligendi,\n' +
        '                et modi qui quo reprehenderit ullam unde veritatis.\n' +
        '                Autem cumque libero maiores perferendis tempore!',
    isOpen: true
}
ModalLight.decorators = [ThemeDecorator(Theme.LIGHT)]
