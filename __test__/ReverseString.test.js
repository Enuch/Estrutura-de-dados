import LinkedList from '../src/lista_ligada/LinkedList';

let l;

beforeEach(() => {
    l = new LinkedList();
})

test("inverter", () => {
    l.add("T");
    l.append("a");
    l.append("n");
    l.append("i");
    l.append("r");
    l.append("o");
    expect(l.inverter(l).toString()).toBe("o->r->i->n->a->T");
});

test("inverter2", () => {
    l.add("N");
    l.append("i");
    l.append("e");
    l.append("d");
    l.append("s");
    l.append("o");
    l.append("n");
    expect(l.inverter(l).toString()).toBe("n->o->s->d->e->i->N");
});

test("testar erro inversao", () => {
    l.add("E");
    l.append("n");
    l.append("u");
    l.append("c");
    l.append("h");
    expect(l.inverter(l).toString()).toBe("h->c->u->n->E");
});

test("Aleatorio", () => {
    l.add("T");
    l.append("a");
    l.append("n");
    l.append("i");
    l.append("r");
    l.append("o");
    expect(l.aleatorio(l).toString()).toBe("T->a->n->i->r->o");
});
