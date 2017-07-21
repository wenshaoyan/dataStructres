/**
 * Created by wenshao on 2017/7/20.
 */
'use strict';
const Log = require('./modules/log');
const customStruct = require('./modules/custom-struct');
const CustomStack = customStruct.CustomStack;

// 1-栈的使用
const log1 = new Log(false);
let customStack1 = new CustomStack();
customStack1.push(1, 2, 3);
log1.i(customStack1.print());
log1.i(customStack1.pop(), customStack1.pop(), customStack1.pop(), customStack1.pop(), customStack1.peek());
customStack1.clear();
log1.i(customStack1.size());

// 2-使用栈把十进制转换为2进制
const log2 = new Log(true);

function divideBy2(decNumber) {
    if (isNaN(decNumber) || decNumber < 0) {
        return [];
    }
    const reStack = new CustomStack();
    let rem;
    while (decNumber > 0) {
        rem = decNumber % 2;
        reStack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }
    return reStack.toArray();


}
log2.i(divideBy2(45).reverse());





















