import TopToBase from "../src/TopToBase";

let t;
let p;

beforeEach(() => {
    t = new TopToBase(5);
    p = new TopToBase(5)
});

test('Change top with base 1', () => {
    t.push(2);
    t.push(4);
    t.push(7);
    t.changeTopToBase(p);
    expect(t.topo()).toBe(2);
});

test('Change top with base 2', () => {
    t.push(8);
    t.push(4);
    t.push(7);
    t.push(1);
    t.changeTopToBase(p);
    expect(t.topo()).toBe(8);
});

test('Change top with base 3', () => {
    t.push(8);
    t.push(4);
    t.push(7);
    t.push(1);
    t.push(9);
    t.changeTopToBase(p);
    expect(t.topo()).toBe(8);
    t.pop();
    t.pop();
    t.pop();
    t.pop();
    expect(t.pop()).toBe(9);
});

