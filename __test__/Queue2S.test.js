import Queue2S from '../src/fila/Queue2S';

let q;

beforeEach(() => {
    q = new Queue2S(5);
});

test("push", () => {
    q.enqueue(2);
    q.enqueue(4);
    q.enqueue(5);
    expect(q.front()).toBe(2);
});

test("pop", () => {
    q.enqueue(5);
    q.enqueue(4);
    expect(q.dequeue()).toBe(5);
});

test("is Empty", () => {
    expect(q.isEmpty()).toBe(true);
    q.enqueue(4);
    expect(q.isEmpty()).toBe(false);
});

test("is Full", () => {
    expect(q.isFull()).toBe(false);
    q.enqueue(5);
    q.enqueue(4);
    q.enqueue(3);
    q.enqueue(2);
    q.enqueue(1);
    expect(q.isFull()).toBe(true);
});

test("size", () => {
    q.enqueue(3);
    q.enqueue(2);
    expect(q.size()).toBe(2);
});

test("to string", () => {
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    expect(q.toString()).toEqual('[3 2 1 ]');
});