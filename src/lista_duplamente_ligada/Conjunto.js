import DoublyLinkedList from './DoublyLinkedList';

class Conjunto {
    constructor() {
        this.data = new DoublyLinkedList();
    }

    add(value) {
        if (this.has(value)) {
            return false;
        } else {
            this.data.add(value);
            return true;
        }
    }

    delete(value) {
        this.data.remove(value);
    }

    has(value) {
        return this.data.search(value);
    }

    clear() {
        this.data.clear();
    }

    length() {
        return this.data.size();
    }

    values() {
        return this.data.asArray();

    }

    isEmpty() {
        return this.data.isEmpty();
    }
}

export default Conjunto;