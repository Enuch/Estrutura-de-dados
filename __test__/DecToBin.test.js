import DecToBin from "../src/DecToBin";

let dec;

beforeEach(() => {
    dec = new DecToBin(10);
});

test('binario return', () => {
    expect(dec.decToBin(25)).toBe(11001);
});

test('binario return', () => {
    expect(dec.decToBin(10)).toBe(1010);
});

test('binario return', () => {
    expect(dec.decToBin(15)).toBe(1111);
});

test('binario return', () => {
    expect(dec.decToBin(3)).toBe(11);
});