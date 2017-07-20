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
const log2 = new Log(false);
const arr = [1, 2, 3, 4];
// 数组尾部追加元素
let customArray = new CustomArray(11, 12, 13);
customArray.unshift(1);
customArray.push(21, 22, 23);

customArray.shift();

log2.i(customArray);


// 3-多维数组

var log3 = new Log(true);
const averageTemp = [];
averageTemp[0] = [];
averageTemp[0][0] = 1;
averageTemp[0][1] = 2;
averageTemp[0][2] = 3;
averageTemp[1] = [];
averageTemp[1][0] = 1;
averageTemp[1][1] = 2;
averageTemp[1][2] = 3;
for (let val1 of averageTemp) {
    for (let val2 of val1) {
        log3.i(val2);
    }
}
const arrCopy = JSON.parse(JSON.stringify(averageTemp));  // 数组的深拷贝
arrCopy[0] = [];



log3.i(averageTemp);


// 4-数组的自带的函数

const numbers = [6,2,8,4];
const isEven = function (x) {
    return x % 2 == 0;
};
log3.i("判断数组元素是否都为偶数",numbers.every(isEven));  // every: 对数组中的每个元素进行遍历,如果该函数每项都返回true 则返回true

var customArray2 = new CustomArray(2,4,6);
log3.i(customArray2.every(isEven));

customArray2.concat()

