import NodeLinkedList from "../src/lista_ligada/NodeLinkedList";

let n;

beforeEach(() => {
    n = new NodeLinkedList();
});

test("add", () => {
    n.add(1);
    n.add(2);
    expect(n.search(2)).toBe(1);
    expect(n.search(1)).toBe(2);
    expect(n.isEmpty()).toBe(false);
    expect(n.length()).toBe(2);

});

test("append", () => {
    n.append(1);
    n.append(2);
    n.append(2);
    n.append(2);
    expect(n.search(1)).toBe(1);
    expect(n.search(2)).toBe(2);
    expect(n.length()).toBe(4);
});

test("addAt", () => {
    n.append(1);
    n.append(2);
    n.append(4);
    expect(n.search(3)).toBe(4);
    n.addAt(3, 3);
    expect(n.search(3)).toBe(3);
    expect(n.length()).toBe(4);
});

test("removeFirst", () => {
    n.append(1);
    n.append(2);
    expect(n.removeFirst()).toBe(1);
    expect(n.search(1)).toBe(2);
    expect(n.length()).toBe(1);
    expect(n.removeFirst()).toBe(2);
    expect(n.isEmpty()).toBe(true);
});

test("removeLast", () => {
    n.append(1);
    n.append(2);
    expect(n.removeLast()).toBe(2);
    expect(n.search(1)).toBe(1);
    expect(n.length()).toBe(1);
    expect(n.removeLast()).toBe(1);
    expect(n.isEmpty()).toBe(true);
});

test("removeAt", () => {
    n.append(1);
    n.append(3);
    n.append(2);
    expect(n.removeAt(2)).toBe(3);
    expect(n.search(1)).toBe(1);
    expect(n.search(2)).toBe(2);
    expect(n.length()).toBe(2);
    expect(n.removeAt(1)).toBe(1);
    expect(n.removeAt(1)).toBe(2);
    expect(n.isEmpty()).toBe(true);
});

test("empty", () => {
    expect(n.isEmpty()).toBe(true);
});