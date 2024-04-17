import { render } from '@testing-library/react'
import Alert from '../../src/app/_components/alert'

it('renders homepage unchanged', () => {
    const { container } = render(<Alert />)
    expect(container).toMatchSnapshot()
})