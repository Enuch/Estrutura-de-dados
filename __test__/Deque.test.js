import Deque from "../src/fila/Deque";

let d;

beforeEach(() => {
    d = new Deque(5);
});

test("inserir no atras", () => {
    d.enqueue(4);
    d.enqueue(2);
    d.enqueue(3);
    expect(d.front()).toBe(4);
});

test("inserir na frente", () => {
    d.enqueueFront(5);
    d.enqueueFront(3);
    d.enqueueFront(2);
    expect(d.front()).toBe(2);
});

test("retirar da frente", () => {
    d.enqueue(2);
    d.enqueue(1);
    d.enqueue(0);
    d.dequeue();
    d.dequeue();
    expect(d.front()).toBe(0);
});

test("retirar de tras", () => {
    d.enqueue(1);
    d.enqueue(2);
    d.enqueue(3);
    d.dequeueBack();
    d.dequeueBack();
    expect(d.front()).toBe(1);
});

test("esta cheia", () => {
    d.enqueue(1);
    d.enqueue(2);
    d.enqueueFront(3);
    d.enqueueFront(5);
    d.enqueueFront(4);
    expect(d.isFull()).toBe(true);
});

test("esta vazio", () => {
    d.enqueue(1);
    d.enqueue(2);
    d.enqueueFront(3);
    d.enqueueFront(5);
    d.enqueueFront(4);
    d.dequeue();
    d.dequeue();
    d.dequeue();
    d.dequeueBack();
    d.dequeueBack();
    expect(d.isEmpty()).toBe(true);
});