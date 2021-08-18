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

    union(anotherset) {
        let AuB = new Conjunto();
        let valuesA = anotherset.values();
        let valuesB = anotherset.values();

        for (const v of valuesB) {
            AuB.add(v);
        }

        for (const v of valuesA) {
            AuB.add(v);
        }

        return AuB.values();
    }

    intersection(anotherset) {
        let AiB = new Conjunto();
        let valuesB = anotherset.values();

        for (const v of valuesB) {
            if (this.has(v)) {
                AiB.add(v)
            }
        }

        return AiB.values();
    }

    isEqual(anotherset) {
        return (this.contains(anotherset) && anotherset.contains(this));
    }

    difference(anotherset) {
        let AdB = new Conjunto();
        let valuesA = anotherset.values();
        let valuesB = anotherset.values();

        for (const v of valuesA) {
            AdB.add(v);
        }

        for (const v of valuesB) {
            AdB.delete(v);
        }

        return AdB.values();
    } 

    contains(anotherset) {
        let valuesB = anotherset.values();
        
        for (const v of valuesB) {
            if (!this.has(v)) {
                return false;
            }
        }
        return true;
    }
}

export default Conjunto;