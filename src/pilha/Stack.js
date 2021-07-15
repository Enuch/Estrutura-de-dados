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

    decToBin(decimal) {
        let dec = decimal;
        let binario = ''; 
        do {
            this.push(parseInt(dec % 2));
            dec = dec / 2;
        }while(dec >= 1);
 
        while (this.size() > 0) {
         binario += this.pop()
        }
 
        return parseInt(binario);
         
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

    changeTopToBase(stack) {
        let topo, size;
        size = this.top;
        topo = this.pop();
        for (let i = 0; i < size; i++) {
            stack.push(this.pop()); 
        }
        this.push(topo);

        topo = stack.topo();

        for (let i = 0; i < size - 1; i++) {
            this.push(stack.pop());
        }

        this.push(topo);
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