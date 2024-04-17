import { render } from '@testing-library/react'
import CoverImage from '../../src/app/_components/cover-image'

it('renders homepage unchanged', () => {
    const { container } = render(<CoverImage title={'jj'} src={'/public/assets/blog/authors/jj.jpeg'} />)
    expect(container).toMatchSnapshot()
})