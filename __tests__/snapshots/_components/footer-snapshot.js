import { render } from '@testing-library/react'
import Footer from '../../../src/app/_components/footer'

it('renders homepage unchanged', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
})