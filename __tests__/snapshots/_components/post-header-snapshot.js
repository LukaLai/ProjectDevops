import { render } from '@testing-library/react'
import { PostHeader } from '../../../src/app/_components/post-header'

it('renders homepage unchanged', () => {
    const author = {
        name: 'jj',
        picture: '/public/assets/blog/authors/jj.jpeg'
    }
    const { container } = render(<PostHeader date={'2024-04-17T05:35:07.322Z'} author={author} title={'test'} coverImage={'/public/assets/blog/authors/jj.jpeg'}/>)
    expect(container).toMatchSnapshot()
})