class Node {
    constructor(key) {
        this.key = key;
        this.right = null;
        this.left = null;
    }
}

class Binarytree {
    constructor() {
        this.root = null;
    }

    insertion(key) {
        if (this.isEmpty()) {
            this.root = new Node(key);
            console.log(this.root);

        } else {
            let new_node = new Node(key);
            let raiz = this.root;

            while (raiz != null) {
                if ((raiz.right == null && new_node.key > raiz.key) || (raiz.left == null && new_node.key < raiz.key)) {
                    if (new_node.key > raiz.key) {
                        raiz.right = new_node;
                        console.log(this.root);
                        break;
                    } else {
                        raiz.left = new_node;
                        console.log(this.root);

                        break;
                    }
                } else {
                    if (new_node.key > raiz.key) {
                        raiz = raiz.right;
                    } else {
                        raiz = raiz.left;
                    }
                }

            }
        }

        return this.root;
    }

    isEmpty() {
        return this.root === null;
    }

    toString() {

    }

    search(value) {
        let raiz = this.root;

        while (raiz != null) {

            if (value == raiz.key) {
                return true
            }

            if (value > raiz.key) {
                raiz = raiz.right;
            } else {
                raiz = raiz.left;
            }

        }
        return false;
    }

    remove() {

    }

    max() {
        let raiz = this.root;
        
        while (raiz.right !== null) {
            raiz = raiz.right;
        }

        return raiz.key;
    }

    min() {
        let raiz = this.root;

        while (raiz.left !== null) {
            raiz = raiz.left;
        }

        return raiz.key;
    }
}

export default Binarytree;