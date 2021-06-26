class Deque {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.data = [];
        this.start = 0;
        this.end = -1;
    }

    enqueue(data) {
        if (this.isFull()) throw new Error("Deque OverFlow");

        return this.data[++this.end] = data;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Deque underflow");
        } else {
            const q = this.data[this.start];
            for (let i = 0; i < this.length(); i++) {
                this.data[i] = this.data[i + 1];
            }
            this.end--;
            return q;
        }
        
    }

    enqueueFront(data) {
        if (this.isFull()) throw new Error("Deque overflow");

        if (this.isEmpty()) {
            this.data[this.start] = data;
        } else {
            for (let i = this.length(); i > 0; i--) {
                this.data[i] = this.data[i - 1];
            }
            this.end++;
            this.data[this.start] = data;
        }
        
    }

    dequeueBack() {
        if (this.isEmpty()) throw new Error("Deque underflow");

        return this.data[this.end--];
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

    front() {
        return this.data[this.start];
    }

}

export default Deque;