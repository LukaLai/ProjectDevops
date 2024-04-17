import { render } from '@testing-library/react'
import { PostBody } from '../../src/app/_components/post-body'

it('renders homepage unchanged', () => {
    const { container } = render(<PostBody content={'test'} />)
    expect(container).toMatchSnapshot()
})