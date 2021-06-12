class StackReverse {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.reverseWord;
        this.stack = []
        this.top = -1;
    }

    topo() {
        if (this.isEmpty()) {
            throw new Error('Empty');
        }

        return this.stack[this.top];
    }

    push(dado) {
        if (this.isFull()) {
            throw new Error('Overflow');
        }

        return this.stack[++this.top] = dado;
    }

    size() {
        return this.top + 1;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack Underflow');
        }

        return this.stack[this.top--];
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
            result += `${this.stack[i]} `;
        }
        result += ']';
        return result;
    }

    reverse(word) {
        for (let i = 0; i < word.length; i++) {
            this.push(word[i]);
        }

        this.reverseWord = '';

        for (let i = 0; i < word.length; i++) {
            this.reverseWord += this.pop();
        }

        return this.reverseWord;
    }
}

export default StackReverse;