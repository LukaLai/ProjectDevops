import { render } from '@testing-library/react'
import Container from '../../src/app/_components/container'

it('renders homepage unchanged', () => {
    const { container } = render(<Container />)
    expect(container).toMatchSnapshot()
})