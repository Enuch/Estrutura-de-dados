import LinkedList from "./LinkedList";

class QueueList {
    constructor() {
        this.queue = new LinkedList();
        this.start = 0;
        this.end = -1;
    }

    enqueue(data) {
        this.queue.append(data);
    }

    dequeue() {
        if (this.isEmpty()) throw new Error("Queue underflow");
        return this.queue.removeFirst();
    }

    front() {
        return this.queue.head.next.data;
    }

    isEmpty() {
        return this.queue.isEmpty();
    }

    clear() {
        this.queue.head.next = null;
    }

    size() {
        return this.queue.length();
    }
}

export default QueueList;