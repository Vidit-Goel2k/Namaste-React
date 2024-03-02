import { render, screen } from "@testing-library/react"
import RestaurantCard, {withDiscountedLabel} from '../RestaurantCard'
import MOCK_DATA from '../mocks/restaurantCardMock.json'
import "@testing-library/jest-dom"

test('should render RestaurantCard component with props data', () => { 
    render(<RestaurantCard resData={MOCK_DATA} />)

    const restaurantName = screen.getByText("Punjabi Rasoi")

    expect(restaurantName).toBeInTheDocument()
 })

 test('should render RestaurantCard component with discounted label', () => { 
    const RestaurantCardWithDiscountedLabel = withDiscountedLabel(RestaurantCard)
    
    render(<RestaurantCardWithDiscountedLabel resData={MOCK_DATA} />)

    const discountLabel = screen.getByText("₹125 OFF ABOVE ₹249")

    expect(discountLabel).toBeInTheDocument()
  })