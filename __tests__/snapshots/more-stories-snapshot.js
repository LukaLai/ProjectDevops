import { render } from '@testing-library/react'
import { MoreStories } from '../../src/app/_components/more-stories'


it('renders homepage unchanged', () => {
    const { container } = render(<MoreStories posts = {[]} />)
    expect(container).toMatchSnapshot()
})