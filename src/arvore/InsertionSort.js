function InsertionSort(data) {
    for (let i = 0; i < data.length; i++) {
        let choice = data[i];

        j = i - 1;

        while (j >= 0 && data[j] > choice) {
            data[j+1] = data[j];
            j = j - 1;
        }
        data[j+1] = choice;
    }
    return data;
}

let array = [1, 5, 9, 2, 4, 20, 14];

console.log(InsertionSort(array));
