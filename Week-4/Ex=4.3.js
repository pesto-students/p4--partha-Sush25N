// https://js-dk14ox.stackblitz.io


const Fib = {
    n: 6,
    [Symbol.iterator]: function() {
        let i = 0;
        let old = 0,
            new1 = 0;
        return {
            next: () => {
                if (i++ <= this.n) {
                    [old, new1] = [new1, (old + new1) || 1];
                    return { value: old, done: false }
                } else {
                    return { done: true }
                }
            }
        }
    }
};

console.log([...Fib]);

for (let num of Fib) {
    console.log(num);
}