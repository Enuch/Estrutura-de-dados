import DoubleStack from "../src/DoubleStack";

let ds;

beforeEach(() => {
    ds = new DoubleStack(6);
});

test('Start stack', () => {
    ds.pushTop1(4);
    ds.pushTop2(3);
    expect(ds.topo1()).toBe(4);
    expect(ds.topo2()).toBe(3);
});

test('is Empty topo1 and topo2', () => {
    expect(ds.isEmpty1()).toBe(true);
    expect(ds.isEmpty2()).toBe(true);
});

test('isFull', () => {
    ds.pushTop1(2);
    ds.pushTop1(2);
    ds.pushTop1(2);
    ds.pushTop2(2);
    ds.pushTop2(2);
    ds.pushTop2(2);

    expect(ds.isFull()).toBe(true);
});

test('topo 1 e 2', () => {
    ds.pushTop1(2);
    ds.pushTop1(3);
    ds.pushTop1(4);
    ds.pushTop2(1);
    ds.pushTop2(2);
    ds.pushTop2(3);

    expect(ds.topo1()).toBe(4);
    expect(ds.topo2()).toBe(3);
});

test('push', () => {
    expect(ds.pushTop1(3)).toBe(3);
    expect(ds.pushTop2(4)).toBe(4);
});

test('pop', () => {
    ds.pushTop1(2);
    ds.pushTop1(3);
    ds.popTop1();

    expect(ds.topo1()).toBe(2);
});