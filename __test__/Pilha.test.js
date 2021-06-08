import Pilha from '../src/Pilha';

let p;

beforeEach(() => {
    p = new Pilha('Olá');
});

test("Instanciacao", () => {
    expect(p.getMessage()).toBe('Olá');
});