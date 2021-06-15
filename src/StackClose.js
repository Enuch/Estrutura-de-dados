class Stack {
    constructor(size = 5) {
        this.maxSize = size;
        this.data = [];
        this.top = -1; 
    }

    topo() {
        if (this.isEmpty()) {
            throw new Error('Empty');
        }

        return this.data[this.top];
    }

    push(dado) {
        if (this.isFull()) {
            throw new Error('Overflow');
        }

        return this.data[++this.top] = dado;
    }

    size() {
        return this.top + 1;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack Underflow');
        }

        return this.data[this.top--];
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
            result += `${this.data[i]} `;
        }
        result += ']';
        return result;
    }

    verifyColPar(string) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] === '[') {
                this.push(string[i]);
            }
        } 
    }
}

export default StackClose;