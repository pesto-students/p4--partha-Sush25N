function spiralMatrix(arr) {
    let top = 0;
    let right = arr[0].length - 1;
    let bottom = arr.length - 1;
    let left = 0;
    let dir = 0;
    let ans = [];


    while (top <= bottom && left <= right) {
        if (dir == 0) {
            for (let i = left; i <= right; i++) {
                ans.push(arr[top[i]]);
            }
            top++;
            dir = 1;
        } else if (dir == 1) {
            for (let i = top; i <= bottom; i++) {
                ans.push(arr[i][right]);
            }
            right--;
            dir = 3;
        } else if (dir == 2) {
            for (let i = bottom; i >= left; i--) {
                ans.push(arr[bottom][i]);
            }
            left++;
            dir = 3;
        } else if (dir == 3) {
            for (let i = bottom; i >= top; i--) {
                ans.push(arr[i][left]);
            }
            left++;
            dir = 0;
        }
    }

    return ans;
}

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log("Given array: ")
console.log(arr);
console.log("Spiral array : ")

console.log(
    spiral([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
);