import EmpresaCaminhao from "../src/fila/EmpresaCaminhao";

let e;

beforeEach(() => {
    e = new EmpresaCaminhao();
});

test("chegada", () => {
    e.chegada("caminhao 1");
    e.chegada("caminhao 2");
    expect(e.chegada("caminhao 3")).toBe("caminhao 3");
});

test("saida", () => {
    e.chegada("1");
    expect(e.saida()).toBe("1");
});

test("aguardo", () => {
    e.chegada("1");
    expect(e.aguardando()).toBe(true);
});

test("lista de aguardo", () => {
    e.chegada(1);
    e.chegada(2);
    expect(e.listaDeAguardo()).toEqual("[ 1 2 ]");
});

test('meta atingida', () => {
    e.chegada(1);
    e.chegada(1);
    e.chegada(1);
    e.chegada(1);
    e.chegada(1);
    expect(e.meta()).toBe(false);
    e.chegada(1);
    e.chegada(1);
    e.chegada(1);
    e.chegada(1);
    e.chegada(1);
    expect(e.meta()).toBe(true);

});