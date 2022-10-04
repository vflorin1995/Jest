const Calculator = require('./calculator');

let calc = new Calculator;

describe ('calculator', () => {
    test('add', () => {
        expect(calc.add(2,3)).toBe(5);
        expect(calc.add(5,3)).toBe(8);
        expect(calc.add(9,3)).toBe(12);
    });
    test('subtract', () => {
        expect(calc.subtract(5,3)).toBe(2);
        expect(calc.subtract(5,2)).toBe(3);
        expect(calc.subtract(5,1)).toBe(4);
    });
    test('multiply', () => {
        expect(calc.multiply(5,3)).toBe(15);
        expect(calc.multiply(5,2)).toBe(10);
        expect(calc.multiply(5,1)).toBe(5);
    });
    test('divide', () => {
        expect(calc.divide(40,20)).toBe(2);
        expect(calc.divide(30,2)).toBe(15);
        expect(calc.divide(20,10)).toBe(2);
    });
});