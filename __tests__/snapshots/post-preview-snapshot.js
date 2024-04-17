import { render } from '@testing-library/react'
import { PostPreview } from '../../src/app/_components/post-preview'

it('renders homepage unchanged', () => {
    const { container } = render(<PostPreview date={'2024-04-17T05:35:07.322Z'} title={'test'} author={'jj'} coverImage={'/public/assets/blog/authors/jj.jpeg'} slug={'slug'} excerpt={'excerpt'}/>)
    expect(container).toMatchSnapshot()
})