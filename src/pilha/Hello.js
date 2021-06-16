class Hello {
    constructor(m = 'hello') {
        this.message = m;
    }

    getMessage() {
        if (this.message != undefined) {
            return this.message;
        }
        throw new Error("Mensagem não encontrada!");
    }

}

export default Hello;