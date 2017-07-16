/**
 * Created by wenshao on 2017/7/16.
 */
'use strict';
const Log = require('./modules/log');
const customStruct = require('./modules/custom-struct');
const CustomArray = customStruct.CustomArray;



// 1-用数组计算斐波那契数列前20个数字 第一个数为1 第二个数为2 之后的数为前两个之和
const log1 = new Log(false);
const fib = [];
fib[0] = 1;
fib[1] = 2;
for (let index = 2; index < 20; index++) {
    fib[index] = fib[index - 1] + fib[index - 2];
}
log1.i(fib);

// 2-数组操作
const log2 = new Log(true);
const arr = [1, 2, 3, 4];
// 数组尾部追加元素
arr[arr.length] = 5;
arr.push(6);
// 往数组头部插入一个元素
for (let index = arr.length; index >= 0; index--) {
    arr[index] = arr[index - 1];
}
arr[0]=-1;
arr.unshift(-3,-2);
log2.i(arr);



let customArray = new CustomArray({},2,3);
customArray.unshift(1)
log2.i(customArray)



