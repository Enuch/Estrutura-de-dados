class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
    }
}

class BinaryTree {
    constructor() {
        this.tree = [];
        this.size = 0;
        this.tree[0] = new Node(0, 99999999);
    }
}