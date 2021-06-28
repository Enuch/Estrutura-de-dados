import LinkedList from "./LinkedList";


class StackList {
    constructor() {
        this.list = new LinkedList();
        this.topo;
    }

    push(data) {
        this.list.add(data);
        return data;
    }

    pop() {
        if (this.isEmpty()) throw new Error("Stack underflow");
        return this.list.removeFirst();
    
    }

    top() {
        if (this.isEmpty()) throw new Error("Stack underflow");
        return this.topo = this.list.head.next.data;
    }

    size() {
        return this.list.length();
    }

    clear() {
        this.list.head.next = null;
    }

    isEmpty() {
        return this.list.isEmpty();
    }
}

export default StackList;