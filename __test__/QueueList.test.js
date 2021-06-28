import QueueList from "../src/lista_ligada/QeueuList";

let q;

beforeEach(() => {
    q = new QueueList();
});

test("Enqueue", () => {
    q.enqueue(3);
    q.enqueue(5);
    expect(q.front()).toBe(3);
    expect(q.isEmpty()).toBe(false);
    expect(q.size()).toBe(2);
});

test("Dequeue", () => {
    q.enqueue(3);
    q.enqueue(5);
    expect(q.dequeue()).toBe(3)
    expect(q.front()).toBe(5);
    expect(q.isEmpty()).toBe(false);
    expect(q.size()).toBe(1);
    q.dequeue();
    expect(q.isEmpty()).toBe(true);
});

test("Is empty", () => {
    expect(q.isEmpty()).toBe(true);
});