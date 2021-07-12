import QueueList from "../src/QueueList";

let q;

beforeEach(() => {
    q = new QueueList();
});

test("enqueue", () => {
    q.enqueue(2);
    q.enqueue(3);
    expect(q.length()).toBe(2);
    expect(q.front()).toBe(2);
    expect(q.toString()).toBe('2->3');
    expect(q.isEmpty()).toBe(false);
});

test("dequeue", () => {
    q.enqueue(2);
    q.enqueue(4);
    expect(q.front()).toBe(2);
    expect(q.length()).toBe(2);
    expect(q.dequeue()).toBe(2);
    expect(q.front()).toBe(4);
    expect(q.length()).toBe(1);
    expect(q.isEmpty()).toBe(false);
    expect(q.dequeue()).toBe(4);
    expect(q.isEmpty()).toBe(true);
});

test("clear", () => {
    q.enqueue(4);
    q.enqueue(4);
    q.enqueue(8);
    q.clear();
    expect(q.isEmpty()).toBe(true);
});