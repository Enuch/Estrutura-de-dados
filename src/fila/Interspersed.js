import Queue from "./Queue";

class Interspersed {
    constructor(maxSize = 10) {
        this.queue = new Queue(maxSize);
    }

    interspersed(queue1, queue2) {
        while (!(queue1.isEmpty()) && !(queue2.isEmpty())) {
            this.queue.enqueue(queue1.dequeue());
            this.queue.enqueue(queue2.dequeue());
        };
    }

    toString() {
        let arr = "[ ";
        for (let i = 0; i <= this.queue.length(); i++) {
            arr += `${this.queue.dequeue()} `
        }
        arr += "]";
        return arr;
    }

    arrai() {
        return this.queue;
    }
}

export default Interspersed;