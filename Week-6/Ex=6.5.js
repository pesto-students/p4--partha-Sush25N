function pairWithDifference(arr, n) {
    const randomSet = new Set();
    for (let a of arr) {
        randomSet.add(a);
    }
    for (let i = 0; i < arr.length; i++) {
        let num1 = n + arr[i];
        let num2 = n - arr[i];

        if (randomSet.has(num1) || randomSet.has(num2)) {
            return 1;
        }
    }
    return 0;
}

console.log(pairWithDifference([5, 10, 3, 2, 50, 80], 78));
console.log(pairWithDifference([-10, 20], 30));
console.log(pairWithDifference([-10, 20], 21));