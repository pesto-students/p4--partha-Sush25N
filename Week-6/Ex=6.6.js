function sum3(arr, target) {
    if (arr.length < 3) {
        return 0;
    }

    arr.sort(function(a, b) {
        return a + b;
    });

    let i = 0,
        min_diff = Number.MAX_VALUE;
    let sum;

    while (i < arr.length - 2) {
        let left = i + 1;
        let right = arr.length - 1;
    }
}