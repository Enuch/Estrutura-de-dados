import Stack2Q from "../src/fila/Stack2Q";

let s;

beforeEach(() => {
    s = new Stack2Q();
});

test("Push", () => {
    s.push(2);
    s.push(5);
    expect(s.peek()).toBe(5);
});

test("Pop", () => {
    s.push(5);
    s.push(3);
    expect(s.pop()).toBe(3);
});

test("is empty", () => {
    expect(s.isEmpty()).toBe(true);
    s.push(2);
    expect(s.isEmpty()).toBe(false);
});

test("is Full", () => {
    expect(s.isFull()).toBe(false);
    s.push(3);
    s.push(3);
    s.push(3);
    s.push(3);
    s.push(3);
    expect(s.isFull()).toBe(true)
});

test("size", () => {
    s.push(3);
    s.push(5);
    expect(s.size()).toBe(2);
});