function sort(arr) {
    let lower = 0;
    let middle = 0;
    let higher = arr.length - 1;

    let temp;

    while (middle <= higher) {
        if (arr[middle] == 0) {
            temp = arr[lower];
            arr[lower] = arr[middle];
            arr[middle] = temp;

            lower++;
            middle++;
        } else if (arr[middle] == 1) {
            middle++;
        } else {
            temp = arr[middle];
            arr[middle] = arr[higher];
            arr[higher] = temp;
            higher--;
        }
    }

    return arr;
}

const arr = [0, 2, 1, 2, 0];
const arr1 = [0, 1, 0];

console.log(sort(arr));
console.log(sort(arr1));