console.time('time');
class MyClass {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
for (let i = 0; i < 1e7; i++) {
    new MyClass(1, 2);
}
console.timeEnd('time');

