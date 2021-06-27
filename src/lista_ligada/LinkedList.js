class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    } 
}

class LinkedList {
    constructor() {
        this.head = new Node();
        this.size = 0;
    }

    add(data) {
        let new_node = new Node(data);
        if (this.isEmpty()) {
            this.head.next = new_node;
        } else {
            new_node.next = this.head.next;
            this.head.next = new_node;
        }
        this.size++;
    }

    append(data) {
        let new_node = new Node(data);
        if (this.isEmpty()) {
            this.head.next = new_node;
        } else {
            let atual;
            atual = this.head;
            while (atual.next !== null) {
                atual = atual.next;
            }
            atual.next = new_node;
        }
        this.size++;
    }
    

    addAt(data, position) {
        let new_node = new Node(data);
        if (this.isEmpty()) {
            this.head.next = new_node;
        } else {
            let count = 1;
            let atual;
            let anterior;
            anterior = this.head;
            atual = this.head.next;
            while (count !== position) {
                anterior = atual;
                atual = atual.next;
                count++;
           }
           anterior.next = new_node;
           new_node.next = atual;
        }
        this.size++;
    }

    removeFirst() {
        if (this.isEmpty()) throw new Error("List empty");

        let next = this.head.next;
        this.head.next = next.next;

        this.size--;
    }

    removeLast() {
        if (this.isEmpty()) throw new Error("List empty");

        if (this.length() === 1) {
            this.head.next = null;
        } else {
            let atual;
            atual = this.head;
            while (atual.next !== null) {
                atual = atual.next;
            }
        atual = null;
        this.size--;
        }
        
    }

    removeAt(position) {
        if (this.isEmpty()) {
            throw new Error("List empty");
        } else {
            if (this.length() === 1) {
                this.head.next = null;
            } else {
                let count = 0;
                let atual;
                let anterior;
                atual = this.head;
                while (count !== position) {
                    anterior = atual;
                    atual = atual.next;
                    count++;
                }
                anterior.next = atual.next;
            }
            
        }
        this.size--;
    }

    isEmpty() {
        return this.head.next === null;
    }

    search(position) {
        let count = 0;
        let atual;
        atual = this.head;
        while(count !== position) {
            atual = atual.next;
            count++;
        }
        return atual.data;
    }

    length() {
        return this.size;
    }

    
}

export default LinkedList;