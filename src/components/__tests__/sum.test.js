import { sum } from "../sum"

// test("Desc of test", () => {
//     recievedResult = perform test 
// Assertion (not mandatory - test will always pass because no expectation but we write assertions)
//     expect(recievedResult).toBe(expectedResult)
// })

test("sum function should calculate the sum of two numbers", () => {
    const result = sum(3,2)

    // Assertion
    expect(result).toBe(5)
})