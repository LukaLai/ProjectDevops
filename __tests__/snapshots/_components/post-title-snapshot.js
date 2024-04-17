import { render } from '@testing-library/react'
import { PostTitle } from '../../../src/app/_components/post-title'

it('renders homepage unchanged', () => {
    const { container } = render(<PostTitle />)
    expect(container).toMatchSnapshot()
})