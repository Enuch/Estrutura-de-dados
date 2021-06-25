import Queue from "./Queue";

class EmpresaCaminhao {
    constructor(maxSize = 10) {
        this.queue = new Queue(maxSize);
        this.carregamentos = 0;
    }

    chegada(caminhao) {
        if (this.queue.isFull()) throw new Error("Quantidade de caminhões máximos atingido");

        this.carregamentos++;
        return this.queue.enqueue(caminhao);
        
    }

    saida() {
        if (this.queue.isEmpty()) throw new Error("Não há mais caminhões para sair");

        return this.queue.dequeue();
    }

    aguardando() {
        return this.queue.length() > 0;
    }

    listaDeAguardo() {
        return this.queue.toString();
    }

    meta() {
        return this.carregamentos === 10;
    }
}

export default EmpresaCaminhao;