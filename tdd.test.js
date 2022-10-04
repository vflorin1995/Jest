const string = require('./tdd');

it('cap', () => {
    expect(string('maria')).toBe('Maria');
});