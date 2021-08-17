import Conjunto from '../src/lista_duplamente_ligada/Conjunto';

let c;

beforeEach(() => {
    c = new Conjunto();
});

test("Intancia", () => {
    expect(c.length()).toBe(0);
    expect(c.isEmpty()).toBe(true);
});

test("adicionar", () => {
    c.add("A");
    c.add("B");
    expect(c.length()).toBe(2);
    expect(c.isEmpty()).toBe(false);
});

test("remove", () => {
    c.add("A");
    c.add("B");
    c.delete("A");
    expect(c.length()).toBe(1);
    expect(c.isEmpty()).toBe(false);
    expect(c.has("B")).toBe(true);
});

test("Has", () => {
    c.add("A");
    c.add("C");
    c.add("Z");
    expect(c.has("A")).toBe(true);
    expect(c.has("C")).toBe(true);
    expect(c.has("Z")).toBe(true);
    expect(c.has("d")).toBe(false);
    expect(c.has("f")).toBe(false);

});

test("Length", () => {
    c.add("A");
    c.add("C");
    expect(c.length()).toBe(2);
    c.add("Z");
    expect(c.length()).toBe(3);
});

test("clear", () => {
    c.add("A");
    c.add("C");
    expect(c.isEmpty()).toBe(false);
    c.add("Z");
    c.clear()
    expect(c.length()).toBe(0);
    expect(c.isEmpty()).toBe(true);

});