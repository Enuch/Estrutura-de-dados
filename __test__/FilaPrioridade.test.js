import PriorityQueue from "../src/lista_ligada/FilaPrioridade";

let f;

beforeEach(() => {
    f = new PriorityQueue();
});

test("string", () => {
    f.enqueue(1);
    f.enqueue(5);
    f.enqueue(3);
    f.enqueue(8);
    f.enqueue(6);
    f.enqueue(2);
    expect(f.toString()).toBe("8->6->5->3->2->1");
});

test("dequeu", () => {
    f.enqueue(1);
    f.enqueue(5);
    f.enqueue(3);
    f.enqueue(8);
    f.enqueue(6);
    f.enqueue(2);
    expect(f.toString()).toBe("8->6->5->3->2->1");
    f.dequeue();
    f.dequeue();
    expect(f.toString()).toBe("5->3->2->1");
});
