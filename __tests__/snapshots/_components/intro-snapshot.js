import { render } from '@testing-library/react'
import { Intro } from '../../../src/app/_components/intro'

it('renders homepage unchanged', () => {
    const { container } = render(<Intro />)
    expect(container).toMatchSnapshot()
})