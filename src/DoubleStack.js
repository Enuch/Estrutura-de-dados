class DoubleStack {
    constructor(size) {
        this.maxSize = size;
        this.top1 = -1;
        this.top2 = size;
        this.data = [];
    }

    topo1() {
        return this.data[this.top1];
    }

    topo2() {
        return this.data[this.top2];
    }

    size1() {
        return this.top1 + 1;
    }

    size2() {
        return this.top2 - 1;
    }

    pushTop1(data) {
        if (this.isFull()) {
            throw new Error("Overflow");
        }
        return this.data[++this.top1] = data;
    }

    pushTop2(data) {
        if (this.isFull()) {
            throw new Error("Overflow");
        }
        return this.data[--this.top2] = data;
    }

    popTop1() {
        if (this.isEmpty1()) {
            throw new Error("Underflow");
        }
        return this.data[this.top1--];
    }

    popTop2() {
        if (this.isEmpty1()) {
            throw new Error("Underflow");
        }
        return this.data[this.top2++];
    }

    isFull() {
        return (this.top1 + 1) === this.top2;
    }

    isEmpty1() {
        return this.size1() === 0;
    }

    isEmpty2() {
        return this.size2() === this.maxSize - 1;
    }

}

export default DoubleStack;