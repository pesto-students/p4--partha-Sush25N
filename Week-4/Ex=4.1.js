const getNumber = newPromise((resolve.reject) => {
    const random = Math.random();
    if (random % 5 != 0) {
        resolve("not % by 5");
    } else {
        reject("% by 5");
    }
})

.then(console.log);
.catch(console.error);
.finally(console.log("Promise fulfilled successfully."))