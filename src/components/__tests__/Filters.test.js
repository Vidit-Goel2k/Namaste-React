import { render, screen } from '@testing-library/react';
import Filters from '../Filters'
import "@testing-library/jest-dom"

test('should render the Filter Component with Search', () => { 
    render(<Filters />)

    const searchInput = screen.getByPlaceholderText("search")

    expect(searchInput).toBeInTheDocument()
 })