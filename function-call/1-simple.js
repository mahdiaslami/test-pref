let count = 0;
let start = 0

console.time('time')

for (let i = 0; i < 1e7; i++) {
    count++
}

console.timeEnd('time')