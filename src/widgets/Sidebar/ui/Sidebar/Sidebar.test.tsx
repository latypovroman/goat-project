import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { testComponentRender } from 'shared/config/tests/testComponentRender'

describe('Sidebar', () => {
    test('render test', () => {
        testComponentRender(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('toggle test', () => {
        testComponentRender(<Sidebar />)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        fireEvent.click(toggleButton)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    })
})
