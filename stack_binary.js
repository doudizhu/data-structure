let Stack = require('./stack_base');

function divideBy2(num){
    let stack = new Stack();
    let rem;
    let binaryString = '';

    while(num > 0){
        rem = Math.floor(num%2);
        stack.push(rem);
        num = Math.floor(num/2)
    }
    while(!stack.isEmpty()){
        binaryString+=stack.pop().toString();
    }
    return binaryString;
}

console.log(divideBy2(10));

function baseConvarter(num,base){
    let stack = new Stack();
    let rem;
    let binaryString = '';
    let digits = '0123456789ABCDEF';

    while(num > 0){
        rem = Math.floor(num%base);
        stack.push(rem);
        num = Math.floor(num/base)
    }
    while(!stack.isEmpty()){
        binaryString+=digits[stack.pop()].toString();
    }
    return binaryString;
}

console.log(baseConvarter(10,2));
console.log(baseConvarter(10,8));
console.log(baseConvarter(10,16));