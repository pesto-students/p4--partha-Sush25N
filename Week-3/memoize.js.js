function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = args.toString();
        console.log(key);
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    };
}

function add(a, b) {
    return a + b;
}

function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}

const memoizeAdd = memoize(add);

memoizeAdd(100, 100);
memoizeAdd(100);
memoizeAdd(100, 200);
memoizeAdd(100, 100);