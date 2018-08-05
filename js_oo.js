/**
 * javascript 函数
 * 面向对象编程
 */

// function
// 声明
function sayHello(name){
    console.log('hello',name);
}
sayHello('xiaoming');
// 变量赋值
let saygoodbay = function(name){
    console.log('goodbye',name)
};
saygoodbay('xiaohong');

// oop
// 属性方法
// function Book(title,page,isbn){
//     this.title = title;
//     this.page = page;
//     this.isbn = isbn;

//     this.PrintPage = function(){
//         console.log(this.page);
//     }
// }
// let book = new Book('learn JavaScript ',300,'1282828228');
// book.PrintPage();
// 实例方法
function Book(title,page,isbn){
    this.title = title;
    this.page = page;
    this.isbn = isbn;
}
Book.prototype.PrintPage = function(){
    console.log(this.isbn)
}
let book = new Book('learn JavaScript ',300,'1282828228');
book.PrintPage();