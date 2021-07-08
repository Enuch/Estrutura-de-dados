class Node {
    constructor(data) {
        this.next = null;
        this.data = data;
    }
}

class NodeLinkedList {
    constructor() {
        this.array = [];
        this.head = 0;
        this.count = 0;
        this.array[this.head] = new Node(); 
    }

    add(data) {
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.count++;
            this.array[this.head].next = newNode;
            this.array[this.head + 1] = newNode;
        } else {
            this.count++;
            newNode.next = this.array[this.head].next;
            this.array[this.head].next = newNode;
            this.array[this.count] = newNode;
        }
    }

    append(data) {
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.count++;
            this.array[this.head].next = newNode;
        } else {
            this.count++;
            let atual = this.array[this.head];
            while (atual.next != null) {
                atual = atual.next;
            }
            atual.next = newNode;
        }
    }

    addAt(data, position) {
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.count++;
            this.count++;
            this.array[this.head].next = newNode;
        } else {
            this.count++;
            let currentPosition = 1;
            let anterior = this.array[this.head];
            let atual = this.array[this.head].next;
            while (currentPosition != position) {
                anterior = atual;
                atual = atual.next;
                currentPosition++; 
            }
            anterior.next = newNode;
            newNode.next = atual;
            this.array[this.count] = newNode;
        }
    }

    isEmpty() {
        return this.array[this.head] === null;
    }

    length() {
        return this.count;
    }

    search(position) {
        if (this.isEmpty()) throw new Error("LinkedList is empty");
        let currentPosition = 0;
        let atual = this.array[this.head];

        while (currentPosition != position) {
            atual = atual.next;
            currentPosition++;
        }
        return atual.data;
    }

    removeFirst() {
        if (this.isEmpty()) throw new Error("LinkedList is empty!");
        if (this.length() === 1) {
            this.array[this.head].next = null;
            this.count--;
        } else {
            this.count--;
            let atual = this.array[this.head].next; 
            this.array[this.head].next = atual.next;

            for (let i = 1; i < this.length(); i++) {
                this.array[i] = this.array[i + 1];
            }
            return atual.data;
        }
    }

    removeLast() {
        if (this.isEmpty()) throw new Error("LinkedList is empty");
        if (this.length() === 1) {
            this.array[this.head].next = null;
            this.count--;
        } else {
            let atual = this.array[this.head];
            while (atual.next != null) {
                atual = atual.next;
            }
            let data = atual;
            atual = null;
            this.count--;
            return data.data;
        }
    }

    removeAt(position) {
        if (this.isEmpty()) throw new Error("LinkedList is empty");
        if (this.length() === 1) {
            this.array[this.head].next = null;
            this.count--;
        } else {
            this.count--;
            let currentPosition = 1;
            let anterior = this.array[this.head];
            let atual = this.array[this.head].next;
            while (currentPosition != position) {
                anterior = atual;
                atual = atual.next;
                currentPosition++; 
            }
            anterior.next = atual.next;
            return atual.data;
        }
    }
}

export default NodeLinkedList;