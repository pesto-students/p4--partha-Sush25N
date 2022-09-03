function max_sum(arr) {
    let max_sum = 0;
    let current_sum = 0;

    for (i = 0; i < arr.length; i++) {
        current_sum += arr[i];

        if (current_sum > max_sum) {
            max_sum = current_sum;
        }

        if (current_sum < 0) {
            current_sum = 0;
        }
    }

    return max_sum;
}

console.log(max_sum([1, 2, 3, 4, -10]));
console.log(max_sum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));