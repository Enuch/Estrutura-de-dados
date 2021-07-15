class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class QueueList {
    constructor() {
        this.head = new Node();
    }

    enqueue(data) {
        let new_node = new Node(data);
        if (this.isEmpty()) {
            this.head.next = new_node;
        } else {
            let aux = this.head;

            while (aux.next !== null) {
                aux = aux.next;
            }

            aux.next = new_node;
        }
    }

    dequeue() {
        if (this.isEmpty()) throw new Error("Queue underflow");

        let aux = this.head.next;
        this.head.next = aux.next;
        
        return aux.data;
    }

    front() {
        return this.head.next.data;
    }

    isEmpty() {
        return this.head.next === null;
    }

    clear() {
        this.head.next = null;
    }

    length() {
        let count = 0;
        let aux = this.head;

        while (aux.next !== null) {
            aux = aux.next;
            count++;
        }

        return count;
    }

    toString() {
        let str = '';
        let aux = this.head.next;

        while (aux !== null) {
            str += aux.data + (aux.next ? "->" : "");
            aux = aux.next;
        }

        return str;
    }
}

export default QueueList;