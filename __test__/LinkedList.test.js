import LinkedList from "../src/lista_ligada/LinkedList";

let l;

beforeEach(() => {
    l = new LinkedList;
});

test("add", () => {
    l.add(2);
    l.add(3);
    expect(l.isEmpty()).toBe(false);
    expect(l.length()).toBe(2);
    expect(l.search(2)).toBe(2);
    expect(l.search(1)).toBe(3);

});

test("append", () => {
    l.append(3);
    l.append(4);
    expect(l.isEmpty()).toBe(false);
    expect(l.length()).toBe(2);
    expect(l.search(1)).toBe(3);
    expect(l.search(2)).toBe(4);

});

test("remove", () => {
    l.add(3);
    l.add(4);
    l.removeFirst();
    expect(l.isEmpty()).toBe(false);
    expect(l.length()).toBe(1);
    expect(l.search(1)).toBe(3);
    l.removeFirst();
    expect(l.isEmpty()).toBe(true);
});

test("removeLast", () => {
    l.add(3);
    l.add(5);
    l.removeLast();
    expect(l.isEmpty()).toBe(false);
    expect(l.length()).toBe(1);
    expect(l.search(1)).toBe(5);
    l.removeLast();
    expect(l.isEmpty()).toBe(true);

});

test("add At", () => {
    l.append(1);
    l.append(2);
    l.append(4);
    l.addAt(2, 3);
    expect(l.length()).toBe(4);
    expect(l.isEmpty()).toBe(false);
    expect(l.search(2)).toBe(2);
    expect(l.search(4)).toBe(4);
    expect(l.search(3)).toBe(2);
});

test("remove At", () => {
    l.append(1);
    l.append(2);
    l.append(3);
    l.removeAt(2);
    expect(l.isEmpty()).toBe(false);
    expect(l.search(2)).toBe(3);
    expect(l.length()).toBe(2);
});

test("isEmpty", () => {
    expect(l.isEmpty()).toBe(true);
});