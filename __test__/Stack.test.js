import Stack from '../src/Stack';

let s;

beforeEach(() => {
    s = new Stack(4);
});

test('is stack empty?', () => {
    expect(s.isEmpty()).toBe(true);
});

test('Pushing item', () => {
    expect(s.push(2)).toBe(2);
});

test('Return size', () => {
    s.push(2);
    expect(s.size()).toBe(1);
});

test('top item?', () => {
    s.push(1);
    s.push(2);
    s.pop();
    expect(s.topo()).toBe(1);
})

test('pop item', () => {
    s.push(3);
    s.push(5);
    s.push(9);
    s.pop();
    s.pop();
    expect(s.pop()).toBe(3);
})

test('Cleaning stack', () => {
    s.push(4);
    s.push(5);
    s.clean();
    expect(s.isEmpty()).toBe(true);
});

test('is full?', () => {
    s.push(2);
    s.push(2);
    s.push(2);
    s.push(2);
    expect(s.isFull()).toBe(true);
});

test('to string', () => {
    s.push(2);
    s.push(4);
    expect(s.toString()).toBe('[2 4 ]');
});
