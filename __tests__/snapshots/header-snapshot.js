import { render } from '@testing-library/react'
import Header from '../../src/app/_components/header'

it('renders homepage unchanged', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
})