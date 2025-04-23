const arr = Array.from({ length: 1e7 }, () => 1);

console.time('time');

for (let i = 0; i < arr.length; i++) {
}

console.timeEnd('time');