
class Summer {
    sum(a, b) {
        return a + b
    }
}

let count = 0;

console.time('time')

for (let i = 0; i < 1e7; i++) {
    const summer = new Summer()
    count = summer.sum(count, 1)
}

console.timeEnd('time')