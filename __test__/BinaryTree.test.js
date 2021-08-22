import BinaryTree from '../src/arvore/BinaryTree';

let b;

beforeEach(() => {
    b = new BinaryTree();
});

test("insertion", () => {
    b.insertion(67);
    b.insertion(57);
    b.insertion(60);
    b.insertion(70);
    b.insertion(90);
    b.insertion(55);
});

test("Min", () => {
    b.insertion(98);
    b.insertion(90);
    b.insertion(45);
    b.insertion(70);
    b.insertion(89);
    expect(b.min()).toBe(45);
});

test("Max", () => {
    b.insertion(98);
    b.insertion(90);
    b.insertion(45);
    b.insertion(70);
    b.insertion(89);
    expect(b.max()).toBe(98);
});

test("Search", () => {
    b.insertion(98);
    b.insertion(90);
    b.insertion(45);
    b.insertion(70);
    b.insertion(89);
    expect(b.search(98)).toBe(true);
    expect(b.search(90)).toBe(true);
    expect(b.search(45)).toBe(true);
    expect(b.search(70)).toBe(true);
    expect(b.search(89)).toBe(true);
});