class Stack {
    constructor(size = 5) {
        this.maxSize = size;
        this.dados = [];
        this.top = -1; 
    }

    topo() {
        if (this.isEmpty()) {
            throw new Error('Empty');
        }

        return this.dados[this.top];
    }

    push(dado) {
        if (this.isFull()) {
            throw new Error('Overflow');
        }

        return this.dados[++this.top] = dado;
    }

    size() {
        return this.top + 1;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack Underflow');
        }

        return this.dados[this.top--];
    }

    clean() {
        this.top = -1;
    }

    isFull() {
        return this.size() === this.maxSize;
    }

    isEmpty() {
        return this.size() === 0; 
    }

    toString() {
        let result = '[';
        for (let i = 0; i <= this.top; i++) {
            result += `${this.dados[i]} `;
        }
        result += ']';
        return result;
    }

    verify(string) {
        let p = new Stack(string.length);
        let aux;
        for (let i = 0; i < p.length; i++) {
            if (string[i] === '(' || string[i] === '[') {
                p.push(string[i]);
            } else {
                aux = p.pop();
                if (aux === '(' && (string[i] !== ')') || aux === '[' && (string[i] !== ']')) {
                    return false
                }
            }
        }
        return p.isEmpty();
    }
}

export default Stack;