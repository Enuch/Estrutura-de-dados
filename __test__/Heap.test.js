import Heap from '../src/arvore/Heap';

let h;

beforeEach(() => {
    h = new Heap();
});

test("inserction", () => {
    h.inserction(56);
    h.inserction(44);
    h.inserction(32);
    h.inserction(10);
    h.inserction(20);
    h.inserction(79); 
    h.inserction(2); 


    expect(h.toString()).toBe("79->44->56->10->20->32->2");

        // [2, 3, 5, 1]
        // [3, 2, 1]

    h.remove()
    expect(h.toString()).toBe("56->44->32->10->20->2");
});