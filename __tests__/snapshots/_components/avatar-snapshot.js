import { render } from '@testing-library/react'
import Avatar from '../../../src/app/_components/avatar'

it('renders homepage unchanged', () => {
    const { container } = render(<Avatar name={'jj'} picture={'/public/assets/blog/authors/jj.jpeg'} />)
    expect(container).toMatchSnapshot()
})