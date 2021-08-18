import LinkedList from "./LinkedList";

class PriorityQueue {
    constructor() {
        this.data = new LinkedList();
    }

    enqueue(data) {
        this.data.decrescent(data);
    }

    dequeue() {
        this.data.removeFirst();
    }

    toString() {
        return this.data.toString();
    }
}

export default PriorityQueue;