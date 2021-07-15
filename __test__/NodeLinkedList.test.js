import NodeLinkedList from "../src/lista_ligada/NodeLinkedList";

let n;

beforeEach(() => {
    n = new NodeLinkedList();
});

test("add", () => {
    n.add(1);
    n.add(2);
    expect(n.isEmpty()).toBe(false);
    expect(n.search(2)).toBe(true);
    expect(n.search(1)).toBe(true);
    expect(n.length()).toBe(2);
    expect(n.removeLast()).toBe(1);
});

test("append", () => {
    n.append(1);
    n.append(2);
    expect(n.isEmpty()).toBe(false);
    expect(n.search(2)).toBe(true);
    expect(n.search(1)).toBe(true);
    expect(n.length()).toBe(2);
    expect(n.removeLast()).toBe(2);
});

test("removeFirst", () => {
    n.append(1);
    n.append(2);
    expect(n.isEmpty()).toBe(false);
    expect(n.search(2)).toBe(true);
    expect(n.search(1)).toBe(true);
    expect(n.removeFirst()).toBe(1);
    expect(n.length()).toBe(1);
    expect(n.removeFirst()).toBe(2);
    expect(n.isEmpty()).toBe(true);

});

test("removeLast", () => {
    n.append(1);
    n.append(2);
    expect(n.isEmpty()).toBe(false);
    expect(n.search(2)).toBe(true);
    expect(n.search(1)).toBe(true);
    expect(n.removeLast()).toBe(2);
    expect(n.length()).toBe(1);
    expect(n.removeLast()).toBe(1);
    expect(n.isEmpty()).toBe(true);
});

test("addAt", () => {
    n.append(1);
    n.append(2);
    n.append(3);
    n.addAt(1.5, 2);
    expect(n.search(1.5)).toBe(true);
    expect(n.length()).toBe(4);
    expect(n.toString()).toBe('1->1.5->2->3');

});

test("removeAt", () => {
    n.append(1);
    n.append(2);
    n.append(3);
    n.removeAt(2);
    expect(n.search(2)).toBe(false);
    expect(n.length()).toBe(2);
    expect(n.toString()).toBe('1->3');
});
