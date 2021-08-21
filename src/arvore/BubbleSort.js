export default function BubbleSort(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[j] > data[j + 1]) {
                let aux = data[j];
                data[j] = data[j + 1];
                data[j + 1] = aux;
            }
        }
    }
    return data;
}