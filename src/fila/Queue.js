class Queue {
    constructor(size) {
        this.maxSize = size;
        this.end = -1;
        this.start = 0;
        this.data = [];
    }

    enqueue(data) {
        if (this.isFull()) throw new Error("Queue overflow");

        return this.data[++this.end] = data;
    }

    dequeue() {
        if (this.isEmpty()) throw new Error("Queue underflow")

        const deq = this.data[this.start];
        this.end--;

        for (let i = 0; i < this.length(); i++) {
            this.data[i] = this.data[i + 1];
        }

        return deq;
    }

    front() {
        return this.data[this.start];
    }

    isEmpty() {
        return this.length() === 0;
    }

    isFull() {
        return this.length() === this.maxSize;
    }

    length() {
        return this.end + 1;
    }

    clear() {
        return this.end = -1;
    }

    toString() {
        let arr = '[ ';

        for (let i = 0; i < this.length(); i++) {
            arr += `${this.data[i]} `;
        }

        arr += ']';

        return arr;
    }

}

export default Queue;