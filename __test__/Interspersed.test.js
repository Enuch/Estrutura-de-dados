import Interspersed from "../src/fila/Interspersed";
import Queue from "../src/fila/Queue";

let i;
let fila1;
let fila2;

beforeEach(() => {
    i = new Interspersed();
    fila1 = new Queue(5);
    fila2 = new Queue(5);

})

test('teste', () => {
    fila1.enqueue(1);
    fila1.enqueue(2);
    fila1.enqueue(3);
    fila1.enqueue(4);
    fila1.enqueue(5);
    fila2.enqueue(6);
    fila2.enqueue(7);
    fila2.enqueue(8);
    fila2.enqueue(9);
    fila2.enqueue(10);

    i.interspersed(fila1, fila2);

    expect(i.arrai().toString()).toEqual("[ 1 6 2 7 3 8 4 9 5 10 ]");

});