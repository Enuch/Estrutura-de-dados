import StackList from "../src/StackList";

let s;

beforeEach(() => {
    s = new StackList();
});

test("push", () => {
    s.push(1);
    s.push(2);
    expect(s.size()).toBe(2);
    expect(s.top()).toBe(2);
    expect(s.isEmpty()).toBe(false);
    expect(s.toString()).toBe("1->2");
});

test("pop", () => {
    s.push(1);
    s.push(2);
    expect(s.pop()).toBe(2);
    expect(s.top()).toBe(1);
    expect(s.size()).toBe(1);
    expect(s.isEmpty()).toBe(false);
    expect(s.pop()).toBe(1);
    expect(s.isEmpty()).toBe(true);
});

test("empty", () => {
    expect(s.isEmpty()).toBe(true);
});

test("clear", () => {
    s.push(1);
    expect(s.size()).toBe(1);
    s.push(2);
    expect(s.size()).toBe(2);
    s.clear();
    expect(s.isEmpty()).toBe(true);
    expect(s.size()).toBe(0);
});

test("toString", () => {
    s.push(1);
    s.push(2);
    expect(s.toString()).toBe("1->2");
});