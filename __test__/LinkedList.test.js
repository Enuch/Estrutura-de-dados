import LinkedList from '../src/lista_ligada/LinkedList'

let l;

beforeEach(() => {
    l = new LinkedList();
});

test("add", () => {
    l.add(2);
    l.add(3);
    expect(l.isEmpty()).toBe(false);
    expect(l.size()).toBe(2);
    expect(l.search(2)).toBe(true);
    expect(l.search(3)).toBe(true);
});

test("toString", () => {
    l.add(1);
    l.add(2);
    expect(l.toString()).toBe("2->1");
});

test("removeAt", () => {
    l.add(4);
    l.add(7);
    l.add(9);
    expect(l.removeAt(1)).toBe(9);
    expect(l.toString()).toBe("7->4");
    expect(l.removeAt(2)).toBe(4);
    expect(l.toString()).toBe("7");
});