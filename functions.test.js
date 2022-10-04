const string = require('./functions');

it('Return length', () => {
    expect(string('ana')).toBe(3);
});

it('Bigger than 0', () => {
    expect(string('ana')).toBeGreaterThan(0);
})

it('Smaller than 10', () => {
    expect(string('ana')).toBeLessThan(10);
})
