import LinkedList from "../src/lista_ligada/LinkedList";

let l;

beforeEach(() => {
    l = new LinkedList();
});

test("jose", () => {
    l.append(1);
    l.append(2);
    l.append(3);
    l.append(4);
    expect(l.toString()).toBe("1");

    expect(l.josephus()).toBe(1);
});

test("jose", () => {
    l.append(1);
    l.append(2);
    l.append(3);
    expect(l.toString()).toBe("2");

    expect(l.josephus()).toBe(2);
});