import Stack from '../src/Verify';

let v;

beforeEach(() => {
    v = new Stack();
});

test('verify', () => {
    expect(v.verify('(]')).toBe(false);
});

test('verify 2', () => {
    expect(v.verify('[](]')).toBe(false);
});

test('verify 3', () => {
    expect(v.verify('[([]])')).toBe(true);
});

test('verify 4', () => {
    expect(v.verify('[(]')).toBe(false);
});