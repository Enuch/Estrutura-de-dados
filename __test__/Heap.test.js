import Heap from '../src/arvore/Heap';

let h;

beforeEach(() => {
    h = new Heap();
});

test("inserction", () => {
    h.inserction(50);
    h.inserction(26);
    h.inserction(74);
    h.inserction(6);
    h.inserction(63);
    h.inserction(48);
    h.inserction(18);
    h.inserction(14);
    expect(h.toString()).toBe("74->63->50->14->26->48->18->6");
});