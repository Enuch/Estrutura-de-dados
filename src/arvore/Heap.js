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

                tamanho = Math.floor(tamanho / 2);
                
                if (tamanho <= 1) {
                    break;
                }
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
        this.tree[1] = this.tree[this.size];
        this.tree[this.size] = null;
        this.size--;

        for (let i = 1; i <= this.size; i++) {
            for (let i = this.size; i >=2; i--) {
                if (this.tree[i].data > this.tree[Math.floor(i/2)].data) {
                    let aux = this.tree[i];
                    this.tree[i] = this.tree[Math.floor(i/2)];
                    this.tree[Math.floor(i/2)] = aux;    
                }
            }
        }
        
    }
}

export default Heap;