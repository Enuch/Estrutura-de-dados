class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    add(data) {
        let new_node = new Node(data);
        if(this.isEmpty()) {
            this.head = new_node;
            this.tail = new_node;
        } else {
            new_node.next = this.head;
            this.head.previous = new_node;
            this.head = new_node;
        }
        this.count++;
    }

    append(data) {
        let new_node = new Node(data);
        if(this.isEmpty()) {
            this.head = new_node;
            this.tail = new_node;
        } else {
            this.tail.next = new_node;
            new_node.previous = this.tail;
            this.tail = new_node;
        }
        this.count++;
    }

    addAt(data, position) {
        if(position <= 1) {
            this.add(data);
        } else if(position >= this.size) {
            this.append(data)
        } else {
            let new_node = new Node(data);
            let a = this.head;
            let b = this.head.next;
            let count = 2;
            while (count !== position) {
                a = b;
                b = b.next;
                count++;
            }
            a.next = new_node;
            new_node.previous = a;
            new_node.next = b;
            b.previous = new_node;
           this.count++;

        }
    }

    removeFirst() {
        if(this.isEmpty()) throw new Error("Empty");
        if (this.size() === 1) {
            this.head = null;
            this.count--;
        } else {
            let next = this.head.next;
            next.previous = null;
            this.head = next;
            this.count--;
        }
       
    }

    removeLast() {
        if(this.isEmpty()) throw new Error("Empty");
        if (this.size() === 1) {
            this.head = null;
            this.count--;

        } else {
            let previous = this.tail.previous;
            previous.next = null;
            this.tail = previous;
            this.count--;
        }
        
    }

    removeAt(position) {
        if(this.isEmpty()) throw new Error("Empty")

        if (position <= 1) {
            this.removeFirst();
        } else if (position >= this.size()) {
            this.removeLast()
        } else {
            let a = this.head;
            let b = this.head.next;
            let count = 2;

            while (count !== position) {
                a = b;
                b = b.next;
                count++;
            }
            a.next = b.next;
            b.next.previous = a;
            this.count--;
        }
           
    }

    remove(dado) {
		if (!this.isEmpty()) {
			let current = this.head;
			let next = this.head.next;
			let last = this.tail;
			let aux;

			if (current.data === dado) {
				return this.removeFirst();
			} else if (last.data === dado) {
				return this.removeLast();
			} else {
				while (next != null) {
					if (next.data === dado) {
						aux = next.next;
						current.next = next.next;
						aux.anterior = current;
						return true;
					}
					//iteração
					current = next;
					next = next.next;
				}
			}
		}

		return false;
	}

    isEmpty() {
        return this.head === null;
    }

    search(data) {
        let a = this.head;

        while (a !== null) {
            if (a.data === data) {
                return true;
            }
            a = a.next;
        }
        return false;
    }

    size() {
        return this.count;
    }

    toString() {
		let aux = this.head;
		let result = "";

		while (aux !== null) {
			result += aux.data + (aux.next ? "->" : "");
			aux = aux.next;
		}

		return result;
	}

    clear() {
        this.head = null;
        this.tail = null;
        this.count = 0;
    }

    asArray() {
		let current = this.head;
		let dados = [];

		while (current != null) {
			dados.push(current.data);
			current = current.next;
		}

		return dados;
	}
}

export default DoublyLinkedList;