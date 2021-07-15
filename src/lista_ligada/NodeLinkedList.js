class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class NodeLinkedList {
    constructor() {
        this.array = [];
        this.array[0] = new Node();
        this.size = 0;
    }

    add(data) {
        let new_node = new Node(data);
        if (this.isEmpty()) {
            this.array[++this.size] = new_node;
            this.array[0].next = this.array[this.size];
        } else {
            this.array[++this.size] = new_node;
            this.array[this.size].next = this.array[0].next;
            this.array[0].next = this.array[this.size];
        }
    }

    append(data) {
        let new_node = new Node(data);
        if (this.isEmpty()) {
            this.array[++this.size] = new_node;
            this.array[0].next = this.array[this.size];
        } else {
            this.array[++this.size] = new_node;
            let aux = this.array[0];

            while (aux.next !== null) {
                aux = aux.next;
            }

            aux.next = this.array[this.size];
        }
    }

    removeFirst() {
        if (this.isEmpty()) throw new Error("Empty list");
        let next = this.array[0].next;
        this.array[0].next = next.next;
        this.size--;

        return next.data;
    }

    removeLast() {
        if (this.isEmpty()) throw new Error("Empty list");

        let aux = this.array[0];
        let aux_b = this.array[0].next;

        while (aux_b.next !== null) {
            aux = aux_b;
            aux_b = aux_b.next;
        }
        this.size--;
        aux.next = null;

        return aux_b.data;
    }

    addAt(data, position) {
        if (position <= 1) {
            this.add(data);
        } else if (position >= this.length()) {
            this.append(data);
        } else {
            let new_node = new Node(data);
            let aux_a = this.array[0];
            let aux_b = this.array[0].next;
            let count = 1;

            while (count !== position) {
                aux_a = aux_b;
                aux_b = aux_b.next;
                count++;
            }
            this.array[++this.size] = new_node;
            aux_a.next = this.array[this.size];
            this.array[this.size].next = aux_b
        }
    }

    removeAt(position) {
        if (position <= 1) {
            this.removeFirst();
        } else if (position >= this.length()) {
            this.removeLast();
        } else {
            let aux_a = this.array[0];
            let aux_b = this.array[0].next;
            let count = 1;

            while (count !== position) {
                aux_a = aux_b;
                aux_b = aux_b.next;
                count++;
            }
            aux_a.next = aux_b.next;
            this.size--;
            return aux_b.data;
        }
    }

    search(data) {
        if (this.isEmpty()) throw new Error("Empty list");

        let aux = this.array[0];

        while (aux.next !== null) {
            aux = aux.next;
            if (aux.data === data) {
                return true
            }
        }
        return false;
    }

    length() {
        return this.size;
    }

    isEmpty() {
        return this.array[0].next === null;
    }

    toString() {
        let aux = this.array[0].next;
		let result = "";

		while (aux !== null) {
			result += aux.data + (aux.next ? "->" : "");
			aux = aux.next;
		}

		return result;
    }
}

export default NodeLinkedList;