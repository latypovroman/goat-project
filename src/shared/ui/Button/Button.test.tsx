import { Button, VariantButton } from 'shared/ui/Button/Button'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
    test('render test', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('variant clear', () => {
        render(<Button variant={VariantButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
        screen.debug()
    })
})
