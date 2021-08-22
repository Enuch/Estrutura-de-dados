function SelectionSort(data) {
    let menor;
    for (let i = 0; i < data.length; i++) {
        menor = i;

        for (let j = i; j < data.length; j++) {
            if (data[menor] > data[j]) {
                menor = j;
            }
        }

        if (i != menor) {
            let aux = data[menor];
            data[menor] = data[i];
            data[i] = aux;
        }
    }
    return data;
}

console.log(SelectionSort([5,3,6,1,10,20,14,2,4,45,26]));