import { render } from '@testing-library/react'
import Layout from '../../src/app/layout'
import Container from '../../src/app/_components/container';

it('renders layout unchanged', () => {
    // eslint-disable-next-line react/no-children-prop
    const { container } = render(<Layout children={<Container />}/>)
    expect(container).toMatchSnapshot()
})