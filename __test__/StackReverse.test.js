import StackReverse from '../src/StackReverse';

let sr;

beforeEach(() => {
    sr = new StackReverse(5);
});

test('reverse word', () => {
    expect(sr.reverse("enuch")).toBe("hcune");
});