class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = new Node();
	}
	add(data) {
		let new_node = new Node(data);

		new_node.next = this.head.next;
		this.head.next = new_node;
	}
	append(data) {
		let new_node = new Node(data);

		if (this.isEmpty()) {
			this.head.next = new_node;
		} else {
			let aux = this.head.next;
			while (aux.next !== null) {
				aux = aux.next;
			}
			aux.next = new_node;
		}
	}
	removeFirst() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		} else {
			let aux = this.head.next;
			this.head.next = aux.next;
			return aux.data;
		}
	}
	removeLast() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}

		let aux_a = this.head;
		let aux_b = this.head.next;

		while (aux_b.next !== null) {
			aux_a = aux_b;
			aux_b = aux_b.next;
		}
		aux_a.next = null;
		return aux_b.data;
	}
	last() {
		if (this.isEmpty()) {
			throw new Error("A lista está vazia.");
		}

		let aux_a = this.head;
		let aux_b = this.head.next;

		while (aux_b.next !== null) {
			aux_a = aux_b;
			aux_b = aux_b.next;
		}
		return aux_b.data;
	}
	isEmpty() {
		return this.head.next === null;
	}
	toString() {
		let aux = this.head.next;
		let result = "";

		while (aux !== null) {
			result += aux.data + (aux.next ? "->" : "");
			aux = aux.next;
		}

		return result;
	}
	size() {
		let cont = 0;
		let tmp = this.head.next;

		while (tmp !== null) {
			tmp = tmp.next;
			cont++;
		}
		return cont;
	}
	addAt(position, data) {
		if (position >= this.size()) {
			//adicionando no final
			this.append(data);
		} else {
			if (position <= 0) {
				//adicionando no inicio
				this.add(data);
			} else {
				let new_node = new Node(data);
				let i = 0;

				let aux_a = this.head;
				let aux_b = this.head.next;

				while (i != position) {
					//iteração
					aux_a = aux_b;
					aux_b = aux_b.next;
					i++;
				}
				aux_a.next = new_node;
				new_node.next = aux_b;
			}
		}
	}

	removeAt(position) {
		if (this.isEmpty()) throw new Error("Empty");

		if (position <= 1) {
			return this.removeFirst();
		} else if (position >= this.size()) {
			return this.removeLast();
		} else {
			let aux_a = this.head;
			let aux_b = this.head.next;
			let count = 1;

			while (count !== position) {
				aux_a = aux_b;
				aux_b = aux_b.next;
				count++;
			}
			aux_a.next = aux_b.next;
			return aux_b.data;
		}
	}

	search(data) {
		if (this.isEmpty()) {
			return false;
		} else {
			let tmp = this.head.next;
			while (tmp !== null) {
				if (tmp.data === data) {
					return true;
				}
				//iteração
				tmp = tmp.next;
			}
			return false;
		}
	}
	addInOrder(data) {
		let new_node = new Node(data);

		if (this.isEmpty()) {
			this.head.next = new_node;
		} else {
			let aux_a = this.head;
			let aux_b = this.head.next;

			while (aux_b != null) {
				if (aux_b.data > data) {
					aux_a.next = new_node;
					new_node.next = aux_b;
					return;
				}
				//iteração
				aux_a = aux_b;
				aux_b = aux_b.next;
			}

			//caso o if nunca seja true
			aux_a.next = new_node;
			new_node.next = null;
			return;
		}
	}

	decrescent(data) {
		let new_node = new Node(data);

		if (this.isEmpty()) {
			this.head.next = new_node;
		} else {
			let aux_a = this.head;
			let aux_b = this.head.next;

			while (aux_b != null) {
				if (aux_b.data < data) {
					aux_a.next = new_node;
					new_node.next = aux_b;
					return;
				}
				//iteração
				aux_a = aux_b;
				aux_b = aux_b.next;
			}

			//caso o if nunca seja true
			aux_a.next = new_node;
			new_node.next = null;
			return;
		}
	}

	clear() {
		this.head = new Node(null);
	}

	inverter(normal) {
		let invertida = normal;
		for (let i = 0; i < normal.size(); i++) {
			invertida.addAt(i, invertida.removeLast());
		}
		return invertida;
	}

	aleatorio(normal) {
		let random;
		let aleatorio = normal;
		for (let i = 0; i < normal.size(); i++) {
			random = Math.floor(Math.random() * normal.size());
			aleatorio.addAt(random, aleatorio.removeLast());
		}
		return aleatorio;
	}

	subString(A, B) {
		let substring = new LinkedList();
		let tmp = this.head.next;
		let cont = 0;
		while (tmp !== null) {
			if (tmp.data === A) {
				substring.add(A);
				cont++;
			}
			if (tmp.data !== A && cont > 0 && tmp.data !== B) {
				substring.append(tmp.data)

			} else if (tmp.data === B) {
				substring.append(B);
			}
			//iteração
			tmp = tmp.next;
		}

		return substring;
	}

	josephus() {
		let count = 1;
		let i = 1;

		while (this.size() > 1) {
			if (this.size() < i) {
				i = 0;
			}
			if (count % 3 === 0) {
				console.log(this.removeAt(i));
			}

			i++
			count++;
		}

		return this.head.next.data;

	}
}

export default LinkedList;