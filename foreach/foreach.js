const arr = Array.from({ length: 1e7 }, () => 1);

console.time('time');

arr.forEach(item => item);

console.timeEnd('time');
