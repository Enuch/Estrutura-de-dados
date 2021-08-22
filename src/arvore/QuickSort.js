function QuickSort(data, p, r) {
    let inferior = data[0];
    let superior = data[data.length - 1];

    for (let i = 0; i < data.length; i++) {
        if (data[i] <= superior) {
            [data[i], data[inferior]] = [data[inferior + i], data[i]];
        }
    }

    return data;
}

console.log(QuickSort([5,11,2,10,8]));
