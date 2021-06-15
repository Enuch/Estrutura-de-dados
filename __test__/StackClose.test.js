import StackClose from "../src/StackClose";

let sc;

beforeEach(() => {
    sc = new StackClose(10);
})

test('Analise colchetes e parenteses', () => {
    expect(sc.verifyColPar("()")).toBe("correto");
});

test('Analise colchetes e parenteses 2', () => {
    expect(sc.verifyColPar("[[()]()]")).toBe("correto");
});

test('Analise colchetes e parenteses 3', () => {
    expect(sc.verifyColPar("(]")).toBe("errado");
});

test('Analise colchetes e parenteses 4', () => {
    expect(sc.verifyColPar("[(])")).toBe("errado");
});