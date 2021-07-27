import DoublyLinkedList from '../src/lista_duplamente_ligada/DoublyLinkedList';

let d;

beforeEach(() => {
    d = new DoublyLinkedList();
});

test("add", () => {
    d.add(2);
    expect(d.size()).toBe(1);
    d.add(3);
    expect(d.toString()).toBe("3->2");
    expect(d.size()).toBe(2);
    expect(d.search(2)).toBe(true);
    expect(d.search(3)).toBe(true);
});

test("append", () => {
    d.append(2);
    expect(d.size()).toBe(1);
    d.append(3);
    expect(d.toString()).toBe("2->3");
    expect(d.size()).toBe(2);
    expect(d.search(2)).toBe(true);
    expect(d.search(3)).toBe(true);
});

test("removeFirst", () => {
    d.append(2);
    expect(d.size()).toBe(1);
    d.append(3);
    expect(d.size()).toBe(2);
    expect(d.search(2)).toBe(true);
    expect(d.search(3)).toBe(true);
    d.removeFirst();
    expect(d.size()).toBe(1);
    expect(d.search(2)).toBe(false);
    d.removeFirst();
    expect(d.size()).toBe(0);

});

test("removeLast", () => {
    d.add(2);
    expect(d.size()).toBe(1);
    d.add(3);
    expect(d.size()).toBe(2);
    expect(d.search(2)).toBe(true);
    expect(d.search(3)).toBe(true);
    d.removeLast();
    expect(d.size()).toBe(1);
    expect(d.search(2)).toBe(false);
    d.removeLast();
    expect(d.size()).toBe(0);
});

test("addAt", () => {
    d.append(1);
    d.append(3);
    d.addAt(2, 2);
    expect(d.search(2)).toBe(true);
    expect(d.size()).toBe(3);
    expect(d.toString()).toBe("1->2->3");
});

test("removeAt", () => {
    d.append(1);
    d.append(3);
    d.addAt(2, 2);
    expect(d.search(2)).toBe(true);
    expect(d.size()).toBe(3);
    d.removeAt(2);
    expect(d.search(2)).toBe(false);
    expect(d.toString()).toBe("1->3");
    expect(d.size()).toBe(2);
});

test("removeAt", () => {
    d.append(1);
    d.append(2);
    d.append(3);
    d.append(4);
    d.append(5);
    expect(d.search(2)).toBe(true);
    expect(d.size()).toBe(5);
    d.removeAt(2);
    expect(d.toString()).toBe("1->3->4->5");
});