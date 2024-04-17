import { render } from '@testing-library/react'
import DateFormatter from '../../../src/app/_components/date-formatter'

it('renders homepage unchanged', () => {
    const { container } = render(<DateFormatter dateString={'2024-04-17T05:35:07.322Z'}/>)
    expect(container).toMatchSnapshot()
})