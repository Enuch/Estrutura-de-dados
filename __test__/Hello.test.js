import Hello from '../src/Hello';

let h;

beforeEach(() => {
    h = new Hello('Olá');
});

test("Instanciacao", () => {
    expect(h.getMessage()).toBe('Olá');
});