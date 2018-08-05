/**
 * javascript 基础
 */
// 变量
// 1.var

// 2.let（与var区别：1）不能重复声明）

// 3.const == 常量（不能重复赋值）

const a = 1;
var b = 1;
let c = 2;

// 操作符
// +
c = a + b;
// -
c = a - b;
// *
c = a * b;
// /
c = a / b;
console.log(c);
// %
c = a % b;
console.log(c);

// ++
// --
// a += 1; // === a=a+1
// a -= 1;
// a /= 1;
// a %= 1;


// 比较操作符
console.log(1 == '1');
console.log(1 === '1');
console.log(1 != '1');
console.log(1 !== '1');
// 逻辑操作符
console.log(1=='1' || 1 === '1');
console.log(1=='1' && 1 === '1');