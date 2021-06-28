import LinkedList from "./LinkedList";


class StackList {
    constructor() {
        this.topo = -1;
        this.list = new LinkedList();
    }

    push(data) {
        this.list.append(data);
        this.topo++;
        return data;
    }

    pop() {
        if (this.isEmpty()) throw new Error("Stack underflow");
        this.topo--;
        return this.list.removeLast();
    
    }

    top() {
        return this.list.search(this.topo+1);
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