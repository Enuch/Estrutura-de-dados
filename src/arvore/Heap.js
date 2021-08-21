class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
    }
}

class Heap {
    constructor() {
        this.tree = [];
        this.size = 0;
        this.tree[0] = new Node(0, 99999999);
    }

    inserction(data) {
        let node = new Node(data, 1);
        this.size++;
        this.tree[this.size] = node;
        let tamanho = this.size;
        if (tamanho > 1) {
            while (this.tree[tamanho].data > this.tree[Math.floor(tamanho / 2)].data) {
                
                let aux = this.tree[tamanho];
                this.tree[tamanho] = this.tree[Math.floor(tamanho / 2)];
                this.tree[Math.floor(tamanho / 2)] = aux;
                tamanho = Math.floor(tamanho / 2) + 1;
            }
        }
    }

    toString() {
        let result = "";

        for (let i = 1; i <= this.size; i++) {
            result += this.tree[i].data + (this.tree[i + 1] ? "->" : "");
        }

        return result;
    }

    remove() {

    }
}

export default Heap;