const { test,expect } = require('@jest/globals')
const { returnTwo,greeting,add,multiply,divide,subtract } = require('./functions.js')

test('should return the number 2', () => {
    expect(returnTwo()).toBe(2)
})

test('should return "Hello {name}"', () => {
    expect(greeting('Dylan')).toBe('Hello Dylan')
})

describe('should calculate math functions', () => {
    test('should return sum of {num1} + {num2}', () => {
        expect(add(10,14)).toBe(24)
    })
    test('should not return 4', () => {
        expect(add(5,6)).not.toBe(4)
    })
    test('should return result of {num1} * {num2}', () => {
        expect(multiply(2,2)).toBe(4)
    })
    test('should return result of {num1} / {num2}', () => {
        expect(divide(2,2)).toBe(1)
    })
    test('should return result of {num1} - {num2}', () => {
        expect(subtract(2,2)).toBe(0)
    })
})