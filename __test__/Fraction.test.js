import Fraction from '../src/Fraction'

let f;
let p;

beforeEach(() => {
    f = new Fraction(3,3);
    p = new Fraction(3,3)
});

test('Multiply', () => {
    expect(f.multiplies(p)).toEqual( {"numerator": 9, "denominator": 9});
});

test('division', () => {
    expect(f.division(p)).toEqual({"numerator": 9, "denominator": 9});
});

test('toString', () => {
    f.multiplies(p);
    expect(f.toString()).toBe("9/9");
});
