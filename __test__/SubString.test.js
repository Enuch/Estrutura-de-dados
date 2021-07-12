import LinkedList from "../src/LinkedList";

let lista;

beforeEach(() => {
    lista = new LinkedList();
});

test("test sub String", () => {
    lista.add("T");
    lista.append("a");
    lista.append("n");
    lista.append("i");
    lista.append("r");
    lista.append("o");
    expect(lista.subString("n","o").toString()).toBe("n->i->r->o"); // n->i->r->o
});
