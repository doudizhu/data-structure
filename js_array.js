/**
 * 数组
 */
// // 1.为什么要使用数组
// var averangeTempJan = 20.1;
// var averangeTempFeb = 30.1;
// var averangeTempMar = 10.1;

// averangeTemp[0] = 20.1;
// averangeTemp[0] = 30.1;
// averangeTemp[0] = 10.1;

// 2.创建和初始化数组
// 方式一：
// let averangeTemp = new Array(12);
// averangeTemp[0] = 20.1;
// averangeTemp[0] = 30.1;
// averangeTemp[0] = 10.1;
// console.log(averangeTemp);
// 方式二：字面量方式
let averangeTemp = [10,21,12,13];
// console.log(averangeTemp);
// console.log(averangeTemp.length);
// for(var index=0;index<averangeTemp.length;index++){
//     var element = averangeTemp[index];
//     console.log(element)
// }


// 3.斐波那契数列 20
let fibinaci = [];
fibinaci[0] = 1;
fibinaci[1] = 2;

for(var i=2;i<20;i++){
    fibinaci[i] = fibinaci[i-1] + fibinaci[i-2]
    console.log(i,fibinaci[i])
}