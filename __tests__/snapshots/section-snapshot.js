import { render } from '@testing-library/react'
import { SectionSeparator } from '../../src/app/_components/section-separator'

it('renders homepage unchanged', () => {
    const { container } = render(<SectionSeparator />)
    expect(container).toMatchSnapshot()
})