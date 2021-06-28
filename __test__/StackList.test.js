import StackList from "../src/lista_ligada/StackList";

let s;

beforeEach(() => {
    s = new StackList();
});

test("push", () => {
    s.push(3);
    s.push(5);
    expect(s.top()).toBe(5);
    expect(s.push(6)).toBe(6);
    expect(s.isEmpty()).toBe(false);
    expect(s.top()).toBe(6);
    expect(s.size()).toBe(3);
});

test("pop", () => {
    s.push(3);
    s.push(5);
    expect(s.pop()).toBe(5);
    expect(s.isEmpty()).toBe(false);
    expect(s.top()).toBe(3);
    expect(s.size()).toBe(1);
    s.pop();
    expect(s.isEmpty()).toBe(true);
});

test("top", () => {
    s.push(3);
    s.push(5);
    expect(s.top()).toBe(5);
});

test("isEmpty", () => {
    expect(s.isEmpty()).toBe(true);
});

test("clear", () => {
    s.push(3);
    s.push(5);
    s.clear();
    expect(s.isEmpty()).toBe(true);
});
