class Node {
    constructor(data) {
        this.data = data;
        this.next = null; 
    }
}

class StackList {
    constructor() {
        this.head = new Node();
    }

    push(data) {
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

    pop() {
        if (this.isEmpty()) throw new Error("Stack underflow");

        let aux = this.head;
        let aux_b = this.head.next;

        // aux = head; aux_b = 1; (1) aux = 1; aux_b = 2; (2) aux.next = 2 => null; aux_b.data => return 
        while (aux_b.next !== null) {
            aux = aux_b;
            aux_b = aux_b.next;
        }

        aux.next = null;

        return aux_b.data;
    }

    top() {
        let aux = this.head;

        while (aux.next !== null) {
            aux = aux.next;
        }

        return aux.data;
    }

    clear() {
        this.head = new Node();
    }

    size() {
        let count = 0;
        let aux = this.head;

        while (aux.next !== null) {
            aux = aux.next;
            count++;
        }

        return count;
    }

    isEmpty() {
        return this.head.next === null;
    }

    toString() {
        let str = "";
        let aux = this.head;

        while (aux.next !== null) {
            aux = aux.next;
            str += aux.data + (aux.next ? "->" : "");
        }

        return str;
    }
}

export default StackList;