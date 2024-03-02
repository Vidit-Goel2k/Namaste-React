import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/restaurantListMock.json'
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

test('should search restaurant list for burger text input', async () => { 
    await act(async () => {
        return render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })
    
    const restaurantCardsBeforeSearch = screen.getAllByTestId("restaurantCard")

    expect(restaurantCardsBeforeSearch.length).toBe(9)

    const searchButton = screen.getByRole("button", {name: "Search"})

    const searchInput = screen.getByTestId("searchInput")

    fireEvent.change(searchInput, {target: {value: "burger"}})

    fireEvent.click(searchButton)

    const restaurantCardsAfterSearch = screen.getAllByTestId("restaurantCard")

    expect(restaurantCardsAfterSearch.length).toBe(2)
 })

 test('should filter top rated restaurant', async () => {
    await act(async () => {
        return render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    })

    const resCardsBeforeFilter = screen.getAllByTestId("restaurantCard")

    expect(resCardsBeforeFilter.length).toBe(9)
    
    const topRatedResBtn = screen.getByRole("button", {name: "Top Rated"})
    
    fireEvent.click(topRatedResBtn)
    
    const resCardsAfterFilter = screen.getAllByTestId("restaurantCard")

    expect(resCardsAfterFilter.length).toBe(7)

 })