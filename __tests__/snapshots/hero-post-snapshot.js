import { render } from '@testing-library/react'
import { HeroPost } from '../../src/app/_components/hero-post'

it('renders homepage unchanged', () => {
    const { container } = render(<HeroPost title='title'
                                           coverImage='/public/assets/blog/authors/jj.jpeg'
                                           date={'2024-04-17T05:35:07.322Z'}
                                           author='jj'
                                           slug='slug'
                                           excerpt='excerpt'/>)
    expect(container).toMatchSnapshot()
})