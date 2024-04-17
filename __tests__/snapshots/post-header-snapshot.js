import { render } from '@testing-library/react'
import { PostHeader } from '../../src/app/_components/post-header'

it('renders homepage unchanged', () => {
    const { container } = render(<PostHeader date={'2024-04-17T05:35:07.322Z'} author={'jj'} title={'test'} coverImage={'/public/assets/blog/authors/jj.jpeg'}/>)
    expect(container).toMatchSnapshot()
})