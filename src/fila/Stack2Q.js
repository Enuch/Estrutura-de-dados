import Queue from "./queue";

class Stack2Q {
    constructor(maxTam = 5) {
        this.q1 = new Queue(maxTam);
        this.q2 = new Queue(maxTam);
    }

    push(data) {
        if (this.isFull()) throw new Error("Stack overflow");
        else {
            while (this.q1.length() > 0) {
                this.q2.enqueue(this.q1.dequeue());
            }
            this.q1.enqueue(data);
            while (this.q2.length() > 0) {
                this.q1.enqueue(this.q2.dequeue());
            }
        }
    }

    peek() {
        return this.q1.dequeue();
    }

    pop() {
        if (this.isEmpty()) throw new Error("Stack underflow");
        return this.q1.dequeue();
    }

    isFull() {
        return this.q1.isFull();
    }

    isEmpty() {
        return this.q1.isEmpty();;
    }

    size() {
        return this.q1.length();
    }

    toString() {
        return this.q1.toString();
    }
}

export default Stack2Q;