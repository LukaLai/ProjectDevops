import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Alert from '../../../src/app/_components/alert'
import Container from '../../../src/app/_components/container'

describe('Alert', () => {
    it('renders a div', () => {
        expect(render(<Alert preview={true} />).container).toBeInstanceOf(HTMLDivElement);
    })
})