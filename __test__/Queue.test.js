import Queue from "../src/fila/Queue";

let q;

beforeEach(() => {
    q = new Queue(10);
});

test('enqueue', () => {
    q.enqueue(1);
    expect(q.enqueue(2)).toBe(2);
    expect(q.front()).toBe(1);
});

test('dequeue', () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    expect(q.front()).toBe(1);
    expect(q.dequeue()).toBe(1);
    expect(q.front()).toBe(2);
});

test('enqueue', () => {
    expect(q.isEmpty()).toBe(true);
});

test('data', () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);

    expect(q.toString()).toEqual('[ 1 2 3 4 ]');
    expect(q.front()).toBe(1);

    q.dequeue();
    q.dequeue();

    expect(q.toString()).toEqual('[ 3 4 ]');
    expect(q.front()).toBe(3);
});

