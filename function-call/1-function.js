
function sum(a, b) {
    return a + b
}

let count = 0;

console.time('time')

for (let i = 0; i < 1e7; i++) {
    count = sum(count, 1)
}

console.timeEnd('time')