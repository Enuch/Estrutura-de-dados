function BuscaBinaria(key, table) {
    let left = -1;
    let right = table.length;

    while (left < right - 1) {
        let mid = Math.floor((left + right)/2);

        if (table[mid] < key) {
            left = mid;
        } else {
            right = mid;
        }
    }

    return table[right];
}

console.log(BuscaBinaria(8, [1,2,3,4,5,6,7,8]));