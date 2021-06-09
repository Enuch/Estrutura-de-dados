import Pilha from '../src/Pilha';

let p;

beforeEach(() => {
    p = new Pilha(4);
});

test('is stack empty?', () => {
    expect(p.isEmpty()).toBe(true);
});

test('Pushing item', () => {
    expect(p.push(2)).toBe(2);
});

test('Return size', () => {
    p.push(2);
    expect(p.size()).toBe(1);
});

test('top item?', () => {
    p.push(1);
    p.push(2);
    p.pop();
    expect(p.topo()).toBe(1);
})

test('pop item', () => {
    p.push(3);
    p.push(5);
    p.push(9);
    p.pop();
    p.pop();
    expect(p.pop()).toBe(3);
})

test('Cleaning stack', () => {
    p.push(4);
    p.push(5);
    p.clean();
    expect(p.isEmpty()).toBe(true);
});

test('is full?', () => {
    p.push(2);
    p.push(2);
    p.push(2);
    p.push(2);
    expect(p.isFull()).toBe(true);
});

test('to string', () => {
    p.push(2);
    p.push(4);
    expect(p.toString()).toBe('[2 4 ]');
});
