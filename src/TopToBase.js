class TopToBase {
    constructor(size) {
        this.maxSize = size;
        this.data = [];
        this.top = -1;
        this.base = 0;
    }

    topo() {
        return this.data[this.top];
    }

    size() {
        return this.top + 1;
    }

    push(data) {
        if (this.isFull()) throw new Error("Overflow");
        return this.data[++this.top] = data;
    }
    
    pop() {
        if (this.isEmpty()) throw new Error("Underflow");
        return this.data[this.top--]; 
    }

    isEmpty() {
        return this.size() === 0;
    }

    isFull() {
        return this.size() === this.maxSize;
    }

    clean() {
        this.top = -1;
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

}

export default TopToBase;