/**
 * Created by wenshao on 2017/7/16.
 *
 */
'use strict';
const Log = require('./modules/log');

// 1-作用域
const log1 = new Log(false);
let myVal = "global"; // 全局变量
let myOther = "global";
function myFunction() {
    let myVal = "local";    // 局部变量
    return myVal;
}
function myOtherFunction() {
    myOther = "local";
    return myOther;
}
log1.i(myFunction());
log1.i(myVal);

log1.i(myOther);
log1.i(myOtherFunction());
log1.i(myOther);

// 2-运算符
const log2 = new Log(false);
log2.i('5 & 1:', (5 & 1));   //按位与 101 & 001  == 001   = 1
log2.i('5 | 1:', (5 | 1));   //按位或 101 | 001  == 101   = 5
log2.i('~5:', (~5));    //按位取反 ~00000000000000000000000000000101 == 11111111111111111111111111111010
                        // 由于32位开头第一个是1，所以这是一个负数，将二进制转换成负数，
                        // 需要先反码:00000000000000000000000000000101
                        // 再补码+1:00000000000000000000000000000110 转换成十进制为6，加上符号变成负数 -6

log2.i('5 << 1:', (5 << 1));    // 左位移相当于把所有位向左边移动一位,可以理解为5*(2^1)  0101 << 1 = 1010 = 10
log2.i('5 >> 1:', (5 >> 1));    // 右位移相当于把所有位向右边移动一位,可以理解为parseInt(5/2(2^1))  0101 >> 1 = 0010 = 2


// 3-真假值
const log3 = new Log(false);
log3.i("undefined:", (undefined ? true : false));    // undefined为假
log3.i("null:", (null ? true : false));             // null为假
log3.i("0 :", (0 ? true : false));                  // 数字0或NaN为假 其他为真
log3.i("NaN:", (NaN ? true : false));
log3.i("空字符串:", ('' ? true : false));           // 空字符串为假 其他都为真
log3.i("字符对象", (new String('') ? true : false));           // 对象始终为真
log3.i("数字对象", (new Number(NaN) ? true : false));           // 对象始终为真
log3.i("JSON对象", ({} ? true : false));           // 对象始终为真

// 4 == 和 ===
/*
 1、对于string,number等基础类型，==和===是有区别的
 1）不同类型间比较，==之比较“转化成同一类型后的值”看“值”是否相等，===如果类型不同，其结果就是不等
 2）同类型比较，直接进行“值”比较，两者结果一样
 2、对于Array,Object等高级类型，==和===是没有区别的
 进行“指针地址”比较
 3、基础类型与高级类型，==和===是有区别的
 1）对于==，将高级转化为基础类型，进行“值”比较
 2）因为类型不同，===结果为false
 */


// 5-递归和数组实现斐波那契数列的第n项
const log5 = new Log(false);
function fibFunc(n) {
    if (n == 1 || n == 2) {
        return 1;
    } else {
        return fibFunc(n - 1) + fibFunc(n - 2);
    }
}
function fibFunc1(n) {
    const fib = [1, 1];
    for (let index = 2; index <= n; index++) {
        fib[index] = fib[index - 1] + fib[index - 2];
    }
    return fib[n];
}
log5.i("==========");
// 1 1 2 3 5 8
//log4.i(fibFunc(45));
log5.i("==========");
log5.i(fibFunc1(1005));

// 6-深拷贝的方法
const sourceArray = [1, 2, {b: {c: 1}}];
const sourceJson = {a: 2, b: {c: 1}};
let copyArray;
let copyJson;

const log6 = new Log(true);
// 1 es6的assign方法

copyArray = Object.assign([], sourceArray);
copyJson = Object.assign({}, sourceJson);
copyArray[2].b.c = 2;
copyArray[0] = 222;
copyJson.b.c = 3;
log6.i(sourceArray, sourceJson);    // sourceArray 和sourceJson只能第一层的深拷贝 并不是真正的深拷贝

// 2









