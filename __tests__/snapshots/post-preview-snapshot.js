import { render } from '@testing-library/react'
import { PostPreview } from '../../src/app/_components/post-preview'
import { Author } from '../../src/interfaces/author'

it('renders homepage unchanged', () => {
    const author = {
        name: 'jj',
        picture: '/public/assets/blog/authors/jj.jpeg'
    }
    const { container } = render(<PostPreview date={'2024-04-17T05:35:07.322Z'} title={'test'} author={author} coverImage={'/public/assets/blog/authors/jj.jpeg'} slug={'slug'} excerpt={'excerpt'}/>)
    expect(container).toMatchSnapshot()
})