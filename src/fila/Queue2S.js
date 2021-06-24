import Stack from "../pilha/Stack";

class Queue2S {
    constructor(maxSize = 5) {
        this.s1 = new Stack(maxSize);
        this.s2 = new Stack(maxSize);
    }

    enqueue(data) {
        if (this.isFull()) throw new Error("Queue overflow");
        while (this.s1.size() > 0) {
            this.s2.push(this.s1.pop());
        }
        this.s1.push(data);
        while (this.s2.size() > 0) {
            this.s1.push(this.s2.pop());
        }
    }

    dequeue() {
        if (this.isEmpty()) throw new Error("Queue underflow")
        return this.s1.pop();
    }

    front() {
        return this.s1.topo();
    }

    isEmpty() {
        return this.s1.isEmpty();
    }

    isFull() {
        return this.s1.isFull();
    }

    size() {
        return this.s1.size();
    }

    toString() {
        return this.s1.toString();
    }
}

export default Queue2S;